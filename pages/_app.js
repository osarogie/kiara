import React from 'react'
import { Container } from 'components/_partials/container'
// import '../src/assets/styles/antd-custom.less'
import * as Sentry from '@sentry/node'

import '@styles/main.css'

// import 'antd/dist/antd.css'
import 'global.scss'
import 'app.scss'
import 'overrides.scss'
import 'search.scss'
import 'colours.scss'
import 'user_avatar_menu.scss'
import 'groups.scss'
import 'homepage.scss'
import 'discussions.scss'
import 'sidebar.scss'
import 'altmenu.scss'
import 'discussions.scss'
import 'login.scss'
import 'pollview.scss'
import 'postview.scss'
import 'search_form.scss'
import 'user_avatar_menu.scss'
import 'socialsignin.scss'
import 'image_upload_progress.scss'

Sentry.init({
  enabled: process.env.NODE_ENV === 'production',
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN
})

export default function App({ Component, pageProps, err }) {
  return (
    <Container>
      <Component {...pageProps} err={err} />
    </Container>
  )
}
