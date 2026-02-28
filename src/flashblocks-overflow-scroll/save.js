import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { minWidth } = attributes;

	const blockProps = useBlockProps.save( {
		className: 'wp-block-flashblocks-overflow-scroll',
	} );

	const innerStyle = minWidth ? { minWidth } : {};

	return (
		<div { ...blockProps }>
			<button
				className="wp-block-flashblocks-overflow-scroll__arrow wp-block-flashblocks-overflow-scroll__arrow--left"
				aria-label="Scroll left"
				type="button"
			/>
			<div className="wp-block-flashblocks-overflow-scroll__content">
				<div className="wp-block-flashblocks-overflow-scroll__inner" style={ innerStyle }>
					<InnerBlocks.Content />
				</div>
			</div>
			<button
				className="wp-block-flashblocks-overflow-scroll__arrow wp-block-flashblocks-overflow-scroll__arrow--right"
				aria-label="Scroll right"
				type="button"
			/>
		</div>
	);
}
