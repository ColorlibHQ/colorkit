<?php

class MachoBlocks_Plugin_Card {

	public function __construct() {
		add_action( 'init', array( $this, 'register_block' ) );
	}

	public function register_block() {

		if ( ! function_exists( 'register_block_type' ) ) {
			return;
		}

		register_block_type(
			'machoblocks/plugin-card',
			array(
				'editor_script'   => 'mt-gutenberg',
				'editor_style'    => 'mt-gutenberg-editor',
				'style'           => 'mt-gutenberg-style',
				'render_callback' => array( $this, 'render_block' ),
			)
		);
	}

	public function render_block( $atts ) {

		if( ! isset( $atts['pluginSlug'] ) ) {
			return;
		}

		$plugins = MachoBlocks_Rest::search_plugins( array( 'slug' => $atts['pluginSlug'] ) );
		$plugin = (array) $plugins->data['data'];

		ob_start();
		?>
			<div class="wp-block-machoblocks-plugin-card">
				<div class="wp-block-machoblocks-plugin-card__details">
					<div>
						<img class="wp-block-machoblocks-plugin-card__icon" src="<?php echo esc_url( self::get_plugin_icon( $plugin ) ); ?>" alt="<?php echo esc_attr( $plugin['name'] ); ?>" />
						<a class="wp-block-machoblocks-plugin-card__download" href="<?php echo esc_url( $plugin['download_link'] ); ?>">Download</a>
						<a class="wp-block-machoblocks-plugin-card__more" href="<?php echo esc_url( 'https://wordpress.org/plugins/' . $plugin['slug'] ); ?>" target="_blank">Read More</a>
					</div>
					<div>
						<h5 class="wp-block-machoblocks-plugin-card__name"><?php echo $plugin['name']; ?></h5>
						<div class="wp-block-machoblocks-plugin-card__description"><p><?php echo $plugin['short_description']; ?></p></div>
						<div class="wp-block-machoblocks-plugin-card__sub">
							<div class="wp-block-machoblocks-plugin-card__author">
								by <?php echo $plugin['author']; ?>
							</div>
						</div><!-- wp-block-machoblocks-plugin-card__sub -->
					</div>
				</div><!-- wp-block-machoblocks-plugin-card__details -->
				<div class="wp-block-machoblocks-plugin-card__stats">
					<div class="wp-block-machoblocks-plugin-card__installs">
						<strong><?php esc_html_e( 'Active Installations', 'machoblocks' ); ?></strong>
						<div><?php echo esc_html( self::get_nice_number( $plugin['active_installs'] ) ); ?></div>
					</div>
					<div>
						<strong><?php esc_html_e( 'Rating', 'machoblocks' ); ?></strong>
						<div class="wp-block-machoblocks-plugin-card__rating">
							<?php echo wp_kses_post( self::get_stars( $plugin['rating'] ) ); ?>
						</div>
					</div>
					<div class="wp-block-machoblocks-plugin-card__version">
						<strong><?php esc_html_e( 'Plugin Version', 'machoblocks' ); ?></strong>
						<div><?php echo esc_html( $plugin['version'] ); ?></div>
					</div>
				</div><!-- wp-block-machoblocks-plugin-card__stats -->

			</div><!-- wp-block-machoblocks-plugin-card -->
		<?php

		return ob_get_clean();
	}


	public function get_plugin_icon( $plugin ) {
		$icon = '';
		if ( $plugin['icons']['2x'] ) {
			$icon = $plugin['icons']['2x'];
		} elseif ( $plugin['icons']['1x'] ) {
			$icon = $plugin['icons']['1x'];
		} elseif ( $plugin['icons']['default'] ) {
			$icon = $plugin['icons']['default'];
		}
		return $icon;
	}

	public function get_nice_number( $n ) {
		// first strip any formatting;
		$n = ( 0 + str_replace( ',', '', $n ) );

		// is this a number?
		if ( ! is_numeric( $n ) ) {
			return false;
		}

		// now filter it;
		if ( $n > 1000000000 ) {
			return round( ( $n / 1000000000 ), 2 ) . '+' . ' billion';
		} elseif ( $n > 1000000 ) {
			return round( ( $n / 1000000 ), 2 ) . '+' . ' million';
		}

		return number_format( $n ) . '+';
	}

	public function get_stars( $rating ) {
		$rating = round( $rating / 10, 0 ) / 2;

		$full_stars = floor( $rating );
		$half_stars = ceil( $rating - $full_stars );
		$empty_stars = 5 - $full_stars - $half_stars;

		$output = '';
		$output .= str_repeat( '<div class="wp-block-machoblocks-plugin__star-full" aria-hidden="true"></div>', $full_stars );
		$output .= str_repeat( '<div class="wp-block-machoblocks-plugin__star-half" aria-hidden="true"></div>', $half_stars );
		$output .= str_repeat( '<div class="wp-block-machoblocks-plugin__star-empty" aria-hidden="true"></div>', $empty_stars );
		return $output;
	}

}

new MachoBlocks_Plugin_Card();






