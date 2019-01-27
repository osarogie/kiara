import { ThemeSwitcher } from './../../src/components/ThemeSwitcher'
import { Toolbar } from 'components/Toolbar1'
import TextArea from 'antd/lib/input/TextArea'
import { NewPostAppBar } from './../../src/components/NewPostAppBar'
import 'discussions.scss'
import Affix from 'antd/lib/affix'

export default () => (
  <>
    <form className="editor discussion-editor" id="new_discussion">
      <Affix>
        <div className={`toolbar elevated`}>
          <Toolbar
            className="inner"
            title={
              <img
                className="logo"
                style={{ height: 40 }}
                src="/static/images/logo3.png"
                alt="TC"
              />
            }
            rightComponent={
              <div>
                <label htmlFor="discussion_photo" className="left table">
                  <div
                    id="upload"
                    className="button s__content__main"
                    style={{ backgroundColor: 'transparent' }}
                  >
                    Add an image
                  </div>
                </label>
                <input
                  type="submit"
                  style={{ marginLeft: 15 }}
                  name="commit"
                  className="left button"
                  value="Post"
                  data-disable-with="Post"
                />
                <ThemeSwitcher />
              </div>
            }
          />
        </div>
      </Affix>
      <div className="inner" style={{ paddingLeft: 10, paddingRight: 10 }}>
        <div>
          <input
            style={{
              paddingLeft: 11,
              paddingRight: 11,
              backgroundColor: 'transparent'
            }}
            placeholder="Your title here"
            className="title s__dark__bg"
            // onKeyPress="enterpressalert(event, this)"
            type="text"
            name="discussion[name]"
            id="discussion_name"
          />

          <input
            className="hidden"
            id="discussion_photo"
            name="discussion_photo"
            type="file"
            accept="image/*"
          />
          <div className="progress">
            <div className="bar" />
          </div>
          <img
            src=""
            className="discussion_photo"
            style={{ display: 'none', width: '100%' }}
          />

          <TextArea
            style={{
              backgroundColor: 'transparent',
              paddingLeft: 11,
              paddingRight: 11
            }}
            autosize
            placeholder="Your post here"
            className="body s__dark__bg"
            name="discussion[body]"
            id="discussion_body"
          />
        </div>
      </div>
    </form>
  </>
)
