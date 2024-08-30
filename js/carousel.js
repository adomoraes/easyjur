$(document).ready(function () {
	const $carouselWrapper = $(".book-carousel__wrapper")
	const itemWidth = $(".book-carousel__item").outerWidth(true)

	$(".book-carousel__nav--next").on("click", function () {
		$carouselWrapper.animate(
			{
				scrollLeft: "+=" + itemWidth,
			},
			400
		)
	})

	$(".book-carousel__nav--prev").on("click", function () {
		$carouselWrapper.animate(
			{
				scrollLeft: "-=" + itemWidth,
			},
			400
		)
	})

	$(".book-carousel__link").on("click", function (event) {
		event.preventDefault()
		const bookDetailUrl = $(this).attr("href")
		window.location.href = bookDetailUrl
	})
})
