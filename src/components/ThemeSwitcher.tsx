import Popover from 'antd/lib/popover'
import { useState, useCallback } from 'react'
import { setDarkModeEnabled, getDarkModeEnabled } from 'utils'
import { Switch } from 'antd'

export function ThemeSwitcher({ style }) {
  const [darkMode, setDarkMode] = useState(getDarkModeEnabled())

  // useEffect(() => {
  //   setDarkMode(getDarkModeEnabled())
  // })

  const setTheme = useCallback(
    (darkMode) => {
      setDarkMode(darkMode)
      setTimeout(() => {
        setDarkModeEnabled(darkMode)
      }, 500)
    },
    [setDarkMode]
  )

  return (
    <Popover
      placement="bottomRight"
      content={
        <>
          <div className="flex flex-row items-center mt-2 w-40 mb-4">
            <span className="s__content__main80">Dark Mode </span>
            <div className="flex-1" />
            <Switch checked={darkMode} onChange={setTheme} />
          </div>
        </>
      }
      trigger="click"
    >
      <div
        style={{
          padding: '10px',
          cursor: 'pointer',
          ...style
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 appbar-a"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </Popover>
  )
}
