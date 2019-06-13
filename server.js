const serveEssentialFiles = require('./serveEssentialFiles')
const express = require('express')
const next = require('next')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const routes = require('./routes')
const domains = require('./domains')
const { join } = require('path')
const handle = app.getRequestHandler()
const customRoutesHandler = routes.getRequestHandler(app)

app.prepare().then(() => {
  const server = express()

  serveEssentialFiles(server)

  server.get('/service-worker.js', ServiceWorker(app))

  server.get('/', (req, res, next) => {
    if (domains.includes(req.hostname)) next()
    else app.render(req, res, '/blog', { domain: req.hostname })
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

const ServiceWorker = app => (req, res) => {
  const filePath = join(__dirname, '.next', 'service-worker.js')

  app.serveStatic(req, res, filePath)
}
