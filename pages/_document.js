import Document, { Head, Main, NextScript } from 'next/document'
import AppRegistry from 'react-native-web/dist/cjs/exports/AppRegistry'
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
// import PaprikaRegular from './src/fonts/Paprika-Regular.ttf'

const iconFontStyles = `
@font-face {
  src: url(/${FontAwesomeIconFont});
  font-family: FontAwesome;
}
@font-face {
  src: url(/${FeatherIconFont});
  font-family: Feather;
}
@font-face {
  src: url(/${IoniconsIconFont});
  font-family: Ionicons;
}
@font-face {
  src: url(/${EvilIconsIconFont});
  font-family: EvilIcons;
}
@font-face {
  src: url(/${EntypoIconFont});
  font-family: Entypo;
}
@font-face {
  src: url(/${MaterialIconsIconFont});
  font-family: Material Icons;
}
@font-face {
  src: url(/${RubikRegular});
  font-family: Rubik-Regular;
}
@font-face {
  src: url(/${RubikBlack});
  font-family: Black-Regular;
}
@font-face {
  src: url(/${RubikBlackItalic});
  font-family: Rubik-BlackItalic;
}
@font-face {
  src: url(/${RubikBold});
  font-family: Bold-Regular;
}
@font-face {
  src: url(/${RubikBoldItalic});
  font-family: Rubik-BoldItalic;
}
@font-face {
  src: url(/${RubikItalic});
  font-family: Rubik-Italic;
}
@font-face {
  src: url(/${RubikLight});
  font-family: Light-Regular;
}
@font-face {
  src: url(/${RubikLightItalic});
  font-family: Rubik-LightItalic;
}
@font-face {
  src: url(/${RubikMedium});
  font-family: Rubik-Medium;
}
@font-face {
  src: url(/${RubikMediumItalic});
  font-family: Rubik-MediumItalic;
}
`

// // Create stylesheet
// const style = document.createElement('style')
// style.type = 'text/css'
// if (style.styleSheet) {
//   style.styleSheet.cssText = iconFontStyles
// } else {
//   style.appendChild(document.createTextNode(iconFontStyles))
// }

// Inject stylesheet
// document.head.appendChild(style)
export default class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    AppRegistry.registerComponent('Main', () => Main)
    const { stylesheet } = AppRegistry.getApplication('Main')
    const page = renderPage()
    const styles = [
      <style key={1} dangerouslySetInnerHTML={{ __html: stylesheet }} />,
      <style key={2} dangerouslySetInnerHTML={{ __html: iconFontStyles }} />
    ]
    return { ...page, styles }
  }

  render() {
    return (
      <html>
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="description"
            content="What\'s your story? Tell it on TheCommunity Discover some of the world\'s most powerful written voices."
          />
          <title>TheCommunity: Africa's most powerful written voices</title>
          <meta name="keywords" content="read, share, stories, write" />

          <link rel="shortcut icon" href="/static/favicon.ico" />
          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="/static/apple-icon-57x57.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="/static/apple-icon-60x60.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="/static/apple-icon-72x72.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/static/apple-icon-76x76.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="/static/apple-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/static/apple-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/static/apple-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/static/apple-icon-152x152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/apple-icon-180x180.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/static/android-icon-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/static/favicon-96x96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/favicon-16x16.png"
          />
          <link rel="manifest" href="/static/manifest.json" />
          <link rel="icon" href="/static/favicon.ico" type="image/x-icon" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-TileImage" content="ms-icon-144x144.png" />
          <meta name="theme-color" content="#ffffff" />
          {/* <link
            rel="stylesheet"
            media="all"
            href="/static/assets/application-02b0c2aa36bebdcfd21569b402bf44c9ebc02f8f697b8afc8c35c6f08f2a0cbc.css"
          /> */}
          <link
            rel="stylesheet"
            href="//cdn.quilljs.com/1.2.6/quill.snow.css"
            key="quill"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Lato"
            rel="stylesheet"
          />
          {/* <script src="/static/assets/application-bf97aad29aa64dd1cef9b12900b2b36f2a3467893b2c1c582ef36dad334b09b0.js" /> */}
        </Head>
        <body data-spy="scroll" data-target=".navbar">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
