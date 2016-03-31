'use strict';

import React, { PropTypes, DatePickerIOS } from 'react-native';

const noop = () => {};

export default React.createClass({
  getDefaultProps() {
    return {
      defaultDate: new Date(),
      onDateChange: noop
    };
  },
  onDateChange(date){
    this.props.onDateChange(date);
  },
  render() {
    const props = this.props;
    const date = props.date || props.defaultDate;
    
    return (<DatePickerIOS
      date={date}
      mode={props.mode}
      onDateChange={this.onDateChange}
      minimumDate={props.minDate}
      maximumDate={props.maxDate}
      minuteInterval={props.minuteInterval}
      timeZoneOffsetInMinutes={props.timeZoneOffsetInMinutes}/>);
  },
});