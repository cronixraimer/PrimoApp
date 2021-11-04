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

    function renderHeader() {
        return (
            /* Main Top Left */
            <View style = {{flexDirection: 'row', height: 50}}>
                <TouchableOpacity style = {{
                    width: 50,
                    paddingLeft: SIZES.padding,
                    justifyContent: 'center',
                }} onPress = {() => navigation.navigate('Home')}>
                    <Image
                        source = {icons.maintenance_icon}
                        resizeMode = 'contain'
                        style = {{
                            width: 50,
                            height: 50,
                            borderRadius: 50/2
                        }} />
                </TouchableOpacity>

                <View style = {{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <View
                        style = {{
                            width: '70',
                            height: '100%',
                            backgroundColor: COLORS.white,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: SIZES.radius
                        }}>
                            <Text style = {{color: 'green'}}>PRIMO</Text>
                        </View>
                </View>

                {/* Main Top Left */}
                <TouchableOpacity
                    style = {{
                        width: 50,
                        paddingRight: SIZES.padding * 6,
                        justifyContent: 'center'
                    }} onPress = {() => navigation.navigate('PlaceOrder')}>
                        <Image
                            source = {icons.premium_cleaning_icon}
                            resizeMode = 'contain'
                            style = {{
                                width: 50,
                                height: 50,
                                borderRadius: 50/2
                            }} />
                    </TouchableOpacity>
            </View>
        )
    }

    function renderMainCategories() {
        const renderItem = ({item}) => {
            return (
                <TouchableOpacity
                    style = {{
                        padding: SIZES.padding,
                        paddingBottom: SIZES.padding * 2,
                        backgroundColor: (selectedCategory?.id == item.id) ? COLORS.darkgray : COLORS.white,
                        borderRadius: SIZES.radius,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: SIZES.padding,
                        ...StyleSheet.shadow
                    }} onPress = {() => onSelectCategory(item)} >

                        <View
                            style = {{
                                width: 50,
                                height: 50,
                                borderRadius: 50,
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Image
                                    source = {item.icon}
                                    resizeMode = 'contain'
                                    style = {{
                                        width: 50,
                                        height: 50,
                                        borderRadius: 50 / 2
                                    }} />
                            </View>

                        <Text 
                            style = {{
                                marginTop: SIZES.padding,
                                color: (selectedCategory?.id == item.id) ? COLORS.white : COLORS.black
                            }} >
                                {item.name}
                            </Text>
                    </TouchableOpacity>
            )
        }
    }

}

export default Home;