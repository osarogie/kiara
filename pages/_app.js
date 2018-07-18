import React from 'react'
import App, { Container as AppContainer } from 'next/app'
import { YELLOW } from 'ui'
import { Container } from 'components/_partials/container'
// import { AppBar } from 'components/AppBar';
export default class MyApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props

    return (
      <AppContainer>
        <Container>
          <Component {...pageProps} />

          <style global jsx>
            {`
              body > div:first-child,
              #__next {
                height: 100%;
              }

              // #__next {
              //   position: absolute;
              //   height: 100%;
              //   width: 100%;
              //   overflow-y: scroll;
              //   overscroll-behavior-y: none;
              // }

              // #__next > div {
              //   height: 100%;
              // }

              .home {
                margin: 0;
                position: absolute;
                width: 100%;
                min-height: 100%;
                background: #000;
                background-image: url(/static/bg2.jpg);
                background-image: radial-gradient(
                    #000,
                    #000a,
                    #0008,
                    #0005,
                    #0003
                  ),
                  url(/static/bg2.jpg);
                background-size: cover;
              }

              .toolbar_title {
                text-shadow: 0 0 2px #000;
              }

              a,
              *:focus {
                outline: none;
                text-decoration: none;
                color: inherit;
              }

              // #__next {
              //   position: absolute;
              //   height: 100%;
              //   width: 100%;
              //   /* background-color: #ffed00; */
              //   overflow-y: scroll;
              //   overscroll-behavior-y: none;
              // }

              input,
              textarea {
                outline: none;
              }

              .toolbar_title {
                text-shadow: 0 0 2px #000;
              }
              body {
                // font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI',
                //   'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
                //   'Droid Sans', 'Helvetica Neue', sans-serif;
                font-family: 'Lato', sans-serif;

                background: #fbfbfb;
              }

              * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
              }

              /* loading progress bar styles */
              #nprogress {
                pointer-events: none;
              }

              #nprogress .bar {
                background: ${YELLOW};
                position: fixed;
                z-index: 1031;
                top: 0;
                left: 0;
                width: 100%;
                height: 2px;
              }

              #nprogress .peg {
                display: block;
                position: absolute;
                right: 0px;
                width: 100px;
                height: 100%;
                box-shadow: 0 0 10px ${YELLOW}, 0 0 5px ${YELLOW};
                opacity: 1;
                transform: rotate(3deg) translate(0px, -4px);
              }
              .inner {
                width: 100%;
                max-width: 1100px;
                margin: auto;
              }
              .slim {
                max-width: 700px;
                width: 100%;
                margin: auto;
                // padding: 0 20px;
              }
            `}
          </style>
        </Container>
      </AppContainer>
    )
  }
}
