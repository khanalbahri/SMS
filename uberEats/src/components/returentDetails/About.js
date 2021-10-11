import React from 'react'
import { View, Text, Image } from 'react-native';

// const yelpResturentInfo = {
//     name: "khan baba hotel",
//     image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
//     categories: [{ title: "india" }, { title: "afghani" }, { title: "bangali" }],
//     price: "$5",
//     reviews: 1223,
//     rating: 3.4
// }

// const { name, image, price, reviews, rating, categories } = yelpResturentInfo;



export default function About(props) {
    const { name, image, price, reviews, rating, categories } = props.route.params;
    const formattedCategories = categories.map((cat) => cat.title).join(" * ");
    const description = `${formattedCategories} ${price ? "*" + price : ""} * (${rating}) * (${reviews}) `;

    return (
        <View>
            <ResturentImage image={image} />
            <ResturentName name={name} />
            <ResturentDescription description={description} />
        </View>
    )
}


const ResturentImage = (props) => (
    <Image source={{ uri: props.image }} style={{
        width: "100%",
        height: 180,
    }} />
)

const ResturentName = (props) => (
    <Text style={{ fontSize: 29, color: "black", fontWeight: "600", marginTop: 10, marginHorizontal: 15 }}>{props.name}</Text>
)

const ResturentDescription = (props) => (
    <Text style={{ marginTop: 10, marginHorizontal: 15, fontWeight: "400", fontSize: 15 }}>{props.description}</Text>
)