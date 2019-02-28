/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { BlockControls } = wp.editor;
const { Component} = wp.element;
const { IconButton, Toolbar } = wp.components;

export default class Controls extends Component {

	constructor( props ) {
		super( ...arguments );
	}

	onChangePluginClick() {
		this.props.setAttributes( {
			pluginSlug: '',
		} );
	}

	render() {

		return (
			<BlockControls>
				<Toolbar>
					<IconButton
						label={ __( 'Change Plugin' ) }
						icon="edit"
						onClick={ () => this.onChangePluginClick() }
					/>
				</Toolbar>
			</BlockControls>
		);
	}
}
