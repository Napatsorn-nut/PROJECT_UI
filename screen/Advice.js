import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Header from '../component/Header'
import ButtonAdvice from '../component/ButtonAdvice'

const Advice = () => {
    return (
        <View style={styles.container}>
            <Header title='คำแนะนำ' />
            <View>
                <ButtonAdvice 
                title= 'ก่อนดื่มแอลกอฮอล์'
                text= 'ก่อนดื่มแอลกอฮอล์' 
                text1= 'อาหารและผลิตภัณฑ์ต่าง ๆ'/>

                <View style={styles.line}/>

                <ButtonAdvice 
                title= 'หลังดื่มแอลกอฮอล์'
                text= 'หลังดื่มแอลกอฮอล์' 
                text1= 'อาหาร เครื่องดื่ม และกิจกรรมต่าง ๆ'/>

            </View>
        </View>
    )
}

export default Advice

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'black',
    },
    line: {
        backgroundColor: '#fff',
        marginTop: 20,
        width: 500,
        height: 2
    }

})