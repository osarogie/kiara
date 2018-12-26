const robotsOptions = {
  root: __dirname + '/static/',
  headers: {
    'Content-Type': 'text/plain;charset=UTF-8'
  }
}
const sitemapOptions = {
  root: __dirname + '/static/',
  headers: {
    'Content-Type': 'text/xml;charset=UTF-8'
  }
}
const htmlOptions = {
  root: __dirname + '/static/',
  headers: {
    'Content-Type': 'text/html;charset=UTF-8'
  }
}

const faviconOptions = {
  root: __dirname + '/static/'
}

module.exports = function serveEssentialFiles(server) {
  server.get('/robots.txt', (req, res) =>
    res.status(200).sendFile('robots.txt', robotsOptions)
  )

  server.get('/sitemap.xml', (req, res) =>
    res.status(200).sendFile('sitemap.xml', sitemapOptions)
  )
  server.get('/favicon.ico', (req, res) =>
    res.status(200).sendFile('favicon.ico', faviconOptions)
  )
  server.get('/privacy', (req, res) =>
    res.status(200).sendFile('privacy.html', htmlOptions)
  )
}
