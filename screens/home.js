import React from 'react';
import { View, 
         Text,
         StyleSheet,
         SafeAreaView,
         TouchableOpacity,
         Image,
         FlatList, 
        } from 'react-native'

import { icons, images, SIZES, FONTS, COLORS } from '../constants'

const Home = ({navigation}) => {

    //Array of Departments
    const categoryDepartments = [

        {
            id: 1,
            name: "CLEANING",
            icons: icons.cleaning_icon,
        },
        {
            id: 2,
            name: "PREMIUM",
            icons: icons.premium_cleaning_icon,
        },
        {
            id: 3,
            name: "DEEP",
            icons: icons.deep_cleaning_icon,
        },
        {
            id: 4,
            name: "MAINT",
            icons: icons.maintenance_icon
        }
    ]

    return(
        <View>
            <Text> Home </Text>
        </View>
    )
}

export default Home;