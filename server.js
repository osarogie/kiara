const serveEssentialFiles = require('./serveEssentialFiles')
const cookieSession = require('cookie-session')
const express = require('express')
const next = require('next')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const routes = require('./routes')
const handle = app.getRequestHandler()
const customRoutesHandler = routes.getRequestHandler(app)

app.prepare().then(() => {
  const server = express()

  server.use(
    cookieSession({
      name: '_tc_session',
      secret: '2e732e21ccda4918aeb5918e6c4de838',
      maxAge: 365 * 24 * 60 * 60 * 1000
    })
  )

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
