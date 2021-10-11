import React from 'react'
import { View, Text } from 'react-native'
import { Divider } from 'react-native-elements'
import About from '../components/returentDetails/About'
import MenuItems from '../components/returentDetails/MenuItems'
import ViewCart from '../components/returentDetails/ViewCart'

export default function ResturentDetail({ route, navigation }) {
    return (
        <View>
            <About route={route} />
            <Divider width={1} style={{ marginVertical: 20 }} />
            <MenuItems  resturentName={route.params.name}/>
            <ViewCart navigation={navigation} resturentName={route.params.name} />
        </View>
    )
}
