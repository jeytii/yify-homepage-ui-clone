import { src, dest } from 'gulp'
import gulpLoadPlugins from 'gulp-load-plugins'
import streamSeries from 'stream-series'
import bs from 'browser-sync'
import { source, dist, builds } from './paths'

const $ = gulpLoadPlugins()
const browserSync = bs.create()

const html = () => (
	src(source.html)
		.pipe(streamSeries(styles(), scripts()))
		.pipe($.htmlmin({
			collapseWhitespace: true,
      minifyCSS: true,
      minifyJS: {compress: {drop_console: true}},
      processConditionalComments: true,
      removeComments: true,
      removeEmptyAttributes: true,
      removeScriptTypeAttributes: true,
			removeStyleLinkTypeAttributes: true
		}))
		.pipe(dest(dist.prod.html))
)

const styles = () => (
	src(source.sass)
		.pipe($.plumber())
		.pipe($.sourcemaps.init())
		.pipe($.sass().on('error', $.sass.logError))
		.pipe($.purifycss(['./src/scripts/*.js', './src/*.html']))
		.pipe($.csso({ debug: true }))
		.pipe($.autoprefixer({
			browsers: [
				'last 3 versions',
				'> 1%'
			]
		}))
		.pipe($.sourcemaps.write('../styles'))
		.pipe(dest(dist.prod.sass))
)

const scripts = () => (
	src(source.js)
		.pipe($.plumber())
		.pipe($.sourcemaps.init())
		.pipe($.babel())
		.pipe($.uglify())
		.pipe($.sourcemaps.write('../scripts'))
		.pipe(dest(dist.prod.js))
)

const images = () => (
	src(source.img)
		.pipe($.imagemin())
		.pipe(dest(dist.prod.img))
)

const fonts = () => (
	src(source.fonts)
		.pipe($.fontmin())
		.pipe(dest(dist.prod.fonts))
)

const vendors = path => (
	src(path)
		.pipe($.concat(`vendors.min.${/\.css$/.test(path) ? 'css' : 'js'}`))
		.pipe(/\.css$/.test(path) ? $.csso() : $.uglify())
		.pipe(dest(dist.prod.vendors))
)

const serve = () => {
	browserSync.init({
		notify: false,
		server: {
			baseDir: ['./build']
		}
	})
}

const size = () => (
	src(builds)
		.pipe($.size({
			showFiles: true,
			showTotal: false
		}))
)

export { html, images, fonts, serve, vendors, size }