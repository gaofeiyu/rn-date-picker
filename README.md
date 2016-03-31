


# rn-date-picker

React Native Date Select Component

## Screenshot

| iOS | Android |
| --- | --- |
| <img src="https://cloud.githubusercontent.com/assets/50817/12666289/41c33d5e-c67a-11e5-9d32-c7a92c693b5d.png" width="320"/> | <img src="https://cloud.githubusercontent.com/assets/50817/14137835/4521d31e-f69c-11e5-8b14-53226f3b8416.png" width="320"/> |

## Development

```
 
  npm install
  npm start

```

## Example

http://localhost:8081/examples/

online example: http://react-component.github.io/rn-date-picker/

## install

 [![rn-date-picker](https://nodei.co/npm/rn-date-picker.png)](https://npmjs.org/package/rn-date-picker)
    

## Usage
see example

## API

### DatePicker props

| name     | description    | type     | default      |
|----------|----------------|----------|--------------|
|defaultDate | default selected date. | Date | now |
|date | The currently selected date. | Date |  |
|onDateChange | Date change handler. | Function(date: Date) | '' |
|mode | The date picker mode. | String | 'date' enum('date', 'time', 'datetime') |
|minDate | min date | Date | System |
|maxDate | max date | Date | System |

### rn-date-picker/src/Popup props

+ iOS

  | name     | description    | type     | default      |
  |----------|----------------|----------|--------------|
  |defaultDate | default selected date. | Date | now |
  |date | The currently selected date. | Date |  |
  |onPickerChange | Date inside picker change handler. | Function(date: Date) | '' |
  |mode | The date picker mode. | String | 'date' enum('date', 'time', 'datetime') |
  |minDate | min date | Date | System |
  |maxDate | max date | Date | System |
  |onChange | exec on ok | Function(date: Date) |  |
  |onDismiss | exec on dismiss | function |  |
  |okText | ok button text | String | 'Ok' |
  |dismissText | dismiss button text | String | 'Dismiss' |
  |visible | whether pop picker is visible | Boolean | |
  |onVisibleChange | called when pop picker visible change | Function | |
  
+ Android

  | name     | description    | type     | default      |
  |----------|----------------|----------|--------------|
  |date | selected date. | Date | now |
  |hour | the hour to show on the timepicker | Number | Now  |
  |minute | the minute to show  on the  timepicker | Number | Now  |
  |minDate | min date | Date | System |
  |maxDate | max date | Date | System |
  |mode | The date picker mode. | String | 'date' enum('date', 'time', 'datetime') |
  |onChange | exec on complete | Function(date: Date) |  |
  |onDismiss | exec on dismiss | function |  |
  |visible | whether datepicker is visible | Boolean | |

## License

rn-date-picker is released under the MIT license.
