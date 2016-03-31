'use strict';

import React, { PropTypes, DatePickerAndroid, TimePickerAndroid } from 'react-native';

const noop = () => {};

export default React.createClass({
  propTypes: {
    minDate: PropTypes.object,
    maxDate: PropTypes.object,
    onChange: PropTypes.func,
    onDismiss: PropTypes.func,
    visible: PropTypes.bool,
    mode: PropTypes.string
  },
  getDefaultProps() {
    return {
      date: new Date(),
      onChange: noop,
      onDismiss: noop,
      visible: false,
      mode: 'date'
    };
  },
  onChange(date){
    let ret = this.props.date || new Date();
    if (!date.year) {
      ret.setHours(date.hour);
      ret.setMinutes(date.minute);
      ret.setSeconds(0);
    }else if (!date.hour){
      ret = new Date(date.year, date.month, date.day);
    }else {
      ret = new Date(date.year, date.month, date.day, date.hour, date.minute);
    }
    this.props.onChange(ret);
  },
  onDateChange(date) {
    if (this.props.mode === 'datetime') {
      this.showTimePicker({
        hour: this.props.hour,
        minute: this.props.minute
      }, date);
    }else {
      this.onChange(date);
    }
  },
  onTimeChange(date) {
    this.onChange(date);
  },
  onDismiss() {
    this.props.onDismiss();
  },
  componentWillReceiveProps(props) {
    if (typeof props.visible == "undefined") return;

    if (props.visible) {
      switch(this.props.mode) {
      case 'time':
        this.showTimePicker({
          hour: this.props.hour,
          minute: this.props.minute
        });
        break;
        default:
        this.showDatePicker({
          date: this.props.date,
          minDate: this.props.minDate,
          maxDate: this.props.maxDate
        });
      }
    }
  },
  async showDatePicker(options) {
    try {
      const {action, year, month, day} = await DatePickerAndroid.open(options); 
      if (action === DatePickerAndroid.dismissedAction) {
        this.onDismiss();
      } else {
        this.onDateChange({ year: year, month: month, day: day });
      }
    } catch ({code, message}) {
      console.warn('Error: ', message);
    }
  },
  async showTimePicker(options, date) {
    try {
      const {action, minute, hour} = await TimePickerAndroid.open(options);
      if (action === TimePickerAndroid.timeSetAction) {
        date = date || {};
        date.hour = hour;
        date.minute = minute;
        this.onTimeChange(date);
      } else if (action === TimePickerAndroid.dismissedAction) {
        this.onDismiss();
      }
    } catch ({code, message}) {
      console.warn('Error :', message);
    }
  },
  render() {
    return null;
  },
});
