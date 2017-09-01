/* @flow weak */
import express from 'express'
import bodyParser from 'body-parser'
import compression from 'compression'
import cookieParser from 'cookie-parser'

import connectServices from './services'

// Main router
const router = express()

router.set('trust proxy', 'loopback')
router.set('x-powered-by', false)

router.use(compression())
router.use(cookieParser())
router.use(bodyParser.json())

connectServices(router)

console.log(`listening on port: ${process.env.NODE_PORT}`)

const server = router.listen(process.env.NODE_PORT)
export default server
