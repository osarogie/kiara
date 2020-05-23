import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper'
const PRIMARY = '#05f'
const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: PRIMARY,
    accent: PRIMARY
  }
}

export function ThemeProvider({ children }) {
  return <PaperProvider theme={theme}>{children}</PaperProvider>
}
