const source = {
	html: "src/*.html",
	sass: "src/styles/*.{scss,sass}",
	js: "src/scripts/*.js",
	img: "src/assets/icons/*.svg"
}

const dist = {
	dev: {
		html: ".tmp",
		sass: ".tmp/styles",
		js: ".tmp/scripts",
		img: ".tmp/assets/icons"
	},
	prod: {
		html: "build",
		sass: "build/styles",
		js: "build/scripts",
		img: "build/assets/icons"
	}
}

const watches = {
	html: ".tmp/*.html",
	sass: "src/styles/**/*.{scss,sass}",
	js: "src/scripts/**/*.js",
	img: "src/assets/icons/*.svg"
}

const builds = [
	"build/*.html",
	"build/styles/*.css",
	"build/scripts/*.js",
	"build/assets/icons/*.svg"
]

export { source, dist, watches, builds }