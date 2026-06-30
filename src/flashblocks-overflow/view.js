/**
 * FlashBlocks Overflow Scroll — front-end progressive enhancement.
 *
 * The centering and scrolling itself is pure CSS (`justify-content: safe center`
 * + `overflow-x: auto`), so the block already works without this script. This
 * only flags state for the edge-fade affordance:
 *   - `data-scrollable` — the row is wider than the container
 *   - `data-at-start` / `data-at-end` — current scroll position, so the fade
 *     only shows on the side that still has more to reveal.
 */
const SELECTOR = '.wp-block-flashblocks-overflow';

function refresh( el ) {
	const max = el.scrollWidth - el.clientWidth;
	const scrollable = max > 1;

	el.toggleAttribute( 'data-scrollable', scrollable );

	if ( ! scrollable ) {
		el.removeAttribute( 'data-at-start' );
		el.removeAttribute( 'data-at-end' );
		return;
	}

	el.toggleAttribute( 'data-at-start', el.scrollLeft <= 1 );
	el.toggleAttribute( 'data-at-end', el.scrollLeft >= max - 1 );
}

function setup( el ) {
	el.addEventListener( 'scroll', () => refresh( el ), { passive: true } );

	if ( window.ResizeObserver ) {
		new window.ResizeObserver( () => refresh( el ) ).observe( el );
	}

	refresh( el );
}

function init() {
	document.querySelectorAll( SELECTOR ).forEach( setup );
}

if ( document.readyState === 'loading' ) {
	document.addEventListener( 'DOMContentLoaded', init );
} else {
	init();
}

// Late layout (e.g. web fonts, images) can change the content width.
window.addEventListener( 'load', () =>
	document.querySelectorAll( SELECTOR ).forEach( refresh )
);
