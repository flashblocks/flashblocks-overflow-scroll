/**
 * The editor representation: a horizontal InnerBlocks container.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 */
import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	useInnerBlocksProps,
	InspectorControls,
} from '@wordpress/block-editor';
import { PanelBody, ToggleControl, TextControl } from '@wordpress/components';

import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const { edgeFade, scrollToSelector } = attributes;

	const blockProps = useBlockProps( {
		// Opt-out class: fade is on by default, so existing content is unaffected.
		className: edgeFade ? undefined : 'is-fade-off',
	} );
	const innerBlocksProps = useInnerBlocksProps( blockProps, {
		// Lay the inner blocks out and insert them horizontally, like a Row.
		orientation: 'horizontal',
	} );

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Overflow', 'flashblocks' ) }>
					<ToggleControl
						__nextHasNoMarginBottom
						label={ __( 'Edge fade', 'flashblocks' ) }
						help={ __(
							'Fade the left/right edges to hint there is more to scroll.',
							'flashblocks'
						) }
						checked={ edgeFade }
						onChange={ ( value ) =>
							setAttributes( { edgeFade: value } )
						}
					/>
					<TextControl
						__nextHasNoMarginBottom
						label={ __( 'Center on load (selector)', 'flashblocks' ) }
						help={ __(
							'CSS selector to scroll into the center when the page loads, e.g. .current-menu-item. Leave blank to disable.',
							'flashblocks'
						) }
						value={ scrollToSelector }
						onChange={ ( value ) =>
							setAttributes( { scrollToSelector: value } )
						}
					/>
				</PanelBody>
			</InspectorControls>
			<div { ...innerBlocksProps } />
		</>
	);
}
