import React, { useCallback, useState } from 'react'
import { View } from 'react-native'
import Discover from 'renderers/Discover'
import AppBar from 'components/AppBar'
import Icon from 'react-native-vector-icons/Feather'
import withData from 'lib/withData'
import { graphql } from 'react-relay'
import { CustomHead } from 'components/_partials/CustomHead'

const query = graphql`
  query DiscoverScreenQuery {
    ...Viewer_viewer
  }
`

export default function DiscoverScreen() {
  const [q, setQ] = useState('')
  const [qs, setQs] = useState('')

  const handleSubmit = useCallback(
    (e) => {
      setQ(e.target.value)
    },
    [setQ]
  )

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault()
      setQs(q)
    },
    [q, setQs]
  )
  return (
    <View>
      <AppBar className="elevated" />
      <CustomHead title="Search TheCommunity" />
      <View style={{ alignItems: 'center' }}>
        <div className="inner search">
          <form onSubmit={onSubmit} className="slim">
            <div className="search-bar bd s__main__bg flex elevated">
              <button
                className="fa fa-search s-icon"
                style={{ background: 'transparent', border: 'none' }}
                type="submit"
              >
                <Icon name="search" size={24} className="search-icon" />
              </button>

              <input
                type="text"
                className="s-box extra-padding"
                name="q"
                onChange={handleSubmit}
                placeholder="Search TheCommunity"
              />
            </div>
          </form>
          <Discover q={qs} />
        </div>
      </View>
    </View>
  )
}

DiscoverScreen = withData(DiscoverScreen, { query })
