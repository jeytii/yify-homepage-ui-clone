import { task, series, parallel } from 'gulp'
import env from 'gulp-environment'
import del from 'del'

import * as devStreams from './config/dev-streams'
import * as prodStreams from './config/prod-streams'
import { source } from './config/paths'

const ifDev = env.if.development.bind(null)

task('html', ifDev(devStreams.html).else(prodStreams.html))
task('fonts', ifDev(devStreams.fonts).else(prodStreams.fonts))
task('images', ifDev(devStreams.images).else(prodStreams.images))
task('vendors:css', ifDev(devStreams.vendors.bind(null, source.vendors.css)).else(prodStreams.vendors.bind(null, source.vendors.css)))
task('vendors:js', ifDev(devStreams.vendors.bind(null, source.vendors.js)).else(prodStreams.vendors.bind(null, source.vendors.js)))
task('clean', del.bind(null, ['build/**', '.tmp/**']))
task('size', prodStreams.size)

task('files', series(parallel('html', 'images', 'fonts'), parallel('vendors:css', 'vendors:js')))

task('serve', series('clean', 'files', devStreams.serve))
task('build:serve', series('clean', 'files', 'size', prodStreams.serve))