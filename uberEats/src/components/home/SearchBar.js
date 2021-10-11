import React from 'react'
import { View, Text } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function SearchBar({ setCity }) {
    return (
        <View style={{ marginTop: 15, flexDirection: "row" }}>
            <GooglePlacesAutocomplete
                placeholder="Search"
                query={{ key: "AIzaSyDPD_hRkgUrOYdMYdfWgLQWszz_wCj6_-g" }}
                onPress={(data, details = null) => {
                    const city = data.description.split(",")[0];
                    setCity(city)
                }}
                styles={{
                    textInput: {
                        backgroundColor: '#eee',
                        borderRadius: 20,
                        fontWeight: "700",
                        marginTop: 7,
                    },
                    textInputContainer: {
                        backgroundColor: "#eee",
                        borderRadius: 50,
                        flexDirection: "row",
                        alignItems: "center",
                        marginRight: 10
                    }
                }}
                renderLeftButton={() => (
                    <View style={{ marginLeft: 16 }}>
                        <Ionicons name="location-sharp" size={24} />
                    </View>
                )}
                renderRightButton={() => (
                    <View style={{
                        flexDirection: "row",
                        marginRight: 8,
                        backgroundColor: "white",
                        padding: 9,
                        borderRadius: 30,
                        alignItems: "center",
                    }}>
                        <AntDesign name="clockcircle" size={11} style={{ marginRight: 6 }} />
                        <Text>Search</Text>
                    </View>
                )}
            />
        </View>
    )
}
