import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default function HeaderTabs({ activeTab, setActiveTab }) {

    return (
        <View style={{ flexDirection: "row", alignSelf: "center", marginTop: 2 }}>
            <HeaderButton text="Delivery" btnColor="black" textColor="white" activeTab={activeTab} setActiveTab={setActiveTab} />
            <HeaderButton text="Pickup" btnColor="white" textColor="black" activeTab={activeTab} setActiveTab={setActiveTab} />
        </View>
    )
}



const HeaderButton = (props) => (
    <TouchableOpacity style={{
        backgroundColor: props.activeTab === props.text ? "black" : "white",
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 30,
    }}
        activeOpacity={0.8}
        onPress={() => props.setActiveTab(props.text)}
    >
        <View>
            <Text style={{
                color: props.activeTab === props.text ? "white" : "black",
                fontWeight: "900"
            }}>{props.text}</Text>
        </View>
    </TouchableOpacity>
)