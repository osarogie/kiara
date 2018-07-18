import ZocialIcon from 'components/vector-icons/Zocial';
import OcticonIcon from 'components/vector-icons/Octicons';
import MaterialIcon from 'components/vector-icons/MaterialIcons';
import MaterialCommunityIcon
  from 'components/vector-icons/MaterialCommunityIcons';
import Ionicon from 'components/vector-icons/Ionicons';
import FoundationIcon from 'components/vector-icons/Foundation';
import EvilIcon from 'components/vector-icons/EvilIcons';
import EntypoIcon from 'components/vector-icons/Entypo';
import FAIcon from 'components/vector-icons/FontAwesome';
import SimpleLineIcon from 'components/vector-icons/SimpleLineIcons';

export default type => {
  switch (type) {
    case 'zocial':
      return ZocialIcon;
    case 'octicon':
      return OcticonIcon;
    case 'material':
      return MaterialIcon;
    case 'material-community':
      return MaterialCommunityIcon;
    case 'ionicon':
      return Ionicon;
    case 'foundation':
      return FoundationIcon;
    case 'evilicon':
      return EvilIcon;
    case 'entypo':
      return EntypoIcon;
    case 'font-awesome':
      return FAIcon;
    case 'simple-line-icon':
      return SimpleLineIcon;
    default:
      return MaterialIcon;
  }
};
