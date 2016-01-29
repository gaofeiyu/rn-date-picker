'use strict';

import React, { PropTypes, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Modal from 'rn-modal';
import DatePicker from './index';

const noop = () => {};

const PopupDatePicker = React.createClass({
  propTypes: {
    visible: PropTypes.bool,
    okText: PropTypes.string,
    dismissText: PropTypes.string,
    onChange: PropTypes.func,
    onPickerChange: PropTypes.func,
    onDismiss: PropTypes.func,
    onVisibleChange: PropTypes.func,
    onPickerChange: PropTypes.func,
    styles: PropTypes.object
  },
  getDefaultProps() { 
    return {
      okText: 'Ok',
      dismissText: 'Dismiss',
      onChange: noop,
      onPickerChange: noop,
      onDismiss: noop,
      onVisibleChange: noop,
      onPickerChange: noop,
      styles: {}
    };
  },
  getInitialState() {
    return {};
  },
  componentWillReceiveProps({visible}) {
    if (this.props.visible !== visible) {
      this.props.onVisibleChange(visible);
    }
  },  
  onChange() {
    this.props.onChange(this.state.date);
  },
  onPickerChange(date) {
    this.setState({date});
    this.props.onPickerChange(date);
  },
  onDismiss() {
    if (this.props.visible) {
      this.props.onDismiss();
    }
  },
  render() {
    const state = this.state;
    const props = this.props;
    const customStyle = StyleSheet.create(props.styles);
    return (<Modal visible={props.visible} onDismiss={this.onDismiss}>
        <View style={[styles.container, customStyle.container]}>
          <View style={[styles.toolbar, customStyle.toolbar]}>
            <TouchableOpacity style={[styles.button, customStyle.button]} activeOpacity={1} onPress={()=>this.onDismiss()}>
              <Text style={[styles.buttonText, customStyle.buttonText]}>{props.dismissText}</Text>
            </TouchableOpacity>
            <View style={{flex: .3}}/>
            <TouchableOpacity style={[styles.button, customStyle.button]} activeOpacity={1} onPress={()=>this.onChange()}>
              <Text style={[styles.buttonText, customStyle.buttonText]}>{props.okText}</Text>
            </TouchableOpacity>
          </View>
          <DatePicker
            defaultDate={props.defaultDate}
            date={state.date}
            mode={props.mode}
            onDateChange={this.onPickerChange}
            minDate={props.minDate}
            maxDate={props.maxDate}
            minuteInterval={props.minuteInterval}
            timeZoneOffsetInMinutes={props.timeZoneOffsetInMinutes} />
        </View>
      </Modal>);
  }
});


var styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#FFF',
    height: 240
  },
  toolbar: {
    borderBottomWidth: 1,
    borderBottomColor: '#E6E6E6',
    flexDirection: 'row'
  },
  button: {
    flex: .35,
    alignItems: 'center',
    height: 40,
    justifyContent: 'center'
  },
  buttonText: {
    color: '#0ae',
    fontSize: 16
  }
});

module.exports = PopupDatePicker;
