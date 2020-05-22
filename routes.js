const routes = (module.exports = require('next-routes')())

routes.add('/d/:id', 'posts/post')
