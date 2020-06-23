import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import Ionicon from 'react-native-vector-icons/Ionicons'

export default type => {
  switch (type) {
    case 'material':
      return MaterialIcon
    case 'ionicon':
      return Ionicon
    default:
      return MaterialIcon
  }
}
