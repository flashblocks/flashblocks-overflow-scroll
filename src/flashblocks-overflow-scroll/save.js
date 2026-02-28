import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { minWidth } = attributes;

	const blockProps = useBlockProps.save( {
		className: 'wp-block-flashblocks-overflow-scroll',
		style: minWidth ? { '--fos-min-width': minWidth } : {},
	} );

	return (
		<div { ...blockProps }>
			<div className="wp-block-flashblocks-overflow-scroll__content">
				<InnerBlocks.Content />
			</div>
			<div className="wp-block-flashblocks-overflow-scroll__arrows">
				<button
					className="wp-block-flashblocks-overflow-scroll__arrow wp-block-flashblocks-overflow-scroll__arrow--left"
					aria-label="Scroll left"
					type="button"
				/>
				<button
					className="wp-block-flashblocks-overflow-scroll__arrow wp-block-flashblocks-overflow-scroll__arrow--right"
					aria-label="Scroll right"
					type="button"
				/>
			</div>
		</div>
	);
}
