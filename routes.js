const routes = (module.exports = require('next-routes')({
  // Link: require('./src/components/BrowserLink')
}))

routes.add('/new-story', 'new-discussion')
routes.add('/c/:id/stream', 'groups/stream')
routes.add('/d/:id', 'post')
routes.add('/:username/:id/:permalink', 'post')
