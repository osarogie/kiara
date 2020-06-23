import React, { Component } from 'react'
import { View } from 'react-native-web'
import { Toolbar } from 'components/Toolbar1'
import { withRouter } from 'next/router'

export class NewPostAppBar extends Component {
  static propTypes = {}
  static defaultProps = {
    className: ''
  }

  render() {
    const { router, loggedIn, className, ...props } = this.props
    return (
      <div className={`toolbar ${className}`}>
        <Toolbar
          className="inner"
          title={<img className="logo" src="/images/logo3.png" alt="" />}
          style={
            {
              // position: 'absolute',
              // top: Platform.select({ default: 23, web: 0 }),
              // right: 0,
              // left: 0
            }
          }
          titleStyle={{ textAlign: 'center', fontSize: 25 }}
          rightComponent={
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center'
              }}
            >
              {this.props.loggedIn ? (
                <>
                  <button
                    className="button"
                    style={{ marginRight: 20 }}
                    onClick={() => window.publish()}
                  >
                    Publish
                  </button>
                  <UserAvatarMenu user={this.props.user} />
                </>
              ) : null}
            </View>
          }
          {...props}
        />
        <style jsx>
          {`
            .logo {
              height: 40px;
            }
          `}
        </style>
      </div>
    )
  }
}

NewPostAppBar = withRouter(NewPostAppBar)

export default NewPostAppBar
