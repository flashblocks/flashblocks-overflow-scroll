document.querySelectorAll(".wp-block-flashblocks-overflow-scroll").forEach((block) => {
	const content = block.querySelector(".wp-block-flashblocks-overflow-scroll__content");
	if (!content) return;

	const left = block.querySelector(".wp-block-flashblocks-overflow-scroll__arrow--left");
	const right = block.querySelector(".wp-block-flashblocks-overflow-scroll__arrow--right");

	function update() {
		const overflow = content.scrollWidth > content.clientWidth + 1;
		const pos = Math.round(content.scrollLeft);
		const max = content.scrollWidth - content.clientWidth;

		block.classList.toggle("has-overflow", overflow);
		block.classList.toggle("is-at-start", pos <= 0);
		block.classList.toggle("is-at-end", pos >= max - 1);
	}

	function scroll(dir) {
		content.scrollBy({ left: dir * content.clientWidth * 0.75, behavior: "smooth" });
	}

	if (left) left.addEventListener("click", () => scroll(-1));
	if (right) right.addEventListener("click", () => scroll(1));
	content.addEventListener("scroll", update, { passive: true });
	window.addEventListener("resize", update);
	update();
});
