import React from 'react'
import { StyleSheet, View, SafeAreaView, StatusBar, ScrollView } from 'react-native'
import Header from '../component/Header'
import InputBefore from '../component/InputBefore'

const Before = () => {
    return (
        <View style={styles.container}>
            <Header title = 'ก่อนดื่มแอลกอฮอล์' />
            <SafeAreaView>
                <ScrollView style={styles.scrollView}>
                    <InputBefore
                        title = 'รับประทานอาหารที่มีไขมันสูง'
                        detial = 'เพื่อช่วยเคลือบกระเพาะอาหารไม่ให้แอลกอฮอล์ซึมผ่านเข้าสู่อวัยวะต่าง ๆ ได้เร็วเกินไป เช่น เค้ก นม ขนมหวาน เนย เป็นต้น' 
                        picture = {require('../Picture/cake.png')}/>

                    <InputBefore 
                        title = 'รับประทานอาหารประเภทโปรตีน'
                        detial = 'เช่น เนื้อปลา ไก่ ไข่ ถั่ว นม' 
                        picture = {require('../Picture/protein.png')}/>

                    <View style={{marginTop:20}}/>

                    <InputBefore 
                        title = 'รับประทานผักที่มีไฟเบอร์สูง'
                        detial = 'เช่น  กะหล่ำปลี บล็อกโคลี่ เป็นต้น' 
                        picture = {require('../Picture/Cabbage.png')}/>

                    <InputBefore 
                        title = 'Friend Of Drinker (FOD)'
                        detial = 'ช่วยบำรุงและเพิ่มประสิทธิภาพในการทำงานของตับ ในการ กำจัดสารพิษต่างๆที่เกิดจากการดื่มแอลกอฮอล์' 
                        picture = {require('../Picture/FOD.png')}/> 

                    <InputBefore 
                        title = 'ผลิตภัณฑ์เสริมอาหาร'
                        detial = 'เช่น วิตามินบี 1 และ บี6 ลดอาการมึนงง เวียนศีรษะ' 
                        picture = {require('../Picture/vitamin.png')}/>       

                    <View style={{marginBottom:100}} />

                </ScrollView>
            </SafeAreaView>
        </View>
    )
}

export default Before

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    scrollView: {
        marginHorizontal: 20,
      },
})
