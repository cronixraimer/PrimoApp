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

    const serviceData = [
        {
            id: 1,
            categories: [1],
            photo: images.image_1,
            duration: "MINIMUM OF SERVICE 3 HOURS",

            menu: [
                {
                    menuID: 1,
                    name: "Home Cleaning",
                    photo: images.image_1,
                    description: "Best home cleaning in DUBAI",
                    price: 34
                },
                {
                    menuID: 2,
                    name: "Primo Turbo Cleaning",
                    photo: images.image_2,
                    description: "Best home cleaning in DUBAI",
                    price: 37
                }
            ]
        }
    ]

    const [categories, setCategories] = React.useState(categoryDepartments);
    const [selectedCategory, setSelectedCategory] = React.useState(null);
    const [services, setServices] = React.useState(servicesData)
   
    function getCategoryNameById(id) {
        let category = categories.filter(a => a.id == id)

        if (category.length > 0)
            return category[0].name

        return ""
    }

    function onSelectCategory(category) {
        let serviceList = servicesData.filter(a => a.categories.includes(category.id))
        
        setServices(serviceList)

        setSelectedCategory(category)
    }

    
}

export default Home;