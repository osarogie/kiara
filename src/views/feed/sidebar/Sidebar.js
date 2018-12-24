import { NUBLUE } from './../../../ui'
import Anchor from 'antd/lib/anchor'

export function Sidebar() {
  return (
    <Anchor style={{ backgroundColor: 'transparent', marginTop: 50 }}>
      <div className="side">
        <div className="flex">
          <div
            className="sidebar r-side extra-padding"
            style={{ margin: '0 0 15px 15px' }}
          >
            <div className="s-top">
              <div>
                <a href="/new-story" className="s-button full">
                  Share Your Story
                </a>
              </div>
              <div>
                <a href="/new-poll" className="s-button full">
                  New voting poll
                </a>
              </div>
              <div>
                <a href="/new-group" className="s-button full">
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
            <div style={{ color: '#8c8c8c' }}>
              <a
                style={{
                  fontSize: 20,

                  fontFamily: 'Kaushan Script'
                }}
                href="/"
              >
                <span style={{ color: '#505050' }}>The</span>
                <span style={{ color: '#262627' }}>Community</span>
              </a>
              <div>
                A{' '}
                <a href="//nosakhare.us" style={{ color: '#000' }}>
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
            background-color:#fff;
            border: 1px solid #ddd;
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
            // background: ${NUBLUE};
            color: #444;
            font-weight:bold;
            // border-radius: 0;
            // box-shadow: 0 0 6px -2px rgba(0,0,0,0.2);
            // border: 1px solid #e2e2e2;
            // border: 1px solid #8e8e8e;
            box-sizing: border-box;
            // border-radius: 4px;
          }

          .s-button:hover {
            // background: #2d519e;
            color:#000;
          }
        `}
      </style>
    </Anchor>
  )
}
