/**
 * The editor representation: a horizontal InnerBlocks container.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 */
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';

import './editor.scss';

export default function Edit() {
	const blockProps = useBlockProps();
	const innerBlocksProps = useInnerBlocksProps( blockProps, {
		// Lay the inner blocks out and insert them horizontally, like a Row.
		orientation: 'horizontal',
	} );

	return <div { ...innerBlocksProps } />;
}
