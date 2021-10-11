import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'
// import firebase from '../../../firebase';
import firestore from '@react-native-firebase/firestore';
import OrderItems from './OrderItems';


export default function ViewCart({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false);
    const { items, resturentName } = useSelector((state) => state.cartReducer.selectedItems);
    const total = items.map((item) => Number(item.price.replace("$", ""))).reduce((prev, curr) => prev + curr, 0);
    const totalUSD = total.toLocaleString('en', {
        style: "currency",
        currency: "USD",
    })

    const styles = StyleSheet.create({
        modalContainer: {
            flex: 1,
            justifyContent: "flex-end",
            backgroundColor: "rgba(0,0,0,0,7)",
        },
        modalCheckoutContent: {
            backgroundColor: "white",
            padding: 16,
            height: 500,
            borderWidth: 1,
        },
        resturentName: {
            textAlign: "center",
            fontWeight: "600",
            fontSize: 18,
            marginBottom: 10
        },
        subTotalContainer: {
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 15,
        },
        subTotalText: {
            textAlign: "left",
            fontWeight: "600",
            fontSize: 15,
            marginBottom: 10,
        }
    })

    const addOrderToFirebase = async () => {
        const db = firestore();
        console.log("add");
        await db.collection("orders").add({
            items: items,
            resturentName: resturentName,
        }).then(() => {
            console.log('data added!');
        }).catch((error) => {
            console.log(error);
        })
        // setModalVisible(false);
        // console.log("Record added");
        // navigation.navigate("OrderCompleted");
    }

    const checkoutModalContent = () => {
        return (
            <View style={styles.modalContainer}>
                <View style={styles.modalCheckoutContent}>
                    <Text style={styles.resturentName}>{resturentName}</Text>
                    {items.map((item, index) => (
                        <OrderItems key={index} item={item} />
                    ))}
                    <View style={styles.subTotalContainer}>
                        <Text style={styles.subTotalContainer}>Subtotal</Text>
                        <Text style={styles.subTotalContainer}>{totalUSD}</Text>
                        <View style={{ flexDirection: "row", justifyContent: "center", marginLeft: -30 }}>
                            <TouchableOpacity style={{
                                marginTop: 20,
                                backgroundColor: "black",
                                alignItems: "center",
                                padding: 13,
                                borderRadius: 30,
                                width: 300,
                                position: "relative",
                                marginTop: 70,
                            }}
                                onPress={() => addOrderToFirebase()}
                            >
                                <Text style={{ color: "white", fontSize: 20 }}>Checkout</Text>
                                <Text style={{ position: "absolute", right: 20, color: "white", fontSize: 15, top: 17 }}>{total ? totalUSD : ""}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        )
    }

    return (
        <>
            <Modal animationType="slide"
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
                transparent={true}>
                {checkoutModalContent()}
            </Modal>
            {total ? (

                <View style={{
                    flex: 1,
                    flexDirection: "row",
                    alignItems: "center",
                    position: "absolute",
                    justifyContent: "center",
                    top: 650,
                    zIndex: 999,
                }}>
                    <View style={{ flexDirection: "row", justifyContent: "center", width: "100%" }}>
                        <TouchableOpacity activeOpacity={0.7} style={{
                            marginTop: 20, backgroundColor: "black",
                            flexDirection: "row",
                            justifyContent: "center",
                            padding: 15, borderRadius: 30, width: 300,
                            position: "relative"
                        }}
                            onPress={() => setModalVisible(true)}
                        >
                            <Text style={{ color: "white", fontSize: 20, marginRight: 30 }}>VIEWCART</Text>
                            <Text style={{ color: "white", fontSize: 20 }}>{totalUSD}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            ) : (
                <>
                </>
            )}
        </>
    )
}
