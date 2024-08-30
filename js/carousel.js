$(document).ready(function () {
	const $carouselWrapper = $(".book-carousel__wrapper")
	const itemWidth = $(".book-carousel__item").outerWidth(true)

	// Navegação por setas
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

	// Evento de clique nos links para abrir o modal
	$(".book-carousel__link").on("click", function (event) {
		event.preventDefault()
		const title = $(this).data("title")
		const image = $(this).data("image")

		// Atualiza o conteúdo do modal
		$("#bookDetailModalLabel").text(title)
		$("#bookDetailModal .modal-body img").attr("src", image).attr("alt", title)

		// Abre o modal
		$("#bookDetailModal").modal("show")
	})
})
