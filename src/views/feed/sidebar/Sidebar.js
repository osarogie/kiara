import { newStoryLink, newPoll, newGroup } from './../../../helpers/links'
import { NUBLUE } from './../../../ui'
import Anchor from 'antd/lib/anchor'

export function Sidebar() {
  return (
    <Anchor style={{ backgroundColor: 'transparent', marginTop: 50 }}>
      <div className="side">
        <div className="flex">
          <div
            className="sidebar r-side extra-padding s__main__bg bd"
            style={{ margin: '0 0 15px 15px' }}
          >
            <div className="s-top s__content__main">
              <div>
                <a href={newStoryLink()} className="s-button full">
                  Share Your Story
                </a>
              </div>
              <div>
                <a href={newPoll()} className="s-button full">
                  New voting poll
                </a>
              </div>
              <div>
                <a href={newGroup()} className="s-button full">
                  Start your own culture
                </a>
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
              <div>
                A{' '}
                <a href="//nosakhare.us" className="s__content__main">
                  Nosakhare
                </a>{' '}
                Company.
              </div>
              <br />
              <small>Made with &hearts; in Lagos</small>
              <br />
              <small>&copy; 2018 TheCommuntiy. All rights reserved.</small>
              <a
                className="block"
                href="https://play.google.com/store/apps/details?id=ng.thecommunity.kovu&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
                target="blank"
              >
                <img
                  alt="Get it on Google Play"
                  className="playstore_badge"
                  src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .side {
            margin-top: 20px;
          }
          .sidebar {
            margin-top: 50px;
            border-radius: 10px;
          }
          .playstore_badge {
            height: 60px;
          }
          .block {
            display: block;
            margin-left: -6px;
            margin-top: 10px;
          }
          .s-button {
            display: block;
            max-width: 250px;
            margin: 2px 0;
            padding: 10px;
            font-weight: bold;
            box-sizing: border-box;
          }
        `}
      </style>
    </Anchor>
  )
}
