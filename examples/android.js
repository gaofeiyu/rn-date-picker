'use strict';

import React, { AppRegistry, View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';
import DatePicker from 'rn-date-picker';
import Format from './libs/format';

var DatePickerAndroidExample = React.createClass({

  getInitialState() {
    return {
      hint: "请选择时间",
      date: new Date('2015-12-12'),
      minDate: new Date('2014-12-12'),
      maxDate: new Date('2019-12-12'),
      visible: false
    };
  },

  showDatePicker() {
    this.setState({visible: true});
  },

  onChange(date) {
    console.log('demo: onChange');
    this.setState({ hint: date.toLocaleDateString(), visible: false });
  },

  onDismiss() {
    console.log('demo: onDismiss');

    this.setState({ hint: "dismiss", visible: false });
  },

  render() {
    console.log('render demo');
    return (
      <View>
        <TouchableWithoutFeedback
          onPress={ this.showDatePicker }>
          <Text style={{ height: 50, textAlign: 'center', padding: 30, margin: 30, fontSize: 20}}>{ this.state.hint }</Text>
        </TouchableWithoutFeedback>
        <DatePicker minDate={ this.state.minDate } maxDate={ this.state.maxDate } defaultDate={ this.state.date } visible={ this.state.visible } onChange={ this.onChange } onDismiss={ this.onDismiss }/>
      </View>
    );
  }
});

AppRegistry.registerComponent('android', () => DatePickerAndroidExample);