/**
*
*
**/

<?php
class Ge_Settings
{
	public function __construct(){
		add_action( 'admin_menu', [ $this , 'add_options_page' ] );
		add_action( 'admin_init', [ $this , 'page_init' ] );
	}

	public function add_options_page() {
		add_options_page(
			'Gutenberg Embed',
			'GE Settings',
			'manage_options',
			'ge-settings-admin',
			[ $this, 'create_admin_page' ]
		);
	}
	public function page_init() {
		register_setting(
			'ge_options_group',
			'ge_options',
			[ $this , 'sanitize' ]
		);
		add_settings_field( 
			'google-api-key', 
			'Google API Key', 
			[ $this , 'google_api_key' ], 
			'ge-settings-admin',
			'setting_section_id' 
 		);
 		add_settings_section(
            'setting_section_id', // ID
            'API Keys', // Title
            array( $this, 'print_section_info' ), // Callback
            'ge-settings-admin' // Page
        );  

           

 	}
	public function create_admin_page() {
		$this->options = get_option( 'ge_options' ); ?>
		<div class="wrap">
            <h1>GE Settings</h1>
            <form method="post" action="options.php">
            <?php
                // This prints out all hidden setting fields
                settings_fields( 'ge_options_group' );
                do_settings_sections( 'ge-settings-admin' );
                submit_button();
            ?>
            </form>
        </div>
	<?php
	}

	public function sanitize( $input ) {
		$new_input = [];
		if ( isset( $input['google-api-key'] ) ) {
			$new_input['google-api-key'] = sanitize_text_field( $input['google-api-key'] );
		}
		return $new_input;
	}

	public function google_api_key()
    {
        printf(
            '<input type="text" id="google-api-key" name="ge_options[google-api-key]" value="%s" />',
            isset( $this->options['google-api-key'] ) ? esc_attr( $this->options['google-api-key']) : ''
        );
    }
    

	
}
if( is_admin() )
    $my_settings_page = new Ge_Settings();
