import { join } from 'path'
import * as express from 'express'
import * as bodyParser from 'body-parser'
// import * as cookieParser from 'cookie-parser'
// import * as cookieSession from 'cookie-session'
// import * as cors from 'cors'
// import * as expressSession from 'express-session'
// import * as multer from 'multer'

import { Http } from '../app'

const App: express.Express = express()

App.use('/node_modules', express.static(join(__dirname, 'node_modules')))
App.use('/node_modules', express.static(join(__dirname, '..', 'node_modules')))
App.use(bodyParser.json())
App.use(bodyParser.urlencoded({ extended: true, limit: '1024kb' }))

App.use('/api', Http.Api.router)

export {
	App
}
