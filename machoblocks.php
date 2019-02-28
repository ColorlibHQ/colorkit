<?php
/**
 * Plugin Name: MachoBlocks
 * Description: A collection of blocks.
 * Author: MachoThemes
 * Version: 1.0
 */

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

define( 'MB_VERSION', '1.0' );
//define( 'WPMTST_PLUGIN', plugin_basename( __FILE__ ) ); // strong-testimonials/strong-testimonials.php
//define( 'WPMTST', dirname( WPMTST_PLUGIN ) );           // strong-testimonials


final class MachoBlocks {

	private static $instance;

	/**
	 * A singleton instance.
	 *
	 */
	public static function instance() {
		if ( ! isset( self::$instance ) && ! ( self::$instance instanceof MachoBlocks ) ) {
			self::$instance = new MachoBlocks;
			self::$instance->setup_constants();
			self::$instance->includes();

			add_action( 'init', array( self::$instance, 'init' ) );
		}

		return self::$instance;
	}

	/**
	 * Setup plugin constants
	 *
	 * @access private
	 * @return void
	 */
	private function setup_constants() {
		defined( 'MB_DIR' ) || define( 'MB_DIR', plugin_dir_path( __FILE__ ) );
		defined( 'MB_URL' ) || define( 'MB_URL', plugin_dir_url( __FILE__ ) );

		defined( 'MB_INC' ) || define( 'MB_INC', MB_DIR . 'includes/' );

		defined( 'MB_ASSETS_CSS' ) || define( 'MB_ASSETS_CSS', MB_URL . 'assets/css/' );
		defined( 'MB_ASSETS_JS' ) || define( 'MB_ASSETS_JS', MB_URL . 'assets/js/' );
		defined( 'MB_ASSETS_SRC' ) || define( 'MB_ASSETS_SRC', MB_URL . 'assets/src/' );
	}

	/**
	 * Instantiate our classes.
	 */
	public function init() {

		//echo 'init';
	}

	/**
	 * Include required files
	 */
	private function includes() {
		require_once MB_INC . 'class-mb-gutenberg.php';
		require_once MB_INC . 'class-mb-rest.php';
		require_once MB_INC . '/blocks/class-mb-plugin-card.php';
	}


}

function WPMST() {
	return MachoBlocks::instance();
}

// Get plugin running
WPMST();
