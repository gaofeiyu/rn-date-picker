'use strict';

import React, { PropTypes, DatePickerAndroid, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';

const noop = () => {};

export default React.createClass({
  propTypes: {
    minDate: PropTypes.object,
    maxDate: PropTypes.object,
    onChange: PropTypes.func,
    onDismiss: PropTypes.func,
    defaultDate: PropTypes.object,
    visible: PropTypes.bool
  },
  getDefaultProps() {
    return {
      defaultDate: new Date(),
      onChange: noop,
      onDismiss: noop,
      visible: false
    };
  },
  onChange(date){
    this.props.onChange(date);
  },
  onDismiss() {
    this.props.onDismiss();
  },
  componentWillReceiveProps(props) {
    if (typeof props.visible == "undefined") return;

    if (props.visible) {
      this.showPicker({
        date: this.props.defaultDate,
        minDate: this.props.minDate,
        maxDate: this.props.maxDate
      });
    }
  },
  async showPicker(options) {
    try {
      var newState = {};
      const {action, year, month, day} = await DatePickerAndroid.open(options); 
      if (action === DatePickerAndroid.dismissedAction) {
        this.onDismiss();
      } else {
        var date = new Date(year, month, day);
        this.onChange(date);
      }
    } catch ({code, message}) {
      console.warn('Error: ', message);
    }
  },
  render() {
    return null;
  },
});

