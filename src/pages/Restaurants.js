import axios from "axios";
import React, {useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Restaurants = (props) => {

    const fetchData = () => {
        axios.post(
            "https://worldwide-restaurants.p.rapidapi.com/photos",
            {
                "language": "en_US",
		        "location_id": "15333482",
		        "currency": "USD",
		        "limit": "15"
            },
            {

                headers: {
                    "content-type": "application/json",
                    "x-rapidapi-host": "worldwide-restaurants.p.rapidapi.com",
		            "x-rapidapi-key": "b72718f6bbmshd83696b27c98b5dp135eedjsn1de4834d2e17"
                }
            }
        )
        .then(response => console.log(response))
        .catch(err => console.log(err))
    }


    useEffect(() => fetchData(), []);


    return (
        <View>
            <Text>Restaurants</Text>
        </View>
    )
}

export {Restaurants};

const styles = StyleSheet.create({})
