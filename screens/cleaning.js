import React from 'react';
import { 
    View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, Animated
 } from 'react-native'

import { icons, COLORS, SIZES, } from '../constants'
import MyDatePicker from '../constants/mydatepicker';




const Cleaning = ({ route, navigation }) => {
    

    return (
        
        <MyDatePicker />
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray2
    }
})

export default Cleaning;