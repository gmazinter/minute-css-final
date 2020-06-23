const VideoSlide = function () {
	const swipeRight = () => {
		console.log('swiping right');
		const current = document.querySelector('.video-wrapper.current');
		const parent = current.parentElement;
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
		const currentIsLast = parent.lastElementChild === current;
		let next;
		next = currentIsLast
			? parent.querySelector('.video-wrapper')
			: current.nextElementSibling;
		current.className = current.className.replace(
			'current',
			'animated-right'
		);
		next.className = `${next.className} current`;
	};

	const swipeLeft = () => {
		console.log('swiping left');
		const current = document.querySelector('.video-wrapper.current');
		const parent = current.parentElement;
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
		let prev;
		const currentIsFirst =
			parent.querySelector('.video-wrapper') === current;
		prev = currentIsFirst
			? parent.lastElementChild
			: current.previousElementSibling;
		current.className = current.className.replace(
			'current',
			'animated-left'
		);
		prev.className = `${prev.className} current`;
	};

	return {
		swipeRight,
		swipeLeft,
	};
};

const videoSlide = VideoSlide();

document.querySelectorAll('.next-control').forEach(element => {
	element.addEventListener('click', videoSlide.swipeRight);
});
document.querySelectorAll('.prev-control').forEach(element => {
	element.addEventListener('click', videoSlide.swipeLeft);
});
