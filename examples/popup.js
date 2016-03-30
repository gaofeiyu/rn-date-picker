'use strict';

import React, { AppRegistry, View, StyleSheet, TouchableHighlight, Text } from 'react-native';
import PopupDatePicker from 'rn-date-picker/src/ios/popup';
import Format from './libs/format';

const styles = StyleSheet.create({
  label: {
    color: 'red', 
    textAlign:'center', 
    fontSize: 20, 
    fontWeight: '900', 
    lineHeight: 28
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    height: 40,
    borderRadius: 3,
    backgroundColor: 'darkgray',
  },
  buttonText: {
    fontSize: 13,
    color: '#fff'
  }
});

const PopupExample = React.createClass({
  getInitialState() {
    return {
      visible: false,
      date: new Date()
    };
  },
  getFormatDate(fmt) {
    if (this.state.date) {
      return Format(this.state.date, fmt);
    }
    return " ";
  },
  onDismiss() {
    this.setState({visible: false});
  },
  onChange(date) {
    this.setState({
      visible: false,
      date: date
    });
  },
  render () {
    return (
      <View style={{flex: 1, backgroundColor: '#F5F5F9'}}>
        <TouchableHighlight delayPressOut={1} style={styles.button} 
          underlayColor={'gray'}
          onPress={() => this.setState({visible: true})}>
          <Text style={styles.buttonText}>{this.getFormatDate("yyyy-MM-dd hh:mm")}</Text>
        </TouchableHighlight>
        <PopupDatePicker 
          visible={this.state.visible} 
          date={this.state.date}
          onDismiss={this.onDismiss}
          onChange={this.onChange} />
      </View>
    );
  }
});

AppRegistry.registerComponent('popup', () => PopupExample);
