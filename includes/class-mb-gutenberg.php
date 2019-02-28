<?php

class MachoBlocks_Gutenberg {

	/**
	 * Function constructor
	 */
	function __construct() {

		// Return early if this function does not exist.
		if ( ! function_exists( 'register_block_type' ) ) {
			return;
		}

		add_filter( 'block_categories', array( $this, 'block_categories' ), 10, 2 );
		add_action( 'init', array( $this, 'register_blocks' ) );
	}

	public function block_categories( $categories, $post ) {
		return array_merge(
			$categories,
			array(
				array(
					'slug'  => 'machoblocks',
					'title' => __( 'MachoBlocks', 'macho-blocks' ),
				),
			)
		);
	}

	public function register_blocks() {

		wp_register_script( 'mb-gutenberg', MB_ASSETS_JS . 'gutenberg.js', array( 'wp-blocks', 'wp-element', 'wp-editor' ) );
		wp_register_style( 'mb-gutenberg-editor', MB_ASSETS_CSS . 'blocks_editor.css', array() );
		wp_register_style( 'mb-gutenberg-style', MB_ASSETS_CSS . 'blocks_style.css', array() );

		register_block_type(
			'machoblocks/highlight',
			array(
				'editor_script' => 'mb-gutenberg',
				'editor_style'  => 'mb-gutenberg-editor',
				'style'         => 'mb-gutenberg-style',
			)
		);

		register_block_type(
			'machoblocks/click-to-tweet',
			array(
				'editor_script' => 'mt-gutenberg',
				'editor_style'  => 'mt-gutenberg-editor',
				'style'  => 'mt-gutenberg-style',
			)
		);

	}


}

new MachoBlocks_Gutenberg();




