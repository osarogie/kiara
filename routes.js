const routes = (module.exports = require('next-routes')())

routes.add('/discover-blogs', 'groups/discover-blogs')
routes.add('/c/:id', 'groups/group')
routes.add('/c/:id/stream', 'groups/stream')
routes.add('/c/:id/write', 'groups/write')
routes.add('/c/:id/members', 'groups/members')

routes.add('/login', 'login')

routes.add('/new-story', 'posts/new-discussion')
routes.add('/d/:id', 'posts/post')

routes.add('/search', 'search/discussions')
routes.add('/search/discussions', 'search/discussions')
routes.add('/search/categories', 'search/categories')
routes.add('/search/people', 'search/people')
routes.add('/search/cultures', 'search/cultures')

routes.add('/settings', 'settings/profile')
routes.add('/settings/profile', 'settings/prpfile')
routes.add('/settings/account', 'settings/account')

routes.add('/new-polls', 'discussions/new_poll')
routes.add('/new-poll', 'discussions/new_poll')

routes.add('/new-discussion', 'posts/new-discussion')
routes.add('/new-culture', 'groups/new')

routes.add('/discover-cultures', 'groups/index')

routes.add('/a/confirm/:token', 'email_confirm/confirm_email')
routes.add('/a/reset/:token', 'password_reset/reset_password')

routes.add('/a/recover', 'password_reset/reset_form')
routes.add('/a/confirmation', 'email_confirm/confirmation_form')

routes.add('/user/:id', 'users/user')
routes.add('/:id', 'users/user')

routes.add('/:username/:id/:permalink', 'posts/post')
routes.add('/:username/:id/:permalink/comments', 'posts/comments')

routes.add('/:id/discussions', 'users/discussions')
routes.add('/:id/cultures', 'users/groups')
routes.add('/:id/followers', 'users/followers')
routes.add('/:id/following', 'users/following')
routes.add('/:id/comments', 'users/comments')
routes.add('/:id/likes', 'users/likes')

routes.add('/b/:id', 'blogs/show')
routes.add('/story/:id', 'blogs/story')
