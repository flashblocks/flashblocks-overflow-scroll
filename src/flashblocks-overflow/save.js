/**
 * The saved markup: the InnerBlocks content wrapped in the scroll container.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 */
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { edgeFade, scrollToSelector } = attributes;

	const blockProps = useBlockProps.save( {
		className: edgeFade ? undefined : 'is-fade-off',
		// view.js reads this and centers the first match on load.
		...( scrollToSelector ? { 'data-scroll-to': scrollToSelector } : {} ),
	} );
	const innerBlocksProps = useInnerBlocksProps.save( blockProps );

	return <div { ...innerBlocksProps } />;
}
