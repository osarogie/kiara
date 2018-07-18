import React from 'react'
import { View } from '@shoutem/ui/components/View'
import { Screen } from '@shoutem/ui/components/Screen'
import { Heading } from '@shoutem/ui/components/Text'
import { Text } from '@shoutem/ui/components/Text'
import { YELLOW } from 'ui'

export default class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null
    return { statusCode }
  }
  render() {
    return (
      <div style={{ backgroundColor: YELLOW }}>
        <Screen style={{ backgroundColor: YELLOW }}>
          <View
            style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}
          >
            <Heading
              style={{
                color: '#00000082',
                fontSize: 125,
                lineHeight: 'initial',
                textAlign: 'center',
                marginHorizontal: 20
              }}
            >
              {this.props.statusCode}
            </Heading>
            <Text
              style={{
                color: '#00000082',
                fontSize: 44,
                lineHeight: 'initial',
                textAlign: 'center',
                marginHorizontal: 20
              }}
            >
              It's an error. Sorry we can't find what you're looking for
            </Text>
          </View>
          <style jsx global>{`
            body {
              background: ${YELLOW} !important;
            }
          `}</style>
        </Screen>
      </div>
    )
  }
}
