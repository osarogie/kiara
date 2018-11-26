import React from 'react'

export default class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null
    return { statusCode }
  }
  render() {
    return (
      <div>
        <a className="navbar-brand" href="/">
          <img className="logo" src="/static/images/logo3.png" alt="TC" />
        </a>

        <h2 className="text big">{this.props.statusCode}</h2>
        <div className="text">Sorry we can't find what you're looking for</div>
        <style jsx>
          {`
            .logo {
              height: 50px;
              margin: 20px;
              padding: 6px;
            }
            .navbar-brand {
              margin-left: 0;
            }
            .text {
              margin: auto;
              color: rgb(0, 0, 0);
              font-size: 44px;
              line-height: initial;
              text-align: center;
            }
            .text.big {
              font-size: 125px;
            }
          `}
        </style>
      </div>
    )
  }
}
