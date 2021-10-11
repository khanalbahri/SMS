import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Divider } from 'react-native-elements'
import BottomTabs from '../components/home/BottomTabs'
import Categories from '../components/home/Categories'
import HeaderTabs from '../components/home/HeaderTabs'
import ResturentItems, { localResturents } from '../components/home/ResturentItems'
import SearchBar from '../components/home/SearchBar'

const YELP_API_KEY = "-dDkRdKb-Pxvf2R9t0VD92r56Qcr5buW-h3gWfyxusV0tOIGNOhHflL4oU3yEMEyVouYC-S68X-csqNdXtYpWTOGr-2Yl58MHaBS_GzunRzfx1Frf1cXwKiwo_dbYXYx";

export default function Home({ navigation }) {
    const [resturentData, setResturentData] = useState(localResturents);
    const [city, setCity] = useState("north-india-restaurant-san-francisco");
    const [activeTab, setActiveTab] = useState("Delivery");


    const getResturentsFromYelp = () => {
        const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=resturents&location=${city}`;

        const apiOptions = {
            headers: {
                Authorization: `Bearer ${YELP_API_KEY}`,
            }
        }

        return fetch(yelpUrl, apiOptions).then((res) => res.json()).then(json => setResturentData(json.businesses.filter((business) => business.transactions.includes(activeTab.toLowerCase()))))
    }

    useEffect(() => {
        getResturentsFromYelp();
    }, [city, activeTab])

    return (
        <>
            <View style={{ backgroundColor: "white", padding: 15 }}>
                <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
                <SearchBar setCity={setCity} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
                <ResturentItems resturentData={resturentData} navigation={navigation} />
            </ScrollView>
            <Divider width={1} />
            <BottomTabs />
        </>
    )
}
