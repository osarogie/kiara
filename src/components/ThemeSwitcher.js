import Popover from 'antd/lib/popover'
import Avatar from 'components/Avatar'
import 'user_avatar_menu.scss'
import { useState, useEffect } from 'react'
import { Switch, View, Text } from 'react-native-web'
import FeatherIcon from 'react-native-vector-icons/Feather'
import { NUBLUE } from './../../src/ui'
import { setDarkModeEnabled, getDarkModeEnabled } from 'utils'

export function ThemeSwitcher({ style }) {
  const [darkMode, setDarkMode] = useState(getDarkModeEnabled())

  // useEffect(() => {
  //   setDarkMode(getDarkModeEnabled())
  // })

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
      <div
        style={{
          padding: '10px',
          cursor: 'pointer',
          ...style
        }}
      >
        <FeatherIcon size={24} className="appbar-a" name="chevron-down" />
      </div>
    </Popover>
  )
}
