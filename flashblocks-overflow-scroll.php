<?php
/**
 * Plugin Name:       Flashblocks Overflow Scroll
 * Description:       A container block that scrolls its content horizontally when it overflows.
 * Version:           0.1.0
 * Requires at least: 6.8
 * Requires PHP:      7.4
 * Author:            Fleenor Security
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       flashblocks
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function flashblocks_overflow_scroll_block_init() {
	wp_register_block_types_from_metadata_collection( __DIR__ . '/build', __DIR__ . '/build/blocks-manifest.php' );
}
add_action( 'init', 'flashblocks_overflow_scroll_block_init' );
