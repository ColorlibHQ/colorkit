/**
 * Internal dependencies
 */
import BlockControls from './controls';
import icons from '../../../utils/icons';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Placeholder, Dashicon, TextControl, Spinner } = wp.components;
const { Component, Fragment } = wp.element;

/**
 * Block edit function
 */
export default class Edit extends Component {

	constructor( props ) {
		super( ...arguments );

		this.state = {
			status: 'loading-plugin',
			searchInput: '',
			pluginList: [],
		}
	}

	searchPlugins( value ) {
		this.setState( { status: 'loading-results' } );

		wp.apiFetch({ path: `machoblocks/v1/get_plugins?search='${ encodeURIComponent( value ) }` }).then( response => {
			this.setState({
				pluginList: response.data.plugins,
				status: 'ready',
			});
		});
	}

	getPlugin( slug ) {
		this.setState( { status: 'loading-plugin' } );

		wp.apiFetch({ path: `machoblocks/v1/get_plugins?slug='${ encodeURIComponent( slug ) }` }).then( response => {
			this.setPlugin( response.data );
			this.setState({ status: 'ready' });
		});
	}

	setPlugin( plugin ) {
		this.props.setAttributes({
			pluginSlug: plugin.slug,
			pluginName: plugin.name,
			pluginIcon: this.getPluginIcon( plugin ),
			pluginVersion: plugin.version,
			pluginAuthor: plugin.author,
			pluginRating: plugin.rating,
			pluginDescription: plugin.short_description,
			pluginActiveInstalls: plugin.active_installs,
			pluginDownloadLink: plugin.download_link
		});
	}

	componentWillMount() {
		if( this.props.attributes.pluginSlug !== '' ) {
			this.getPlugin( this.props.attributes.pluginSlug );
		}
		else {
			this.setState( { status: 'ready' } );
		}
	}

	onPluginSelectClick( plugin ) {
		this.setPlugin( plugin );
		this.setState( { pluginList: [] } );
	}

	onSearchChange( value ){

		this.setState( { searchInput: value } );

		clearTimeout(this.timeout);

		if( value.length < 3 ) {
			this.setState( { pluginList: [] } );
		}

		if( value.length >= 3 && this.state.status === 'ready' ) {
			this.timeout = setTimeout( () => this.searchPlugins( value ), 500 );
		}
	}

	getPluginIcon( plugin ) {
		let icon = '';
		if ( plugin.icons['2x'] ) {
			icon = plugin.icons['2x'];
		} else if ( plugin.icons['1x'] ) {
			icon = plugin.icons['x'];
		} else if ( plugin.icons.default ) {
			icon = plugin.icons.default;
		}

		return icon;
	}

	getNiceNumber( n ) {
		if ( n > 1000000000 ) {
			return Math.round( n / 1000000000 ) + '+' + ' billion';
		} else if ( n > 1000000 ) {
			return Math.round( n / 1000000 ) + '+' + ' million';
		}

		return n + '+';
	}

	getStars( r ) {
		let rating = Math.round( r / 10 ) / 2;
		let fullStars = Math.floor( rating );
		let halfStars = Math.ceil( rating - fullStars );
		let emptyStars = 5 - fullStars - halfStars;

		let output = [];

		_.times( fullStars, () => {
			output.push(<div class="wp-block-machoblocks-plugin__star-full" aria-hidden="true"></div>);
		});

		_.times( halfStars, () => {
			output.push(<div class="wp-block-machoblocks-plugin__star-half" aria-hidden="true"></div>);
		});

		_.times( emptyStars, () => {
			output.push(<div class="wp-block-machoblocks-plugin__star-empty" aria-hidden="true"></div>);
		});

		return output;
	}

	render() {

		const { status, pluginList, searchInput } = this.state;
		const { attributes, setAttributes, className } = this.props;
		const { pluginSlug, pluginName, pluginIcon, pluginVersion, pluginAuthor, pluginRating, pluginDescription, pluginActiveInstalls, pluginDownloadLink } = attributes;

		if ( status === 'loading-plugin' ) {
			return [
				<Placeholder
					icon="admin-plugins"
					label={ __( 'Plugin Card' ) }
				>
					<Spinner/>
				</Placeholder>
			];
		}

		if( pluginSlug === '' ) {
			return [
				<Placeholder
					label={ __( 'Plugin Card' ) }
				>
					<div class={ className + `__placeholder` }>
						<Dashicon icon="search" />
						{ 'loading-results' === status && (
							<Spinner/>
						) }
						<TextControl
							type="text"
							placeholder={ __( 'Search for a plugin' ) }
							value={ searchInput }
							onChange={ ( value ) => this.onSearchChange( value ) }
						/>
						{ pluginList.length > 0 && (
							<div class={ className + `__search-results` }>
									{ pluginList.map( ( plugin, index ) => {
										return [
											<div
												key={ index }
												onClick={ () => this.onPluginSelectClick( plugin ) }
											>
												<img src={ this.getPluginIcon( plugin ) } />
												<span>{ plugin.name }</span>
											</div>
										];
									}) }
							</div>
						) }

					</div>
				</Placeholder>
			];
		}

		return [
			<Fragment>
				<BlockControls { ...this.props } />

				<div class={ className }>

					<div class={ className + `__details` }>
						<div>
							<img class={ className + `__icon` } src={ pluginIcon } alt={ pluginName } />
							<a class={ className + `__download` } href={ pluginDownloadLink }>Download</a>
						</div>
						<div>
							<h5 class={ className + `__name` }>{ pluginName }</h5>
							<div class={ className + `__description` }><p>{ pluginDescription }</p></div>
							<div class={ className + `__sub` }>
								<div class={ className + `__author` }>
									by <span dangerouslySetInnerHTML={ { __html: pluginAuthor } }></span>
								</div>
							</div>
						</div>
					</div>

					<div class={ className + `__stats` }>
						<div class={ className + `__installs` }>
							<strong>{ __( 'Active Installations' ) }</strong>
							<div>{ this.getNiceNumber( pluginActiveInstalls ) }</div>
						</div>
						<div>
							<strong>{ __( 'Rating' ) }</strong>
							<div class={ className + `__rating` }>
								{ this.getStars( pluginRating ) }
							</div>
						</div>
						<div class={ className + `__version` }>
							<strong>{ __( 'Plugin Version' ) }</strong>
							<div>{ pluginVersion }</div>
						</div>
					</div>
				</div>
			</Fragment>
		];
	}
};


