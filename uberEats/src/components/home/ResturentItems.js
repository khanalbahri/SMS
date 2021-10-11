import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

export const localResturents = [
    {
        name: "khan baba hotel",
        image_url: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
        categories: ["cafe", "bar"],
        price: "$5",
        reviews: 1223,
        rating: 3.4
    },
    {
        name: "jano ka hotel",
        image_url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHJlc3RhdXJhbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
        categories: ["cafe", "bar"],
        price: "$5",
        reviews: 1223,
        rating: 3.3
    },
    {
        name: "Za mana hotel",
        image_url: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
        categories: ["cafe", "bar"],
        price: "$5",
        reviews: 1223,
        rating: 4.5
    },
]


const ResturentItems = ({ navigation, ...props }) => {
    return (
        <>
            {props?.resturentData?.map((resturent, index) => (
                <TouchableOpacity
                    onPress={() => navigation.navigate("ResturentDetail",{
                        name: resturent.name,
                        image: resturent.image_url,
                        price: resturent.price,
                        reviews: resturent.review_count,
                        rating: resturent.rating,
                        categories: resturent.categories,
                    })}
                    key={index} activeOpacity={0.9} style={{ marginBottom: 30 }}>
                    <View style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}>
                        <ResturentImage image={resturent.image_url} />
                        <ResturentInfo name={resturent.name} rating={resturent.rating} />
                    </View>
                </TouchableOpacity>
            ))}
        </>
    )
}

export default ResturentItems;


const ResturentImage = (props) => (
    <>
        <Image
            source={{ uri: props.image }}
            style={{ width: "100%", height: 180 }}
        />
        <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
            <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
        </TouchableOpacity>
    </>
)

const ResturentInfo = (props) => (
    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
        <View>
            <Text style={{ fontSize: 13, fontWeight: "bold" }}>{props.name}</Text>
            <Text style={{ fontSize: 13, color: "grey" }}>35=34 * min</Text>
        </View>
        <View style={{ backgroundColor: "#eee", height: 30, width: 30, alignItems: "center", borderRadius: 15, justifyContent: "center" }}>
            <Text >{props.rating}</Text>
        </View>
    </View>
)