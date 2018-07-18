// @flow

import React from 'react'
import { View, StyleSheet, Platform, TabBarIOS } from 'react-native'
import Group from 'renderers/Group'
import Toolbar from 'components/Toolbar'
import getNavigation from 'helpers/getNavigation'
import { withNavigation } from 'react-navigation'

import Col from 'antd/lib/col'
import Row from 'antd/lib/row'
export default class CultureScreen extends React.Component {
  renderToolbar() {
    // const { culture } = this.props.navigation.state.params
    // const title = (culture && culture.permalink) || 'Culture'
    const title = 'Culture'

    return Platform.select({
      android: <Toolbar title={title} navIconName="md-arrow-back" />,
      ios: <TabBarIOS />
    })
  }

  render() {
    const { navigation, id } = this.props
    // console.log(navigation.state.params.id)

    return (
      <View style={{ flex: 1 }}>
        {this.renderToolbar()}
        <div className="row">
          <Row>
            <Col
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 18 }}
              lg={{ span: 18 }}
            >
              <Group
                id={id}
                {...getNavigation(navigation)}
                showGroupInfo={false}
              />
            </Col>
            <Col
              xs={{ span: 0 }}
              sm={{ span: 0 }}
              md={{ span: 6 }}
              lg={{ span: 6 }}
            >
              <div className="side">Hi</div>
            </Col>
          </Row>
        </div>
        <style jsx>
          {`
            .row {
              width: 100%;
              max-width: 1100px;
              margin-left: auto;
              margin-right: auto;
              margin-top: 50px;
            }
            .side {
              backround-color: #fff;
            }
          `}
        </style>
      </View>
    )
  }
}

CultureScreen = withNavigation(CultureScreen)

// const styles2 = StyleSheet.create({
//   wrapper: {},
//   slide1: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#9DD6EB'
//   },
//   slide2: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#97CAE5'
//   },
//   slide3: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#92BBD9'
//   },
//   text: {
//     color: '#fff',
//     fontSize: 30,
//     fontWeight: 'bold'
//   }
// })
