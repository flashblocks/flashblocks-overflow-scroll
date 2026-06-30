<?php
// This file is generated. Do not modify it manually.
return array(
	'flashblocks-overflow' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'flashblocks/overflow',
		'version' => '1.0.1',
		'title' => 'Overflow',
		'category' => 'layout',
		'icon' => 'leftright',
		'description' => 'A container whose contents lay out in a row and scroll horizontally when they don\'t fit — centered when they fit, swipeable when they overflow.',
		'keywords' => array(
			'scroll',
			'scroller',
			'row',
			'overflow',
			'swipe',
			'horizontal',
			'carousel',
			'nav'
		),
		'supports' => array(
			'anchor' => true,
			'align' => array(
				'wide',
				'full'
			),
			'html' => false,
			'color' => array(
				'background' => true,
				'gradients' => true,
				'text' => true,
				'link' => true
			),
			'spacing' => array(
				'padding' => true,
				'margin' => true,
				'blockGap' => true
			),
			'typography' => array(
				'fontSize' => true,
				'lineHeight' => true
			),
			'__experimentalBorder' => array(
				'color' => true,
				'radius' => true,
				'style' => true,
				'width' => true
			)
		),
		'textdomain' => 'flashblocks',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	),
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
