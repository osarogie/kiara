import { AppRegistry } from 'react-native'
import App from './App'

/////// ICONS

// Use prebuilt version of RNVI in dist folder
// import FontAwesome from 'components/vector-icons/fonts/FontAwesome'
// import Feather from 'components/vector-icons/fonts/Feather'
// import Ionicons from 'components/vector-icons/fonts/Ionicons'
// import EvilIcons from 'components/vector-icons/fonts/EvilIcons'
// import Entypo from 'components/vector-icons/fonts/Entypo'
// import MaterialIcons from 'components/vector-icons/fonts/MaterialIcons'

import FontAwesomeIconFont from 'components/vector-icons/Fonts/FontAwesome.ttf'
import FeatherIconFont from 'components/vector-icons/Fonts/Feather.ttf'
import IoniconsIconFont from 'components/vector-icons/Fonts/Ionicons.ttf'
import EvilIconsIconFont from 'components/vector-icons/Fonts/EvilIcons.ttf'
import EntypoIconFont from 'components/vector-icons/Fonts/Entypo.ttf'
import MaterialIconsIconFont from 'components/vector-icons/Fonts/MaterialIcons.ttf'

import RubikRegular from '@shoutem/ui/fonts/Rubik-Regular.ttf'
import RubikBlack from '@shoutem/ui/fonts/Rubik-Black.ttf'
import RubikBlackItalic from '@shoutem/ui/fonts/Rubik-BlackItalic.ttf'
import RubikBold from '@shoutem/ui/fonts/Rubik-Bold.ttf'
import RubikBoldItalic from '@shoutem/ui/fonts/Rubik-BoldItalic.ttf'
import RubikItalic from '@shoutem/ui/fonts/Rubik-Italic.ttf'
import RubikLight from '@shoutem/ui/fonts/Rubik-Light.ttf'
import RubikLightItalic from '@shoutem/ui/fonts/Rubik-LightItalic.ttf'
import RubikMedium from '@shoutem/ui/fonts/Rubik-Medium.ttf'
import RubikMediumItalic from '@shoutem/ui/fonts/Rubik-MediumItalic.ttf'

// import RobotoRegular from './fonts/Roboto-Regular.ttf'
// import RobotoBlack from './src/fonts/Roboto-Black.ttf'
// import RobotoBlackItalic from './src/fonts/Roboto-BlackItalic.ttf'
// import RobotoBold from './src/fonts/Roboto-Bold.ttf'
// import RobotoBoldItalic from './src/fonts/Roboto-BoldItalic.ttf'
// import RobotoItalic from './src/fonts/Roboto-Italic.ttf'
// import RobotoLight from './src/fonts/Roboto-Light.ttf'
// import RobotoLightItalic from './src/fonts/Roboto-LightItalic.ttf'
// import RobotoMedium from './src/fonts/Roboto-Medium.ttf'
// import RobotoMediumItalic from './src/fonts/Roboto-MediumItalic.ttf'
// import RobotoThin from './src/fonts/Roboto-Thin.ttf'
// import RobotoThinItalic from './src/fonts/Roboto-ThinItalic.ttf'

// import PaprikaRegular from './fonts/Paprika-Regular.ttf'
import BlackHanSansRegular from './assets/fonts/BlackHanSans-Regular.ttf'

const iconFontStyles = `
@font-face {
  src: url(${FontAwesomeIconFont});
  font-family: FontAwesome;
}
@font-face {
  src: url(${FeatherIconFont});
  font-family: Feather;
}
@font-face {
  src: url(${IoniconsIconFont});
  font-family: Ionicons;
}
@font-face {
  src: url(${EvilIconsIconFont});
  font-family: EvilIcons;
}
@font-face {
  src: url(${EntypoIconFont});
  font-family: Entypo;
}
@font-face {
  src: url(${MaterialIconsIconFont});
  font-family: Material Icons;
}
@font-face {
  src: url(${RubikRegular});
  font-family: Rubik-Regular;
}
@font-face {
  src: url(${RubikBlack});
  font-family: Black-Regular;
}
@font-face {
  src: url(${RubikBlackItalic});
  font-family: Rubik-BlackItalic;
}
@font-face {
  src: url(${RubikBold});
  font-family: Bold-Regular;
}
@font-face {
  src: url(${RubikBoldItalic});
  font-family: Rubik-BoldItalic;
}
@font-face {
  src: url(${RubikItalic});
  font-family: Rubik-Italic;
}
@font-face {
  src: url(${RubikLight});
  font-family: Light-Regular;
}
@font-face {
  src: url(${RubikLightItalic});
  font-family: Rubik-LightItalic;
}
@font-face {
  src: url(${RubikMedium});
  font-family: Rubik-Medium;
}
@font-face {
  src: url(${RubikMediumItalic});
  font-family: Rubik-MediumItalic;
}
@font-face {
  src: url(${BlackHanSansRegular});
  font-family: BlackHanSans-Regular;
}
`

// @font-face {
//   src: url(${RobotoRegular});
//   font-family: Roboto;
// }
// @font-face {
//   src: url(${RobotoBlack});
//   font-family: Black-Regular;
// }
// @font-face {
//   src: url(${RobotoBlackItalic});
//   font-family: Roboto-BlackItalic;
// }
// @font-face {
//   src: url(${RobotoBold});
//   font-family: Bold-Regular;
// }
// @font-face {
//   src: url(${RobotoBoldItalic});
//   font-family: Roboto-BoldItalic;
// }
// @font-face {
//   src: url(${RobotoItalic});
//   font-family: Roboto-Italic;
// }
// @font-face {
//   src: url(${RobotoLight});
//   font-family: Light-Regular;
// }
// @font-face {
//   src: url(${RobotoLightItalic});
//   font-family: Roboto-LightItalic;
// }
// @font-face {
//   src: url(${RobotoMedium});
//   font-family: Roboto-Medium;
// }
// @font-face {
//   src: url(${RobotoMediumItalic});
//   font-family: Roboto-MediumItalic;
// }
// @font-face {
//   src: url(${RobotoThin});
//   font-family: Roboto-Thin;
// }
// @font-face {
//   src: url(${RobotoThinItalic});
//   font-family: Roboto-ThinItalic;
// }
// @font-face {
//   src: url(${PaprikaRegular});
//   font-family: Paprika-Regular;
// }
// Create stylesheet
const style = document.createElement('style')
style.type = 'text/css'
if (style.styleSheet) {
  style.styleSheet.cssText = iconFontStyles
} else {
  style.appendChild(document.createTextNode(iconFontStyles))
}

// Inject stylesheet
document.head.appendChild(style)

/////// END ICONS

AppRegistry.registerComponent('kovu', () => App)

AppRegistry.runApplication('kovu', {
  rootTag: document.getElementById('root')
})
