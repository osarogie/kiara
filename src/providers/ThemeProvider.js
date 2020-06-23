import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper'
import Feather from 'react-native-vector-icons/Fonts/Feather.ttf'
import Ionicons from 'react-native-vector-icons/Fonts/Ionicons.ttf'
import FontAwesome from 'react-native-vector-icons/Fonts/FontAwesome.ttf'
import EvilIcons from 'react-native-vector-icons/Fonts/EvilIcons.ttf'
import Entypo from 'react-native-vector-icons/Fonts/Entypo.ttf'
import MaterialIcons from 'react-native-vector-icons/Fonts/MaterialIcons.ttf'

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
  return (
    <>
      <style jsx global>{`
        @font-face {
          src: url('${Feather}');
          font-family: Feather;
        }
        @font-face {
          src: url('${Ionicons}');
          font-family: Ionicons;
        }
        @font-face {
          src: url('${FontAwesome}');
          font-family: FontAwesome;
        }
        @font-face {
          src: url('${EvilIcons}');
          font-family: EvilIcons;
        }
        @font-face {
          src: url('${Entypo}');
          font-family: Entypo;
        }
        @font-face {
          src: url('${MaterialIcons}');
          font-family: Material Icons;
        }
      `}</style>
      <PaperProvider theme={theme}>{children}</PaperProvider>
    </>
  )
}
