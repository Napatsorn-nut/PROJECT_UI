import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
 
const styleInput = ({title,detial,picture,title1,detial1,picture1}) => {
    return (
        <View style={styles.container}>

            <Text style={styles.text}>{title}</Text>
            <Text style={styles.subtext}>{detial}</Text>
            <Image source={picture} style={styles.picture}/>

            <Text style={styles.text}>{title1}</Text>
            <Text style={styles.subtext}>{detial1}</Text>
            <Image source={picture1} style={styles.picture}/>

        </View>
    )
}

export default styleInput

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        margin: 20,
        flex:1,
        width:800
    },
    text: {
        color: '#FBD343',
        fontSize:20,
        marginLeft:30,
        marginTop:20
    },
    subtext: {
        color: '#fff',
        fontSize:18,
        marginLeft:30,
    },
    picture: {
        marginTop:15,
        marginLeft:100,
        height:140,
        width:200,
    },
    picture1: {
        marginTop:15,
        marginLeft:100,
        height:140,
        width:200,
    }
})
