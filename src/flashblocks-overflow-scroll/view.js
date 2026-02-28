document.querySelectorAll(".wp-block-flashblocks-overflow-scroll").forEach(
	(block) => {
		const content = block.querySelector(
			".wp-block-flashblocks-overflow-scroll__content",
		);
		const leftArrow = block.querySelector(
			".wp-block-flashblocks-overflow-scroll__arrow--left",
		);
		const rightArrow = block.querySelector(
			".wp-block-flashblocks-overflow-scroll__arrow--right",
		);

		if (!content) return;

		function updateState() {
			const hasOverflow = content.scrollWidth > content.clientWidth + 1;
			const scrollLeft = Math.round(content.scrollLeft);
			const maxScroll = content.scrollWidth - content.clientWidth;

			block.classList.toggle("has-overflow", hasOverflow);
			block.classList.toggle("is-at-start", scrollLeft <= 0);
			block.classList.toggle("is-at-end", scrollLeft >= maxScroll - 1);
		}

		function scrollBy(direction) {
			const amount = content.clientWidth * 0.75;
			content.scrollBy({ left: direction * amount, behavior: "smooth" });
		}

		if (leftArrow) {
			leftArrow.addEventListener("click", () => scrollBy(-1));
		}
		if (rightArrow) {
			rightArrow.addEventListener("click", () => scrollBy(1));
		}

		content.addEventListener("scroll", updateState, { passive: true });
		window.addEventListener("resize", updateState);
		updateState();
	},
);
