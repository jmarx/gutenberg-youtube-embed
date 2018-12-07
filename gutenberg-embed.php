<?php
/**
 * Plugin Name: Gutenberg embed
 * Plugin URI: https://github.com/jmarx/gutenberg-youtube-embed
 * Description: Embed youtube videos into Gutenberg without leaving the Gutenberg editor.
 * Version: 0.0.1
 * Text Domain: dropit
 * Domain Path: /languages
 * Author: Jeffrey Marx
 *
 * @package gutenberg-embed
 */

 // Some common utilities
require_once dirname( __FILE__ ) . '/lib/common.php';

require_once dirname( __FILE__ ) . '/lib/options.php';

// Registering Script Files
require_once dirname( __FILE__ ) . '/lib/i18n-script.php';
require_once dirname( __FILE__ ) . '/lib/sidebar-script.php';
