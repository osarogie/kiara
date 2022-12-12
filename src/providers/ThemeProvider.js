import {
  Provider as PaperProvider,
  DefaultTheme,
  DarkTheme
} from 'react-native-paper'
import { useMemo } from 'react'

const lightTheme = {
  ...DefaultTheme,
  roundness: 5,
  colors: {
    ...DefaultTheme.colors,
    background: '#ffffff',
    primary: '#50f',
    secondary: '#05f',
    accent: '#50f',
    statusBar: '#fff',
    text: '#000',
    grayBackground: '#f9f9f9',
    darkGray: '#aaa',
    separator: '#ddd'
  },
  statusBar: {
    barStyle: 'dark-content'
  }
}

const darkTheme = {
  ...DarkTheme,
  roundness: 5,
  colors: {
    ...DarkTheme.colors,
    primary: '#fff',
    secondary: '#fff',
    accent: '#50f',
    statusBar: '#000',
    text: '#fff',
    grayBackground: '#333',
    darkGray: '#aaa',
    separator: '#444'
  },
  statusBar: {
    barStyle: 'light-content'
  }
}

const themes = {
  light: lightTheme,
  dark: darkTheme,
  black: null
}

export function ThemeProvider({ children, colorScheme = 'light' }) {
  const value = useMemo(
    () => ({ theme: themes[colorScheme] || lightTheme, colorScheme }),
    [colorScheme]
  )
  return (
    <>
      <PaperProvider theme={value.theme}>{children}</PaperProvider>
    </>
  )
}
