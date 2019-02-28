<?php

class MachoBlocks_Rest extends \WP_Rest_Controller {

	function __construct() {
		add_action( 'rest_api_init', array( $this, 'rest_api_init' ) );
	}

	public function rest_api_init() {

		register_rest_route(
			'machoblocks/v1',
			'/get_plugins',
			array(
				array(
					'methods'  => \WP_REST_Server::READABLE,
					'callback' => array( $this, 'search_plugins' ),
					'args'     => array(
						'search' => array(
							'type'        => 'string',
							//'required'    => true,
							//'description' => __( 'This string is required', 'machoblocks' ),
						),
						'slug' => array(
							'type'        => 'string',
							//'required'    => true,
							//'description' => __( 'This string is required', 'machoblocks' ),
						),
					),
				),
			)
		);

	}


	public function search_plugins( $request ) {

		$query = array();

		require_once ABSPATH . 'wp-admin' . '/includes/plugin-install.php';

		if ( $request['slug'] ) {
			$query['slug']     = $request['slug'];
			$query['per_page'] = 1;
		}

		if ( $request['search'] ) {
			$query['search']   = $request->get_param( 'search' );
			$query['per_page'] = 6;
		}

		$query['fields'] = array(
			'active_installs'   => true,
			'added'             => false,
			'donate_link'       => false,
			'downloadlink'      => true,
			'homepage'          => true,
			'icons'             => true,
			'last_updated'      => false,
			'requires'          => true,
			'requires_php'      => false,
			'screenshots'       => false,
			'short_description' => true,
			'slug'              => false,
			'sections'          => false,
			'requires'          => false,
			'rating'            => true,
			'ratings'           => false,
		);

		if ( $query['slug'] ) {
			$results = plugins_api( 'plugin_information', $query );
		}

		if ( $query['search'] ) {
			$results = plugins_api( 'query_plugins', $query );
		}

		if ( is_wp_error( $results ) ) {
			$return = array(
				'success' => false,
				'data'    => esc_html__( 'Error', 'machoblocks' ),
			);
			return $return;
		}

		$return = array(
			'success' => true,
			'data'    => $results,
		);

		return rest_ensure_response( $return );
	}


}

new MachoBlocks_Rest();




