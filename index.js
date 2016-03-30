import { Platform } from 'react-native';
import DatePickerIOS from './src/ios/index';
import PopupDatePicker from './src/ios/popup';
import DataPickerAndroid from './src/android/index';

if (Platform.OS === 'ios') {
  module.exports = {
     DatePicker: DatePickerIOS,
     PopupDatePicker: PopupDatePicker
  }
}else {
  module.exports = {
    DatePicker: DataPickerAndroid
  }
}