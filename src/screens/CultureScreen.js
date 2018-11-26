// @flow

import React from 'react'
import { View } from 'react-native'
import Group from 'renderers/Group'
import getNavigation from 'helpers/getNavigation'
import { withNavigation } from 'react-navigation'

import Col from 'antd/lib/col'
import Row from 'antd/lib/row'
import Anchor from 'antd/lib/anchor'
import GroupInfo from 'renderers/GroupInfo'
export default class CultureScreen extends React.Component {
  render() {
    const { navigation, id } = this.props
    // console.log(navigation.state.params.id)

    return (
      <View style={{ flex: 1 }}>
        <div className="r">
          <GroupInfo id={id} />
          <Row>
            <Col
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 16 }}
              lg={{ span: 12 }}
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
              md={{ span: 0 }}
              lg={{ span: 4 }}
            />
            <Col
              xs={{ span: 0 }}
              sm={{ span: 0 }}
              md={{ span: 8 }}
              lg={{ span: 8 }}
            >
              <Anchor
                offsetTop={50}
                style={{ backgroundColor: 'transparent' }}
              />
            </Col>
          </Row>
        </div>
        <style jsx>
          {`
            .r {
              width: 100%;
              max-width: 1100px;
              margin-left: auto;
              margin-right: auto;
              // margin-top: 50px;
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
