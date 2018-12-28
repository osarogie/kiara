import Popover from 'antd/lib/popover'
import Avatar from 'components/Avatar'
import 'user_avatar_menu.scss'
import { useState, useEffect } from 'react'
import { Switch, View, Text } from 'react-native-web'
import Icon from 'antd/lib/icon'
import { NUBLUE } from './../../src/ui'
import { setDarkModeEnabled, getDarkModeEnabled } from 'utils'

export function ThemeSwitcher({ style }) {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    setDarkMode(getDarkModeEnabled())
  })

  function setTheme(darkMode) {
    setDarkModeEnabled(darkMode)
    setDarkMode(darkMode)
  }

  return (
    <Popover
      placement="bottomRight"
      content={
        <>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 10,
              width: 200,
              marginBottom: 15
            }}
          >
            <Text className="s__content__main80">Dark Mode </Text>
            <View style={{ flex: 1 }} />
            <Switch
              value={darkMode}
              onValueChange={setTheme}
              accessibilityLabel="Dark Mode"
              thumbTintColor={NUBLUE}
              activeThumbColor={NUBLUE}
              onTintColor="#fff4"
            />
          </View>
        </>
      }
      trigger="click"
    >
      <Icon
        style={{
          margin: '8px 0px 0 13px',
          cursor: 'pointer',
          ...style
        }}
        type="caret-down"
      />
    </Popover>
  )
}
