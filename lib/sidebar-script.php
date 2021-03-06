<?php

/**
 * Registers the sidebar script
 *
 * @since 1.0.0
 */

function dropit_sidebar_script_register() {
	$api_keys = get_option('ge_options');
	wp_localize_script( 'dropit-sidebar', 'api_keys', array(
		'google' => $api_keys['google-api-key']
	) );

	wp_register_script(
		'dropit-sidebar',
		dropit_url( 'scripts/sidebar/build/index.js' ),
		array( 'wp-plugins', 'wp-element', 'wp-edit-post', 'wp-i18n', 'wp-api-request', 'wp-data', 'wp-components', 'wp-blocks', 'wp-editor', 'wp-compose', 'dropit-i18n' ),
		filemtime( dropit_dir_path() . 'scripts/sidebar/build/index.js' ),
		true
	);
	wp_register_style(
		'dropit-sidebar',
		dropit_url( 'scripts/sidebar/build/style.css' ),
		array(),
		filemtime( dropit_dir_path() . 'scripts/sidebar/build/style.css' )
	);
}
add_action( 'init', 'dropit_sidebar_script_register' );

function dropit_sidebar_script_enqueue() {
	wp_enqueue_script( 'dropit-sidebar' );
	wp_enqueue_style( 'dropit-sidebar' );
}
add_action( 'enqueue_block_editor_assets', 'dropit_sidebar_script_enqueue' );

add_action( 'admin_head', 'add_api_key', 10, 5 );
function add_api_key() { 
	$api_keys = get_option('ge_options');
		?>
	<script type="text/javascript">
	var google_api_key = '<?php echo $api_keys['google-api-key']; ?>';
	</script>	
<?php
}

