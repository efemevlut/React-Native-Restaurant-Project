import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const RestaurantItem = ({item}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{item.name}</Text>
        </View>
    )
}

export {RestaurantItem};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        margin: 5,
        borderRadius: 7,
    },
    text: {
        fontSize: 14,
        fontWeight: "300",
    }
})
