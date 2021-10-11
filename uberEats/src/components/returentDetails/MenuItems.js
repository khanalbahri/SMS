import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import { Divider } from 'react-native-elements';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch, useSelector } from 'react-redux';
import { ADD_TO_CART } from '../../../redux/constants';


export const foods = [
    {
        title: "khan baba hotel",
        descirption: "This the description for it do you want to have it tasted",
        image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
        price: "$5",
    },
    {
        title: "nana hotel",
        descirption: "This the description for it do you want to have it tasted",
        image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
        price: "$5",
    },
    {
        title: "kaka da hotel",
        descirption: "This the description for it do you want to have it tasted",
        image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
        price: "$5",
    },
    {
        title: "bro the hotel",
        descirption: "This the description for it do you want to have it tasted",
        image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
        price: "$5",
    },
    {
        title: "bro the hotel",
        descirption: "This the description for it do you want to have it tasted",
        image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
        price: "$5",
    },
    {
        title: "bro the hotel",
        descirption: "This the description for it do you want to have it tasted",
        image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
        price: "$5",
    },

]



export default function MenuItems({ resturentName }) {
    const dispatch = useDispatch();
    const selectItem = (item, checkBoxValue) => {
        dispatch({
            type: ADD_TO_CART,
            payload: {
                ...item,
                resturentName: resturentName,
                checkBoxValue: checkBoxValue
            }
        })
    }
    const cartItems = useSelector((state) => state.cartReducer.selectedItems.items);

    const isFoodInCart = (food, cartItems) => Boolean(cartItems.find((item) => item.title !== food.title));


    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {foods.map((food, index) => (
                <View key={index}>
                    <View style={styles.menuItemStyle}>
                        <BouncyCheckbox
                            iconStyle={{ borderColor: "lightgrey", borderRadius: 0 }}
                            onPress={(checkBoxValue) => selectItem(food, checkBoxValue)}
                            isChecked={isFoodInCart(food, cartItems)}
                        />
                        <FoodInfo food={food} />
                        <FoodImage food={food} />
                    </View>
                    <Divider width={1} orientation="vertical" style={{ marginHorizontal: 20 }} />
                </View>
            ))}
        </ScrollView>
    )
}

const FoodInfo = (props) => (
    <View style={{ width: 240, justifyContent: "space-evenly" }}>
        <Text style={styles.titleStyle}>{props.food.title}</Text>
        <Text>{props.food.descirption}</Text>
        <Text>{props.food.price}</Text>
    </View>
)


const styles = StyleSheet.create({
    menuItemStyle: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 20
    },
    titleStyle: {
        fontSize: 19,
        fontWeight: "600",
        color: "black"
    }
})

const FoodImage = (props) => (
    <View>
        <Image style={{ width: 100, height: 100, borderRadius: 8 }} source={{ uri: props.food.image }} />
    </View>
)