import {
	ClassicEditor,
	AccessibilityHelp,
	Autosave,
	BlockQuote,
	Bold,
	Essentials,
	GeneralHtmlSupport,
	Italic,
	Paragraph,
	SelectAll,
	Undo,
} from "ckeditor5"

import translations from "ckeditor5/translations/pt-br.js"

import "ckeditor5/ckeditor5.css"

import "./style.css"

const editorConfig = {
	toolbar: {
		items: [
			"undo",
			"redo",
			"|",
			"selectAll",
			"|",
			"bold",
			"italic",
			"|",
			"blockQuote",
		],
		shouldNotGroupWhenFull: false,
	},
	plugins: [
		Autosave,
		BlockQuote,
		Bold,
		Essentials,
		GeneralHtmlSupport,
		Italic,
		Paragraph,
		SelectAll,
		Undo,
	],
	htmlSupport: {
		allow: [
			{
				name: /^.*$/,
				styles: true,
				attributes: true,
				classes: true,
			},
		],
	},
	language: "pt-br",
	placeholder: "Type or paste your content here!",
	translations: [translations],
}

ClassicEditor.create(document.querySelector("#editor"), editorConfig)
