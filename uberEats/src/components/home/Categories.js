import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native';

const items = [
    {
        image: require("../../../assets/images/shopping-bag.png"),
        text: "Pick up",
    },
    {
        image: require("../../../assets/images/shopping-bag.png"),
        text: "Fast food",
    },
    {
        image: require("../../../assets/images/shopping-bag.png"),
        text: "hard food",
    },
    {
        image: require("../../../assets/images/shopping-bag.png"),
        text: "nuteral food",
    },
    {
        image: require("../../../assets/images/shopping-bag.png"),
        text: "Bakery items",
    },
    {
        image: require("../../../assets/images/shopping-bag.png"),
        text: "donalds items",
    }
]

export default function Categories() {
    return (
        <View style={{ marginTop: 5, backgroundColor: "#fff", paddingVertical: 10, paddingHorizontal: 20 }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {items.map((item, index) => (
                    <View style={{ alignItems: "center", marginRight: 30 }} key={index}>
                        <Image source={item.image} style={{
                            width: 50,
                            height: 40,
                            resizeMode: "contain",
                        }} />
                        <Text style={{ fontSize: 13, fontWeight: "900" }}>{item.text}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}
