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
            icon: icons.cleaning_icon,
        },
        {
            id: 2,
            name: "PREMIUM",
            icon: icons.premium_cleaning_icon,
        },
        {
            id: 3,
            name: "DEEP",
            icon: icons.deep_cleaning_icon,
        },
        {
            id: 4,
            name: "MAINT",
            icon: icons.maintenance_icon
        }
    ]

    const servicesData = [
        {
            id: 1,
            name: "Home Cleaning",
            categories: [1],
            photo: images.image_2,
            duration: "MINIMUM OF SERVICE 3 HOURS",

            menu: [
                {
                    menuID: 1,
                    name: "Home Cleaning",
                    photo: images.image_1,
                    description: "Best home cleaning in DUBAI",
                    price: 34,

                },
                {
                    menuID: 2,
                    name: "Primo Turbo Cleaning",
                    photo: images.image_2,
                    description: "Best home cleaning in DUBAI",
                    price: 37
                }
            ]
        },
        
        {
            id: 2,
            name: "Premium Cleaning",
            categories: [2],
            photo: images.image_2,
            duration: "MINIMUM OF SERVICE 3 HOURS",
            
            menu: [
                {
                    menuId: 4,
                    name: "Premium Cleaning",
                    photo: images.image_2,
                    description: "Best home cleaning in DUBAI",
                    price: 70
                }

            ]
        },
        {
            id: 3,
            name: "Deep Cleaning",
            categories: [3],
            photo: images.image_2,
            duration: "MINIMUM OF SERVICE 5 HOURS",
            
            menu: [
                {
                    menuId: 5,
                    name: "Sanitazation",
                    photo: images.image_2,
                    description: "Best home cleaning in DUBAI",
                    price: 550
                }

            ]
        },
        {
            id: 4,
            name: "Maintenance",
            categories: [4],
            photo: images.image_2,
            duration: "MINIMUM OF SERVICE 7 HOURS",
            
            menu: [
                {
                    menuId: 3,
                    name: "AC Duct Cleaning",
                    photo: images.image_2,
                    description: "Best home cleaning in DUBAI",
                    price: 700
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

   //Top Header if I will need it unless it is here usless
    function renderHeader() {
        return (
            /* Main Top Left */
            <View style = {{flexDirection: 'row', height: 50}}>
                <TouchableOpacity style = {{
                    width: 50,
                    paddingLeft: SIZES.padding,
                    justifyContent: 'center',
                }}>
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
                            width: '70%',
                            height: '100%',
                            backgroundColor: COLORS.white,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: SIZES.radius
                        }}>
                            <Text style = {{color: 'green'}}>PRIMO</Text>
                        </View>
                </View>

                {/* Main Top Right */}
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
                                borderRadius: 25,
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
        return (
            <View style = {{ padding: SIZES.padding * 2 }}>
                {/* <Text > Main Cleaning </Text>
                    <Text> Categories </Text> */}

                <FlatList
                    data = {categories}
                    horizontal
                    showsHorizontalScrollIndicator = {false}
                    keyExtractor = {item => `${item.id}`}
                    renderItem = { renderItem }
                    contentContainerStyle = {{ paddingVertical: SIZES.padding }} />
            </View>
        )
    }

    function renderServicesList() {

        const renderItem = ({item}) => (
            <TouchableOpacity
                style = {{marginBottom: SIZES.padding * 2 }}
                //onPressNavigate to list
                onPress = { () => navigation.navigate('Cleaning', {item})}>

                         {/* Image */}

                <View  style = {{ marginBottom: SIZES.padding }} >

                <Image source = {item.photo}
                resizeMode = 'cover'
                style = {{
                    width: '100%',
                    height: 200,
                    borderRadius: SIZES.radius }} />
                
                <View 
                    style = {{
                        position: 'absolute',
                        bottom: 0,
                        height: 50,
                        width: SIZES.width * 0.3,
                        backgroundColor: COLORS.white,
                        borderTopRightRadius: SIZES.radius,
                        borderBottomLeftRadius: SIZES.radius,
                        alignItems: 'center',
                        justifyContent: 'center',
                        ...styles.shadow
                    }}>
                        <Text> { item.duration } </Text>
                    </View>
                </View>

                {/* Services Info */}

                <Text> { item.name }</Text>

                <View style = {{
                    marginTop: SIZES.padding,
                    flexDirection: 'row'
                }}>

                    {/* Rating */}

                    {/* Categories */}

                <View style = {{ flexDirection: 'row', marginLeft: 10 }}>
                        {
                            item.categories.map((categoryId) => {
                                return (
                                    <View style = {{ flexDirection: 'row'}}
                                        key = {categoryId}>
                                    <Text>{getCategoryNameById(categoryId)}</Text>
                                    <Text> . </Text>
                                    </View>
                                )
                            })
                        }
                     </View>
                </View>
            </TouchableOpacity>
        )

        return (
            <FlatList
                data = {services}
                keyExtractor = {item => `${item.id}`}
                renderItem = {renderItem}
                contentContainerStyle = {{
                    paddingHorizontal: SIZES.padding * 2,
                    paddingBottom: 30
                }} />
        )
    }


        return (
            <SafeAreaView style = {styles.container}>
                {/*{renderHeader()}*/}
                {renderMainCategories()}
                {renderServicesList()}
            </SafeAreaView>
        )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray3
    },
    shadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
    }
})
export default Home;