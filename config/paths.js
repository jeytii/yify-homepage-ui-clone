const source = {
	html: "src/*.html",
	sass: "src/styles/*.{scss,sass}",
	js: "src/scripts/*.js",
	img: "src/assets/images/**/*.{jpg,jpeg,png,gif,svg}",
	fonts: "src/assets/fonts/**/*.{ttf,otf,eot,woff,woff2}",
	vendors: {
		css: 'src/assets/vendors/css/*.css',
		js: 'src/assets/vendors/js/*.js'
	}
}

const dist = {
	dev: {
		html: ".tmp",
		sass: ".tmp/styles",
		js: ".tmp/scripts",
		img: ".tmp/assets/images",
		fonts: ".tmp/assets/fonts",
		vendors: ".tmp/assets/vendors"
	},
	prod: {
		html: "build",
		sass: "build/styles",
		js: "build/scripts",
		img: "build/assets/images",
		fonts: "build/assets/fonts",
		vendors: "build/assets/vendors"
	}
}

const watches = {
	html: ".tmp/*.html",
	sass: "src/styles/**/*.{scss,sass}",
	js: "src/scripts/**/*.js",
	img: "src/assets/images/**/**",
	fonts: "src/assets/fonts/**/**",
	vendors: "src/assets/vendors/**/**"
}

const builds = [
	"build/*.html",
	"build/styles/*.css",
	"build/scripts/*.js",
	"build/assets/images/**/**",
	"build/assets/vendors/*"
]

export { source, dist, watches, builds }