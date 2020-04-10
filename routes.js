const routes = (module.exports = require('next-routes')())

routes.add('/c/:id/stream', 'groups/stream')
routes.add('/c/:id/new-discussion', 'groups/new_group_discussion')
routes.add('/c/:id/new-poll', 'groups/new_group_poll')
routes.add('/c/:id/members', 'groups/members')
routes.add('/c/:id/edit', 'groups/edit')

routes.add('/d/:id/edit', 'posts/edit')
routes.add('/d/:id', 'posts/post')

routes.add('/settings', 'settings/profile')

routes.add('/new-polls', 'posts/new_poll')
routes.add('/new-poll', 'posts/new_poll')

routes.add('/new-discussion', 'posts/new-discussion')
routes.add('/new-culture', 'groups/new')
