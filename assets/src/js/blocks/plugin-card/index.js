/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import Edit from './components/edit';
import icons from '../../utils/icons';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;

/**
 * Block constants
 */
const name = 'plugin-card';

const title = __( 'Plugin Card' );

const icon = icons.pluginCard;

const keywords = [
	__( 'plugin' ),
	__( 'w.org' ),
	__( 'card' ),
];

const blockAttributes = {
	pluginSlug: {
		type: 'string',
		default: '',
	},
};

const settings = {

	title: title,

	description: __( 'Display a WordPress plugin card from w.org.' ),

	keywords: keywords,

	attributes: blockAttributes,

	edit: Edit,

	save() {
		return null;
	},
};

export { name, title, icon, settings };
