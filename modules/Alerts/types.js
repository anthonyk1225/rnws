import {
  Alert,
} from 'react-native';
import i18n from '../../constants/languages';

const OK = i18n.t('OK');

export default {
  socketError: (msg) => {
    Alert.alert(
      i18n.t('Error'),
      i18n.t('Unexpected'),
      [
        {
          text: OK,
          onPress: null,
        },
      ],
    );
  },
};
