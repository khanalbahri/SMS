import React from 'react'
import { View, Text } from 'react-native'

export default function OrderItems({ item }) {
    const { title, price } = item;
    return (
        <View style={{
            flexDirection: "row",
            justifyContent: "center",
            padding: 20,
            borderBottomWidth: 1,
            borderBottomColor: "#999"
        }}>
            <Text style={{
                fontWeight: "600",
                fontSize: 16,
            }}>{title}</Text>
            <Text style={{
                fontSize: 15,
                opacity: 0.7,
                marginLeft: 10
            }}>{price}</Text>
        </View>
    )
}
