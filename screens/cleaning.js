import React from 'react';
import { 
    View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, Animated
 } from 'react-native'

import { icons, COLORS, SIZES, } from '../constants'
import MyDatePicker from '../constants/mydatepicker';




const Cleaning = ({ route, navigation }) => {

const scrollX = new Animated.Value(0)
const [service, setService] = React.useState(null)
const [currentLocation, setCurrentLocation] = React.useState(null)
const [orderItems, setOrderItems] = React.useState([])

React.useEffect(() => {
    let { item, currentLocation } = route.params;
    setService(item)
    setCurrentLocation(currentLocation)
})

    function editOrder(action, menuId, price){
        let orderList = orderItems.slice()
        let item = orderList.filter(a => menuId == menuId)

        if (action == "+" ) {
            if (item.length > 0){
                let newQty = item[0].qty + 1
                item[0].qty = newQty
                item[0].total = item[0].qty * price
            }
            else {
                const newItem = {
                    menuId: menuId,
                    qty : 1,
                    price: price,
                    total: price
                }
                orderList.push(newItem)
            }
            setOrderItems(orderList)
        }
        else {
            if (item.length > 0 ) {
                if (item[0]?.qty > 0){
                    let newQty = item[0].qty - 1
                    item[0].qty = newQty
                    item[0].total = newQty * price
                }
            }
            setOrderItems(orderList)
        }

    }

    function getOrderQty(menuId) {
        let orderItem = orderItems.filter(a => a.menuId == menuId)

        if (orderItem.length > 0) {
            return orderItem[0].qty
        }
        return 0
    }

    function getBasketItemCount() {
        let itemCount = orderItems.reduce((a, b) => a + (b.qty || 0), 0)

        return itemCount
    }

    function sumOrder() {
        let total = orderItems.reduce((a, b) => a + (b.total || 0), 0)
    }

    function renderHeader() {
        return (
            <View style ={{flexDirection: 'row'}}>
                <TouchableOpacity
                    style = {{
                        width: 50,
                        paddingLeft: SIZES.padding * 2,
                        justifyContent: 'center'
                    }}
                        onPress = {() => navigation.goBack()} >

                            <Image
                                source = {icons.icon_1}
                                resizeMode = 'contain'
                                style = {{
                                    width: 30,
                                    height: 30,
                                    tintColor: 'darkgreen'
                                }} />
                        </TouchableOpacity>


                                {/*Service Name Section */}

                    <View style = {{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                            
                        <View
                            style = {{
                                height: 50,
                                alignItems: 'center',
                                justifyContent: 'center',
                                paddingHorizontal: SIZES.padding * 6,
                                borderRadius: SIZES.radius,
                                backgroundColor: COLORS.lightGray2
                            }}>
                            
                            <Text style = {{ color: 'darkgreen' }}>{service?.name}</Text>
                        </View>
                    </View>
            </View>
        )
    }

                {/*Animation Sroll Section */}

    function renderServiceInfo() {
        return (
            <Animated.ScrollView
                horizontal
                pagingEnabled
                scrollEventThrottle={16}
                snapToAlignment='center'
                showsHorizontalScrollIndicator={false}
                //onScroll
                onScroll = {Animated.event([
                    { nativeEvent: { contentOffset: { x: scrollX } } }
                ],  { useNativeDriver: false })}>
                    { service?.menu.map((item, index ) => (
                        <View
                            key={`menu-${index}`}
                            style = {{alignItems: 'center'}}>
                                <View style = {{ height: SIZES.height * 0.35}}>
                                    {/* Service Images */}
                                    
                                        <Image
                                            source = {item.photo}
                                            resizeMode = 'cover'
                                            style = {{ width: SIZES.width, height: '100%' }} />

                                    {/* Quantity of time */}
                                        <View style = {{
                                            position: 'absolute',
                                            bottom: -20,
                                            width: SIZES.width,
                                            height: 50,
                                            justifyContent: 'center',
                                            flexDirection: 'row'
                                        }}>
                                            <TouchableOpacity style = {{
                                                width: 50,
                                                backgroundColor: COLORS.white,
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                borderTopLeftRadius: 25,
                                                borderBottomLeftRadius: 25
                                            }}
                                            onPress={() => editOrder('-', item.menuId, item.price)}
                                            >
                                                <Text>-</Text>
                                            </TouchableOpacity> 

                                            <View style = {{
                                                width: 50,
                                                backgroundColor: COLORS.white,
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }}> <Text> 4 H </Text>
                                            </View>  
                                            
                                            <TouchableOpacity style = {{
                                                width: 50,
                                                backgroundColor: COLORS.white,
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                borderBottomLeftRadius: 25,
                                                borderTopLeftRadius: 25,
                                            }}
                                                onPress = {() => editOrder('+', item.menuId, item.price)}
                                            >
                                                 <Text>+</Text>   
                                            </TouchableOpacity>
                                        </View>     
                                </View>

                                {/* Description of Service */}
                                <View style ={{
                                    width: SIZES.width,
                                    alignItems: 'center',
                                    marginTop: 25,
                                    paddingHorizontal: SIZES.padding * 2
                                }}>
                                    <Text style ={{ marginVertical: 10, textAlign: 'center'}}>Rate</Text>
                                    <Text> {item.description}</Text>
                                </View>
                            </View>
                    ))}
                </Animated.ScrollView>
        )
    }    
    {/* Dots on each screens of Services */}
    function renderDots() {
        const dotPostion = Animated.divide(scrollX, SIZES.width)
        return (
        <View style = {{ height: 30}}>    
            <View style = {{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                height: SIZES.padding
            }}>
                {service?.menu.map((item, index ) => {
                    
                    const opacity = dotPostion.interpolate({
                        inputRange: [index - 1, index, index + 1],
                        outputRange: [0.3, 1, 0.3],
                        extrapolate: 'clamp'
                    })

                    const dotSize = dotPostion.interpolate({
                        inputRange: [index - 1, index, index + 1],
                        outputRange: [SIZES.base * 0.8, 10, SIZES.base * 0.8 ],
                        extrapolate: 'clamp'
                    })

                    const dotColor = dotPostion.interpolate({
                        inputRange: [index - 1, index, index + 1],
                        outputRange: [COLORS.darkgray, COLORS.primary, COLORS.darkgray],
                        extrapolate: 'clamp'
                    })

                    return (
                        <Animated.View 
                            key={`dot-${index}`}
                            opacity = {opacity}
                            style = {{
                                borderRadius: SIZES.radius,
                                marginHorizontal: 6,
                                width: dotSize,
                                height: dotSize,
                                backgroundColor: 'darkgreen'
                            }}
                        />
                    )
                })}
            </View>
        </View>    
        )
    }
    
    return (
        <SafeAreaView style = {styles.container}>
            {renderHeader()}
            {renderServiceInfo()}
        </SafeAreaView>
        
    )
}


const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray2 
    }
})

export default Cleaning;