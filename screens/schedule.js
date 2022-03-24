import React from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native'
import {Calendar, CalendarList, Agenda, LocaleConfig } from 'react-native-calendars'

LocaleConfig.locales['en'] = {
    monthNames: [ 'January', 'February', 'March', 'April', 'May', 'June', 
                  'July', 'August', 'September', 'November', 'December'],
    monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thurday', 'Friday', 'Saturday'],
    dayNamesShort: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    today: "Default"
}
LocaleConfig.defaultLocale = 'en'

const Schedule = () => {
    return (
        <View style = {{
            flex: 1, //
            justifyContent: 'center'
        }} >
            <Calendar
  hidemonthNamesShort={false}
  // Initially visible month. Default = now
  current={'2022-03-23'}
  // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
  minDate={'2012-05-10'}
  // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
  maxDate={'2030-05-30'}
  // Handler which gets executed on day press. Default = undefined
  onDayPress={day => {
    console.log('selected day', day);
  }}
  // Handler which gets executed on day long press. Default = undefined
  onDayLongPress={day => {
    console.log('selected day', day);
  }}
  // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
  monthFormat={'yyyy MM'}
  // Handler which gets executed when visible month changes in calendar. Default = undefined
  onMonthChange={month => {
    console.log('month changed', month);
  }}
  hidemonthNames ={false}
  // Hide month navigation arrows. Default = false
  hideArrows={true}
  // Replace default arrows with custom ones (direction can be 'left' or 'right')
  renderArrow={direction => <Arrow />}
  // Do not show days of other months in month page. Default = false
  hideExtraDays={true}
  // If hideArrows = false and hideExtraDays = false do not switch month when tapping on greyed out
  // day from another month that is visible in calendar page. Default = false
  disableMonthChange={true}
  // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday
  firstDay={0}
  // Hide day names. Default = false
  hideDayNames={false}
  // Show week numbers to the left. Default = false
  showWeekNumbers={false}
  // Handler which gets executed when press arrow icon left. It receive a callback can go back month
  onPressArrowLeft={subtractMonth => subtractMonth()}
  // Handler which gets executed when press arrow icon right. It receive a callback can go next month
  onPressArrowRight={addMonth => addMonth()}
  // Disable left arrow. Default = false
  disableArrowLeft={true}
  // Disable right arrow. Default = false
  disableArrowRight={true}
  // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
  disableAllTouchEventsForDisabledDays={true}
  // Replace default month and year title with custom one. the function receive a date as parameter
  renderHeader={date => {
    /*Return JSX*/
  }}
  // Enable the option to swipe between months. Default = false
  enableSwipeMonths={true}
  markingType={'custom'}//responsible for customizing text and style
  markedDates={{
    '2022-03-25': {selected: true, marked: true, selectedColor: 'green'},//when customer has service will be shoed as green
    '2022-03-22': {marked: true,},
    '2022-03-23': {selected: true, marked: true, dotColor: 'red', activeOpacity: 0, selectedColor: 'green', customStyles:{text:{color: 'black'}}}, // this one will be responsible for cancelled job by the customers
    '2022-03-27': {disabled: true, disableTouchEvent: true}//customer cant book when we will be booked fully
  }}
/>
            
        </View>
    )
}

export default Schedule;

const styles = StyleSheet.create({
    safe: {
        flex: 1,
    },
    itemContainer: {
        backgroundColor: 'white',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
})