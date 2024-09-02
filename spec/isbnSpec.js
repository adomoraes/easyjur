// spec/isbnSpec.js
import isValidISBN10 from "../src/isbn.js"

describe("isValidISBN10", function () {
	it("deve retornar true para um ISBN-10 válido com apenas dígitos", function () {
		expect(isValidISBN10("0471958697")).toBe(true)
	})

	it("deve retornar true para um ISBN-10 válido terminando com 'X'", function () {
		expect(isValidISBN10("043942089X")).toBe(true)
	})

	it("deve retornar false para um ISBN-10 com comprimento inválido", function () {
		expect(isValidISBN10("123456789")).toBe(false)
	})

	it("deve retornar false para um ISBN-10 contendo caracteres não numéricos", function () {
		expect(isValidISBN10("12345a7890")).toBe(false)
	})

	it("deve retornar false para um ISBN-10 com checksum inválido", function () {
		expect(isValidISBN10("0471958699")).toBe(false)
	})
})
