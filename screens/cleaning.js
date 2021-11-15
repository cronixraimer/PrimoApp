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

    function getOrderQty(menyId) {
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