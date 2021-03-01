import React from 'react';
import {Component} from 'react';
import {ScrollView, Text, Image, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { Container, Header, Title,Button, Left, Body, Icon } from 'native-base';

export default class Before extends Component {
    render() {

        return(

        <Container>

        <Header style={{backgroundColor : '#000000'}}>
          <Left>
            <Button transparent
            onPress={() =>this.props.navigation.navigate("Advice")}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body style={{marginLeft:-20}}>
            <Title style={{fontSize:28,fontWeight:'bold',}}>ก่อนดื่มแอลกอฮอล์</Title>
          </Body>
        </Header>      
 
       
        <SafeAreaView 
        style={{backgroundColor: '#000000',
                    flex:1,paddingTop: StatusBar.currentHeight,}}>

        <ScrollView style={styles.scrollView}>
        <Text style={{color: '#FBD343',fontSize:20,marginLeft:15}}>รับประทานอาหารที่มีไขมันสูง</Text>
        <Text style={{color: '#ffffff',fontSize:18,marginLeft:15}}>เพื่อช่วยเคลือบกระเพาะอาหารไม่ให้แอลกอฮอล์ซึมผ่านเข้าสู่อวัยวะต่าง ๆ ได้เร็วเกินไป 
            เช่น หมูทอด เค้ก นม ขนมหวาน เนย</Text>
        <Image 
            source={require('../icon/cake.png')}
            style={{
            marginTop:15,
            marginLeft:90,
            height:150,
            width:200,
            }}/>
         <Text style={{color: '#FBD343',fontSize:20,marginLeft:15,marginTop:30}}>รับประทานอาหารประเภทโปรตีน</Text>
        <Text style={{color: '#ffffff',fontSize:18,marginLeft:15}}>เช่น เนื้อปลา ไก่ ไข่ ถั่ว นม</Text>
        <Image 
            source={require('../icon/protein.png')}
            style={{
            marginTop:15,
            marginLeft:70,
            height:180,
            width:250,
            }}/>
         <Text style={{color: '#FBD343',fontSize:20,marginLeft:15,marginTop:30}}>รับประทานผักที่มีไฟเบอร์สูง</Text>
        <Text style={{color: '#ffffff',fontSize:18,marginLeft:15}}>เช่น  กะหล่ำปลี บล็อกโคลี่</Text>
        <Image 
            source={require('../icon/Cabbage.png')}
            style={{
            marginTop:15,
            marginLeft:60,
            height:170,
            width:240,
            }}/>
         <Text style={{color: '#FBD343',fontSize:20,marginLeft:15,marginTop:30}}>Friend Of Drinker (FOD) </Text>
        <Text style={{color: '#ffffff',fontSize:18,marginLeft:15}}>ช่วยบำรุงและเพิ่มประสิทธิภาพในการทำงานของตับ ในการ กำจัดสารพิษต่างๆที่เกิดจากการ
            ดื่มแอลกอฮอล์</Text>
        <Image 
            source={require('../icon/FOD.png')}
            style={{
            marginTop:15,
            marginLeft:70,
            height:180,
            width:200,
            }}/>
         <Text style={{color: '#FBD343',fontSize:20,marginLeft:15,marginTop:30}}>ผลิตภัณฑ์เสริมอาหาร</Text>
        <Text style={{color: '#ffffff',fontSize:18,marginLeft:15}}>วิตามินบี 1 และ บี6 ลดอาการมึนงง เวียนศีรษะ</Text>
        <Image 
            source={require('../icon/Vitamin.png')}
            style={{
            marginTop:15,
            marginLeft:100,
            height:180,
            width:180,
            }}/>
         
      </ScrollView>

        </SafeAreaView>


            </Container>

        );
    }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
    color: 'white'
  },
});
