/**
 * WordPress dependencies
 */
const { registerBlockType } = wp.blocks;

// Category slug and title
const category = {
	slug: 'machoblocks',
};

import * as highlight from './blocks/highlight';
import * as clickToTweet from './blocks/click-to-tweet';
import * as pluginCard from './blocks/plugin-card';

export function registerBlocks () {
	[
		highlight,
		clickToTweet,
		pluginCard,
	].forEach( ( block ) => {

		if ( ! block ) {
			return;
		}

		const { name, icon, settings } = block;

		registerBlockType( `machoblocks/${ name }`, { category: category.slug, icon: { src: icon, foreground: '#6939f4' }, ...settings } );
	} );
};
registerBlocks();

