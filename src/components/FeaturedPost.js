import React, { Component } from 'react'
import { BrowserLink } from 'components/BrowserLink'
import { stroyLink, userLink } from 'helpers/links'
import user from 'redux/user'

export class FeaturedPost extends Component {
  render() {
    const { name, excerpt, feature_photo, user } = this.props.item
    return (
      <div className="featured">
        <div className="wrap" />
        <div className="content" style={{ fontFamily: 'Karla' }}>
          <BrowserLink route={stroyLink(this.props.item)}>
            <div className="title">{name}</div>
            <p>{excerpt}...</p>
            <br />
          </BrowserLink>
          <BrowserLink route={userLink(this.props.item)}>
            <div style={{ marginBottom: 20 }}>by {user.name}</div>
          </BrowserLink>
        </div>
        <style jsx>
          {`
            .title{
              font-size: 30px;
              margin-bottom:20px;

            }
            p {
              font-size: 22px;
            }
            .wrap {
              position: absolute;
              top: 0;
              bottom: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background-color: #0008;
            }
            .content {
              color: #fff;
              position: relative;
              font-family: 'Karla', sans-serif;
            }
            .featured {
              position: relative;
              display:table;
              width:100%;
              background-color: #eee;
              height: 240px;
              padding: 20px;
              margin-bottom: 50px;
              background-size: cover;
              background-image: url('//${feature_photo.url}');
            }
          `}
        </style>
      </div>
    )
  }
}

export default FeaturedPost
