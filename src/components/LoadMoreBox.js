import ActivityButton from 'components/ActivityButton'
import { NUBLUE } from 'ui'

export function LoadMoreBox({ isLoading, onPress }) {
  return (
    <ActivityButton
      isLoading={isLoading}
      buttonClassName="bd s__main__bg"
      textClassName="s__content__main"
      indicatorColor={NUBLUE}
      buttonStyle={{
        width: 300,
        marginHorizontal: 'auto',
        marginVertical: 21,
        height: 40
      }}
      title="Load More"
      onPress={onPress}
    />
  )
}

export default LoadMoreBox
