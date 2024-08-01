import React, { useMemo } from 'react'
import { Container } from 'components/_partials/container'

import '@styles/main.css'

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
import { RelayEnvironmentProvider } from 'react-relay'
import { AppProps } from 'next/app'
import createEnvironment from 'relay-environment'

export default function App({ Component, pageProps }: AppProps) {
  const environment = useMemo(() => createEnvironment({}), [])

  return (
    <RelayEnvironmentProvider environment={environment}>
      <Container>
        <Component {...pageProps} />
      </Container>
    </RelayEnvironmentProvider>
  )
}
