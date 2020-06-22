import { task, series, parallel } from 'gulp'
import env from 'gulp-environment'
import del from 'del'

import * as devStreams from './config/dev-streams'
import * as prodStreams from './config/prod-streams'
import { source } from './config/paths'

const ifDev = env.if.development.bind(null)

task('html', ifDev(devStreams.html).else(prodStreams.html))
task('icons', ifDev(devStreams.icons).else(prodStreams.icons))
task('clean', del.bind(null, ['build/**', '.tmp/**']))
task('size', prodStreams.size)

task('files', series('html', 'icons'))

task('serve', series('clean', 'files', devStreams.serve))
task('build:serve', series('clean', 'files', 'size', prodStreams.serve))