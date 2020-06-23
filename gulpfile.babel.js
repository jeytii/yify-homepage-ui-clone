import { task, series, parallel } from 'gulp'
import env from 'gulp-environment'
import del from 'del'
import * as dev from './config/development'
import * as prod from './config/production'

const ifDev = env.if.development.bind(null)

task('html', ifDev(dev.html).else(prod.html))
task('icons', ifDev(dev.icons).else(prod.icons))
task('clean', del.bind(null, ['build/**', '.tmp/**']))

task('files', series('html', 'icons'))

task('serve', series('clean', 'files', dev.serve))
task('build:serve', series('clean', 'files', prod.size, prod.serve))