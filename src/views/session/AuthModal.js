import {
  googleAuthLink,
  facebookAuthLink,
  emailAuthLink
} from './../../helpers/links'
import './socialsignin.scss'

export function AuthModal({ message = 'Login' }) {
  return (
    <div id="login_area" className="section register">
      <div className="banner">
        {/* <img className="logo" src="/images/logo3.png" alt="Logo3" /> */}
        <h2 className="logo_name s__content__main">{message}</h2>
        <div className="logo_name s__content__main subtitle">
          Here everybody is somebody
        </div>
      </div>
      <a
        href={googleAuthLink()}
        className="signin-button s__main__bg bd elevated"
      >
        <span className="signin-button__icon">
          <svg viewBox="0 0 366 372" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M125.9 10.2c40.2-13.9 85.3-13.6 125.3 1.1 22.2 8.2 42.5 21 59.9 37.1-5.8 6.3-12.1 12.2-18.1 18.3l-34.2 34.2c-11.3-10.8-25.1-19-40.1-23.6-17.6-5.3-36.6-6.1-54.6-2.2-21 4.5-40.5 15.5-55.6 30.9-12.2 12.3-21.4 27.5-27 43.9-20.3-15.8-40.6-31.5-61-47.3 21.5-43 60.1-76.9 105.4-92.4z"
              id="Shape"
              fill="#EA4335"
            />
            <path
              d="M20.6 102.4c20.3 15.8 40.6 31.5 61 47.3-8 23.3-8 49.2 0 72.4-20.3 15.8-40.6 31.6-60.9 47.3C1.9 232.7-3.8 189.6 4.4 149.2c3.3-16.2 8.7-32 16.2-46.8z"
              id="Shape"
              fill="#FBBC05"
            />
            <path
              d="M361.7 151.1c5.8 32.7 4.5 66.8-4.7 98.8-8.5 29.3-24.6 56.5-47.1 77.2l-59.1-45.9c19.5-13.1 33.3-34.3 37.2-57.5H186.6c.1-24.2.1-48.4.1-72.6h175z"
              id="Shape"
              fill="#4285F4"
            />
            <path
              d="M81.4 222.2c7.8 22.9 22.8 43.2 42.6 57.1 12.4 8.7 26.6 14.9 41.4 17.9 14.6 3 29.7 2.6 44.4.1 14.6-2.6 28.7-7.9 41-16.2l59.1 45.9c-21.3 19.7-48 33.1-76.2 39.6-31.2 7.1-64.2 7.3-95.2-1-24.6-6.5-47.7-18.2-67.6-34.1-20.9-16.6-38.3-38-50.4-62 20.3-15.7 40.6-31.5 60.9-47.3z"
              fill="#34A853"
            />
          </svg>
        </span>
        <span className="signin-button__text s__content__main">
          Continue with Google
        </span>
      </a>
      <a
        href={facebookAuthLink()}
        className="signin-button s__main__bg bd elevated"
      >
        <span className="signin-button__icon">
          <svg
            viewBox="0 0 366 372"
            xmlns="http://www.w3.org/2000/svg"
            height="40px"
            style={{ marginTop: 2 }}
          >
            <path
              d="M89.584,155.139V84.378h23.742l3.562-27.585H89.584V39.184   c0-7.984,2.208-13.425,13.67-13.425l14.595-0.006V1.08C115.325,0.752,106.661,0,96.577,0C75.52,0,61.104,12.853,61.104,36.452   v20.341H37.29v27.585h23.814v70.761H89.584z"
              fill="#4267b2"
            />
          </svg>
        </span>
        <span className="signin-button__text s__content__main">
          Continue with Facebook
        </span>
      </a>
      <a
        href={emailAuthLink()}
        className="signin-button s__main__bg bd elevated"
      >
        <span className="signin-button__icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M12 .02c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.99 6.98l-6.99 5.666-6.991-5.666h13.981zm.01 10h-14v-8.505l7 5.673 7-5.672v8.504z" />
          </svg>
        </span>
        <span className="signin-button__text s__content__main">
          Or use your email
        </span>
      </a>
      <img
        className="logo"
        src="/images/logo3.png"
        alt="Logo3"
        style={{
          display: 'table',
          margin: 'auto',
          height: 31
        }}
      />
    </div>
  )
}
