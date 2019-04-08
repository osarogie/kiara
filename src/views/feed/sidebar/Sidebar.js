import { SecureLink } from './../../../components/SecureLink'
import { BrowserLink } from './../../../components/BrowserLink'
import Avatar from 'components/Avatar'
import { View, Text } from 'react-native-web'
import {
  newStoryLink,
  newPoll,
  newGroup,
  userLink
} from './../../../helpers/links'
import { NUBLUE } from './../../../ui'
import Anchor from 'antd/lib/anchor'
import { GraphQuery } from 'components/GraphQuery'
import 'sidebar.scss'

const popularUsersQuery = `
  {
    popularUsers(first: 5) {
      edges {
        node {
          _id
          name
          username
          bio
          profile_picture
          profile_picture_name
        }
      }
    }
  }
`

function PopularUsers({ data }) {
  return (
    <div
      className="sidebar r-side extra-padding s__main__bg bd s__content__main"
      style={{ margin: '0 0 15px 15px' }}
    >
      <p>Some interesting people</p>
      {data.data.popularUsers.edges.map(user => (
        <View
          key={user.node._id}
          style={{
            flexDirection: 'row',
            flex: 1,
            alignItems: 'center',
            marginBottom: 10
          }}
        >
          <Avatar
            size={40}
            rounded
            source={user.node}
            title={user.node.name}
            activeOpacity={0.7}
          />
          <BrowserLink href={userLink(user.node)}>
            <Text
              numberOfLines={2}
              style={{
                flex: 1,
                marginLeft: 10,
                fontSize: 13
              }}
            >
              {user.node.name}
            </Text>
          </BrowserLink>
        </View>
      ))}
    </div>
  )
}

export function Sidebar() {
  return (
    <Anchor style={{ backgroundColor: 'transparent', marginTop: 50 }}>
      <div className="side">
        <div className="table">
          <GraphQuery query={popularUsersQuery} render={PopularUsers} />
          <div
            className="sidebar r-side extra-padding s__main__bg bd"
            style={{ margin: '0 0 15px 15px' }}
          >
            <div className="s-top s__content__main">
              <div>
                <SecureLink
                  message="Login to share your story"
                  href={newStoryLink()}
                  className="s-button full"
                >
                  Share Your Story
                </SecureLink>
              </div>
              <div>
                <SecureLink
                  message="Login to create a voting poll"
                  href={newPoll()}
                  className="s-button full"
                >
                  New voting poll
                </SecureLink>
              </div>
              <div>
                <SecureLink
                  message="Login to start your own blog"
                  href={newGroup()}
                  className="s-button full"
                >
                  Start your own blog
                </SecureLink>
              </div>
            </div>

            {/* <div className="d-embed">
              <div className="inner">
                <div className="table">Confirm your email address</div>
                <br />
                <a href="/a/confirmation" className="button table">
                  Click to confirm
                </a>
              </div>
            </div> */}

            <br />
            <br />
            <div className="s__content__main80">
              <a
                style={{
                  fontSize: 20,
                  fontFamily: 'Kaushan Script'
                }}
                href="/"
              >
                <span className="s__content__main">The</span>
                <span className="s__content__main">Community</span>
              </a>
              <br />
              <small>Made with &hearts; in Lagos</small>
              <br />
              <small className="ia">
                &copy; {new Date().getFullYear()} TheCommuntiy
              </small>
              <small className="ia">
                <a className="uh" href="/privacy">
                  Privacy
                </a>
              </small>
              <small>
                <a
                  className="uh"
                  href="https://play.google.com/store/apps/details?id=ng.thecommunity.kovu&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
                  target="blank"
                >
                  {/* <img
                  alt="Get it on Google Play"
                  className="playstore_badge"
                  src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png"
                /> */}
                  Android
                </a>
              </small>
            </div>
          </div>
        </div>
      </div>
    </Anchor>
  )
}
