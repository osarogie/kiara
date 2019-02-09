const serveEssentialFiles = require('./serveEssentialFiles')
const express = require('express')
const next = require('next')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const routes = require('./routes')
const handle = app.getRequestHandler()
const customRoutesHandler = routes.getRequestHandler(app)

app.prepare().then(() => {
  const server = express()

  server.use((req, res, next) => {
    next()
  })

  serveEssentialFiles(server)

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
