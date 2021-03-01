import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const nextLaw = ({line1,line2,line3,line4,line5,line6,line7,picture}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{line1}</Text>
            <Text style={styles.text}>{line2}</Text>
            <Text style={styles.text}>{line3}</Text>
            <Text style={styles.text}>{line4}</Text>
            <Text style={styles.text}>{line5}</Text>
            <Text style={styles.text}>{line6}</Text>
            <Text style={styles.text}>{line7}</Text>

            <Image  style={styles.picture} source={picture}/>
        </View>
    )
}

export default nextLaw

const styles = StyleSheet.create({
    container: {
       paddingTop: 20,
       alignContent: 'center',
       alignItems: 'center'
    },
    text: {
        color: '#FFFFFF',
        fontSize: 20,
        textAlign: 'center'  
    },
    subtext: {
        color: '#FFFFFF',
        fontSize: 20,
        textAlign: 'left'  
    },
    picture: {
        height: 120,
        width: 120,
        marginTop: 40
    }
    
})
