<?php
// This file is generated. Do not modify it manually.
return array(
	'flashblocks-overflow' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'flashblocks/overflow',
		'version' => '1.0.3',
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
		'attributes' => array(
			'edgeFade' => array(
				'type' => 'boolean',
				'default' => true
			)
		),
		'supports' => array(
			'__experimentalSettings' => true,
			'align' => array(
				'wide',
				'full'
			),
			'anchor' => true,
			'ariaLabel' => true,
			'html' => false,
			'background' => array(
				'backgroundImage' => true,
				'backgroundSize' => true,
				'__experimentalDefaultControls' => array(
					'backgroundImage' => true
				)
			),
			'color' => array(
				'gradients' => true,
				'heading' => true,
				'button' => true,
				'link' => true,
				'__experimentalDefaultControls' => array(
					'background' => true,
					'text' => true
				)
			),
			'shadow' => true,
			'spacing' => array(
				'margin' => array(
					'top',
					'bottom'
				),
				'padding' => true,
				'blockGap' => true,
				'__experimentalDefaultControls' => array(
					'padding' => true,
					'blockGap' => true
				)
			),
			'dimensions' => array(
				'minHeight' => true
			),
			'__experimentalBorder' => array(
				'color' => true,
				'radius' => true,
				'style' => true,
				'width' => true,
				'__experimentalDefaultControls' => array(
					'color' => true,
					'radius' => true,
					'style' => true,
					'width' => true
				)
			),
			'position' => array(
				'sticky' => true
			),
			'typography' => array(
				'fontSize' => true,
				'lineHeight' => true,
				'__experimentalFontFamily' => true,
				'__experimentalFontWeight' => true,
				'__experimentalFontStyle' => true,
				'__experimentalTextTransform' => true,
				'__experimentalTextDecoration' => true,
				'__experimentalLetterSpacing' => true,
				'__experimentalDefaultControls' => array(
					'fontSize' => true
				)
			),
			'layout' => array(
				'allowSizingOnChildren' => true
			),
			'interactivity' => array(
				'clientNavigation' => true
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
			'__experimentalSettings' => true,
			'align' => array(
				'wide',
				'full'
			),
			'anchor' => true,
			'ariaLabel' => true,
			'html' => false,
			'background' => array(
				'backgroundImage' => true,
				'backgroundSize' => true,
				'__experimentalDefaultControls' => array(
					'backgroundImage' => true
				)
			),
			'color' => array(
				'gradients' => true,
				'heading' => true,
				'button' => true,
				'link' => true,
				'__experimentalDefaultControls' => array(
					'background' => true,
					'text' => true
				)
			),
			'shadow' => true,
			'spacing' => array(
				'margin' => array(
					'top',
					'bottom'
				),
				'padding' => true,
				'blockGap' => true,
				'__experimentalDefaultControls' => array(
					'padding' => true,
					'blockGap' => true
				)
			),
			'dimensions' => array(
				'minHeight' => true
			),
			'__experimentalBorder' => array(
				'color' => true,
				'radius' => true,
				'style' => true,
				'width' => true,
				'__experimentalDefaultControls' => array(
					'color' => true,
					'radius' => true,
					'style' => true,
					'width' => true
				)
			),
			'position' => array(
				'sticky' => true
			),
			'typography' => array(
				'fontSize' => true,
				'lineHeight' => true,
				'__experimentalFontFamily' => true,
				'__experimentalFontWeight' => true,
				'__experimentalFontStyle' => true,
				'__experimentalTextTransform' => true,
				'__experimentalTextDecoration' => true,
				'__experimentalLetterSpacing' => true,
				'__experimentalDefaultControls' => array(
					'fontSize' => true
				)
			),
			'layout' => array(
				'allowSizingOnChildren' => true
			),
			'interactivity' => array(
				'clientNavigation' => true
			)
		),
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	)
);
