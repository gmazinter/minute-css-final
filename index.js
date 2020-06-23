const VideoSlide = function () {
	const clearPreviouslyAnimated = parent => {
		const animated =
			parent.querySelector('.video-wrapper.animated-right') ||
			parent.querySelector('.video-wrapper.animated-left');
		if (animated) {
			animated.className = animated.className.replace(
				'animated-right',
				''
			);
			animated.className = animated.className.replace(
				'animated-left',
				''
			);
		}
	};

	const swipe = direction => {
		const current = document.querySelector('.video-wrapper.current');
		const parent = current.parentElement;
		clearPreviouslyAnimated(parent);
		const currentIsLast = parent.lastElementChild === current;
		const currentIsFirst =
			parent.querySelector('.video-wrapper') === current;
		const next =
			direction === 'right'
				? currentIsLast
					? parent.querySelector('.video-wrapper')
					: current.nextElementSibling
				: currentIsFirst
				? parent.lastElementChild
				: current.previousElementSibling;
		current.className = current.className.replace(
			'current',
			`animated-${direction}`
		);
		next.className = `${next.className} current`;
	};

	return {
		swipe,
	};
};

const videoSlide = VideoSlide();

document.querySelectorAll('.next-control').forEach(element => {
	element.addEventListener('click', () => videoSlide.swipe('right'));
});
document.querySelectorAll('.prev-control').forEach(element => {
	element.addEventListener('click', () => videoSlide.swipe('left'));
});
