<?php
// This file is generated. Do not modify it manually.
return array(
	'flashblocks-overflow-scroll' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'flashblocks/overflow-scroll',
		'version' => '0.1.0',
		'title' => 'Overflow Scroll',
		'category' => 'layout',
		'icon' => 'leftright',
		'description' => 'A container that scrolls its content horizontally when it overflows.',
		'keywords' => array(
			'scroll',
			'overflow',
			'horizontal'
		),
		'textdomain' => 'flashblocks',
		'attributes' => array(
			'minWidth' => array(
				'type' => 'string',
				'default' => ''
			)
		),
		'supports' => array(
			'html' => false,
			'align' => array(
				'wide',
				'full'
			),
			'className' => true,
			'color' => array(
				'background' => true,
				'gradients' => true,
				'text' => true
			),
			'spacing' => array(
				'padding' => true,
				'margin' => array(
					'top',
					'bottom'
				)
			)
		),
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	)
);
