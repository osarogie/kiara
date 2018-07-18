const routes = (module.exports = require('next-routes')())

routes.add('/c/:id/stream', 'groups/stream')
routes.add('/c/:id', 'groups/group')

routes.add('/login', 'login')
routes.add('/user/:id', 'users/user')
routes.add('/:id', 'users/user')

routes.add('/new-story', 'posts/new-discussion')
routes.add('/d/:id', 'posts/post')
routes.add('/:username/:id/:permalink', 'posts/post')
routes.add('/:username/:id/:permalink/comments', 'posts/comments')
