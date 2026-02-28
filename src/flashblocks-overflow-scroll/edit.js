import { useBlockProps, useInnerBlocksProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const { minWidth } = attributes;

	const blockProps = useBlockProps( {
		className: 'wp-block-flashblocks-overflow-scroll',
	} );

	const innerStyle = minWidth ? { minWidth } : {};
	const innerBlocksProps = useInnerBlocksProps(
		{ className: 'wp-block-flashblocks-overflow-scroll__inner', style: innerStyle },
	);

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Scroll Settings', 'flashblocks' ) }>
					<TextControl
						label={ __( 'Content Min Width', 'flashblocks' ) }
						help={ __( 'e.g. 800px, 60rem. Forces content wider than the container to enable scrolling.', 'flashblocks' ) }
						value={ minWidth }
						onChange={ ( value ) => setAttributes( { minWidth: value } ) }
					/>
				</PanelBody>
			</InspectorControls>
			<div { ...blockProps }>
				<div className="wp-block-flashblocks-overflow-scroll__content">
					<div { ...innerBlocksProps } />
				</div>
			</div>
		</>
	);
}
