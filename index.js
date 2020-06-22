const VideoSlide = function () {
	const swipeRight = () => {
		console.log('swiping right');
		const current = document.querySelector('.video-wrapper.current');
		let next;
		const currentIsLast =
			current.parentElement.lastElementChild === current;
		if (currentIsLast) {
			next = current.parentElement.querySelector('.video-wrapper');
		} else {
			next = current.nextElementSibling;
		}
		current.className = current.className.replace('current', '');
		next.className = `${next.className} current`;
	};

	const swipeLeft = () => {
		console.log('swiping left');
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
