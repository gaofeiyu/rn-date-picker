'use strict';

import React, { AppRegistry, View, StyleSheet, Text } from 'react-native';
import { DatePicker } from 'rn-date-picker';
import Format from './libs/format';

const styles = StyleSheet.create({
  label: {
    color: 'red', 
    textAlign:'center', 
    fontSize: 20, 
    fontWeight: '900', 
    lineHeight: 28
  }
}); 

const SimpleExample = React.createClass({
  getInitialState() {
    return {
      date: new Date()
    };
  },
  getFormatDate(fmt) {
    if (this.state.date) {
      return Format(this.state.date, fmt);
    }
    return " ";
  },
  render () {
    return (
      <View style={{flex: 1, backgroundColor: '#F5F5F9'}}>
        <Text style={styles.label}>{this.getFormatDate("yyyy-MM-dd hh:mm")}</Text>
        <DatePicker date={this.state.date} onDateChange={(date)=>this.setState({date})} />
        <Text style={styles.label}>{this.getFormatDate("hh:mm")}</Text>
        <DatePicker mode="time" date={this.state.date} onDateChange={(date)=>this.setState({date})} />
      </View>
    );
  }
});

AppRegistry.registerComponent('simple', () => SimpleExample);
