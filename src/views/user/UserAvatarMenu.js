import {
  newStoryLink,
  newGroup,
  newPoll,
  logoutLink,
  settingsLink
} from 'helpers/links'
import { BrowserLink } from 'components/BrowserLink'
import Popover from 'antd/lib/popover'
import Avatar from 'components/Avatar'
import { useState, useEffect, useCallback } from 'react'
import { setDarkModeEnabled, getDarkModeEnabled } from 'utils'
import { UserLink } from '../../links/UserLink'
import { Switch } from 'antd'

export function UserAvatarMenu({ user }) {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    setDarkMode(getDarkModeEnabled())
  }, [user])

  const setTheme = useCallback(
    (darkMode) => {
      setDarkMode(darkMode)
      setTimeout(() => {
        setDarkModeEnabled(darkMode)
      }, 500)
    },
    [setDarkMode]
  )

  return (
    <Popover
      placement="bottomRight"
      content={
        <>
          <UserLink className="usermenu_link" for={user}>
            View profile
          </UserLink>

          <BrowserLink className="usermenu_link" href={newStoryLink()}>
            Start a Discussion
          </BrowserLink>
          <BrowserLink className="usermenu_link" href={newGroup()}>
            Start a blog
          </BrowserLink>
          <BrowserLink className="usermenu_link" href={newPoll()}>
            Create voting poll
          </BrowserLink>
          <div
            onClick={() => setTheme(!darkMode)}
            className="flex-row flex w-full items-center mt-2 cursor-pointer mb-4"
          >
            <span className="s__content__main80">Dark Mode </span>
            <div className="flex-1" />
            <Switch checked={darkMode} onChange={setTheme} />
          </div>
          <BrowserLink className="usermenu_link" href={settingsLink()}>
            Settings
          </BrowserLink>

          <a className="usermenu_link" href={logoutLink()}>
            Logout
          </a>
        </>
      }
      trigger="click"
    >
      <div className="flex-row flex items-center cursor-pointer">
        <div className="display-name desktop table">
          <span>{user.name}</span>
        </div>
        <Avatar rounded disableLink size={30} source={user} />
      </div>
    </Popover>
  )
}
