import {
  newStoryLink,
  newGroup,
  newPoll,
  userLink,
  logoutLink,
  settingsLink
} from './../helpers/links'
import { BrowserLink } from 'components/BrowserLink'
import Popover from 'antd/lib/popover'
import Avatar from 'components/Avatar'
import 'user_avatar_menu.scss'
import { useState } from 'react'
import { NUBLUE } from 'ui'
import { nookies } from 'lib/nookies'
import { Switch } from 'react-native-web'

export function UserAvatarMenu({ user }) {
  const [isDarkModeEnabled, setDarkModeEnabled] = useState(false)

  function setTheme(isDarkModeEnabled) {
    setDarkModeEnabled(isDarkModeEnabled)

    const theme = isDarkModeEnabled ? 'dark' : ''
    nookies.set(null, 'theme', theme)
    document.body.setAttribute('class', theme)
  }

  return (
    <Popover
      placement="bottomRight"
      content={
        <React.Fragment>
          <BrowserLink className="usermenu_link" href={userLink(user)}>
            View profile
          </BrowserLink>

          <BrowserLink className="usermenu_link" href={newStoryLink()}>
            Start a Discussion
          </BrowserLink>
          <BrowserLink className="usermenu_link" href={newGroup()}>
            Start a new culture
          </BrowserLink>
          <BrowserLink className="usermenu_link" href={newPoll()}>
            Create voting poll
          </BrowserLink>
          <BrowserLink
            className="usermenu_link"
            href={`/${user.username}/cultures`}
          >
            Cultures
          </BrowserLink>
          <BrowserLink
            className="usermenu_link"
            href={`/${user.username}/blogs`}
          >
            Blogs
          </BrowserLink>
          <Switch
            value={isDarkModeEnabled}
            onValueChange={setTheme}
            accessibilityLabel="Dark Mode"
            thumbTintColor={NUBLUE}
          />
          <BrowserLink className="usermenu_link" href={settingsLink()}>
            Settings
          </BrowserLink>

          <a className="usermenu_link" href={logoutLink()}>
            Logout
          </a>
        </React.Fragment>
      }
      trigger="click"
    >
      <Avatar rounded disableLink size={30} source={user} />
    </Popover>
  )
}
