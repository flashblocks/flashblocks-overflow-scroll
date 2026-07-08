/**
 * FlashBlocks Overflow — front-end progressive enhancement.
 *
 * The centering and scrolling itself is pure CSS (auto margins + `overflow-x`),
 * so the block already works without this script. This adds:
 *   - `data-scrollable` / `data-at-start` / `data-at-end` — state for the
 *     edge-fade affordance.
 *   - Center-on-load: if `data-scroll-to` is set (a CSS selector), scroll the
 *     first matching descendant into the center on load — e.g. the current
 *     nav item (`.current-menu-item`), so you land on the page you're on.
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

// Center the first descendant matching `data-scroll-to` within the scrollport.
// Sets scrollLeft directly (no page scroll, no animation on load).
function centerOnTarget( el ) {
	const selector = el.getAttribute( 'data-scroll-to' );
	if ( ! selector ) {
		return;
	}

	let target;
	try {
		target = el.querySelector( selector );
	} catch ( e ) {
		return; // invalid selector — ignore
	}
	if ( ! target ) {
		return;
	}

	const max = el.scrollWidth - el.clientWidth;
	if ( max <= 1 ) {
		return; // nothing to scroll
	}

	const elRect = el.getBoundingClientRect();
	const tRect = target.getBoundingClientRect();
	const delta =
		tRect.left - elRect.left - ( el.clientWidth - tRect.width ) / 2;

	el.scrollLeft = Math.max( 0, Math.min( max, el.scrollLeft + delta ) );
}

function setup( el ) {
	el.addEventListener( 'scroll', () => refresh( el ), { passive: true } );

	if ( window.ResizeObserver ) {
		new window.ResizeObserver( () => refresh( el ) ).observe( el );
	}

	centerOnTarget( el );
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

// Late layout (web fonts, images) can shift widths and item positions —
// re-center and re-measure once everything has settled.
window.addEventListener( 'load', () =>
	document.querySelectorAll( SELECTOR ).forEach( ( el ) => {
		centerOnTarget( el );
		refresh( el );
	} )
);
