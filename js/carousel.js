const fetchBooks = async () => {
	try {
		const res = await fetch("https://potterapi-fedeperin.vercel.app/en/books")
		const books = await res.json()
		return books
	} catch (error) {
		console.error("Erro ao buscar os livros:", error)
		return []
	}
}

const initializeCarousel = (books) => {
	const $carouselWrapper = $(".book-carousel__wrapper")
	$carouselWrapper.empty() // Limpa o conteúdo existente

	books.forEach((book) => {
		const carouselItem = `
            <div class="book-carousel__item shadow-sm p-3 m-2 bg-white rounded">
                <a href="#" class="book-carousel__link" data-title="${book.title}" data-description="${book.description}" data-cover="${book.cover}">
                    <img src="${book.cover}" alt="${book.title}" class="book-carousel__image">
                    <div class="book-carousel__title">${book.title}</div>
                </a>
            </div>
        `
		$carouselWrapper.append(carouselItem)
	})

	attachClickEvent()
}

const attachClickEvent = () => {
	$(".book-carousel__link").on("click", function (event) {
		event.preventDefault()
		const title = $(this).data("title")
		const description = $(this).data("description")
		const cover = $(this).data("cover")

		// Atualiza o conteúdo do modal
		$("#bookDetailModalLabel").text(title)
		$("#bookDetailModal .modal-body").html(`
			<div class="row">
				<div class="col-12 col-sm-4 mb-3">
					<img src="${cover}" alt="${title}" class="img-thumbnail mx-auto d-block">
				</div>
				<div class="col-12 col-sm-8">
					<p>${description}</p>
				</div>
        	</div>
        `)

		// Abre o modal
		$("#bookDetailModal").modal("show")
	})
}

$(document).ready(async function () {
	const books = await fetchBooks()
	initializeCarousel(books)

	const $carouselWrapper = $(".book-carousel__wrapper")
	const itemWidth = $(".book-carousel__item").outerWidth(true)

	let isDragging = false
	let startPos = 0
	let scrollLeft = 0

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

	// Evento de clique e arraste
	$carouselWrapper.on("mousedown touchstart", function (e) {
		isDragging = true
		startPos = e.pageX || e.originalEvent.touches[0].pageX
		scrollLeft = $carouselWrapper.scrollLeft()
		$carouselWrapper.addClass("is-dragging")
	})

	$carouselWrapper.on("mousemove touchmove", function (e) {
		if (!isDragging) return
		const x = e.pageX || e.originalEvent.touches[0].pageX
		const move = x - startPos
		$carouselWrapper.scrollLeft(scrollLeft - move)
	})

	$carouselWrapper.on("mouseleave mouseup touchend", function () {
		isDragging = false
		$carouselWrapper.removeClass("is-dragging")
	})
})
