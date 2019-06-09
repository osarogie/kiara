const serveEssentialFiles = require('./serveEssentialFiles')
const express = require('express')
const next = require('next')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const routes = require('./routes')
const handle = app.getRequestHandler()
const customRoutesHandler = routes.getRequestHandler(app)

const domains = [
  'thecommunity.ng',
  'www.thecommunity.ng',
  'staging.thecommunity.ng',
  'localhost'
]

app.prepare().then(() => {
  const server = express()

  serveEssentialFiles(server)

  server.get('/', (req, res, next) => {
    if (domains.includes(req.hostname)) next()
    else app.render(req, res, '/blog/index', { domain: req.hostname })
  })

  server.use(customRoutesHandler)

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  const port = process.env.CLIENT_PORT || process.env.PORT || 3000

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on port ${port}...`)
  })
})
