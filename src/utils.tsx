import { nookies } from './lib/nookies'
import { useEffect, useState } from 'react'
import { baseUrl } from '../tc.config'

export function useTimeAgo(time = 0) {
  const [timeAgo, setTimeAgo] = useState(() => getTimeAgo(time))

  useEffect(() => {
    setTimeAgo(getTimeAgo(time))
  }, [time])

  return timeAgo
}

const getTimeAgo = (time) => {
  let diff = Math.floor(new Date().getTime() / 1000 - time)
  let timeDiff

  let MINUTE = 60
  let HOUR = MINUTE * 60
  let DAY = HOUR * 24
  let WEEK = DAY * 7
  let MONTH = DAY * 30
  let YEAR = DAY * 356

  const t = new Date(time * 1000)
  const year = t.getFullYear().toString().slice(2, 4)
  if (diff >= YEAR) {
    timeDiff = `${t.getDate()}/${t.getMonth() + 1}/${year}`
  } else if (diff >= MONTH) {
    timeDiff = `${getMonth(t.getMonth())} ${t.getDate()}`
  } else if (diff > WEEK) {
    const duration = Math.floor(diff / WEEK)
    timeDiff = duration.toString() + ` week${duration !== 1 ? 's' : ''} ago`
  } else if (diff === WEEK) {
    timeDiff = getDay(t.getDay())
  } else if (diff > DAY) {
    const duration = Math.floor(diff / DAY)
    timeDiff = duration.toString() + ` day${duration !== 1 ? 's' : ''} ago`
  } else if (diff === DAY) {
    timeDiff = 'Yesterday'
  } else if (diff >= HOUR) {
    const duration = Math.floor(diff / HOUR)
    timeDiff = duration.toString() + ` hour${duration !== 1 ? 's' : ''} ago`
  } else if (diff >= MINUTE) {
    const duration = Math.floor(diff / MINUTE)
    timeDiff = duration.toString() + ` min${duration !== 1 ? 's' : ''} ago`
  } else {
    timeDiff = diff.toString() + `s`
  }

  return timeDiff
}

export const getCommentCount = (count) => count

export const imageUrl = (name, dimensions = '') => {
  if (dimensions) {
    return `/api/images/crop/${dimensions}/${name}`
  }

  return `/api/images/${name}`
}

const monthList = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec'
]
const dayList = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
]

const getMonth = (month) => monthList[month]

const getDay = (day) => dayList[day - 1]

/////////////////////////////////////////////////////////////////

export function setDarkModeEnabled(enabled) {
  const theme = enabled ? 'dark' : ''
  nookies.set(null, 'theme', theme)
  document.body.setAttribute('class', theme)
}

export const getDarkModeEnabled = () => !!nookies.get()['theme']

export function toISODate(date = 0) {
  if (!date) return ''
  return new Date(date * 1000).toISOString()
}

export function isSameOrigin(url = '') {
  const loc = window.location
  const a = document.createElement('a')

  a.href = url

  return (
    a.hostname === loc.hostname &&
    a.port === loc.port &&
    a.protocol === loc.protocol
  )
}

export function getUserImage(user: any, size: number = 250) {
  let uri: string = ''

  if (user.profilePicture && !user.profilePicture.includes('thecommunity')) {
    uri = user.profilePicture.replace('http://', '//')
    if (uri.includes('facebook')) {
      uri = `${uri}?type=large`
    }

    return uri
  }
  if (user.profilePictureName && typeof user.profilePictureName === 'string') {
    uri = user.profilePictureName
  }
  if (user.profilePicture && typeof user.profilePicture === 'string') {
    uri = user.profilePicture.split('/').pop()
  }
  uri = imageUrl(uri, size ? `${size}x${size}` : undefined)

  return {
    url: baseUrl + uri,
    width: size,
    height: size,
    name: user.profilePictureName
  }
}
