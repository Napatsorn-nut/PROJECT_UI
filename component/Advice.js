import React from 'react';
import {Component} from 'react';
import {
    Text,
    View,
} from 'react-native';
import { Container, Header, Title, Content, Button, Left, Body, Icon } from 'native-base';

export default class Advice extends Component {
    render() {

        return(

        <Container>

        <Header style={{backgroundColor : '#000000'}}>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body style={{marginLeft:50}}>
            <Title style={{fontSize:28,fontWeight:'bold',}}>คำแนะนำ</Title>
          </Body>
        </Header>      
 
        <View style={{backgroundColor: '#ffffff',width:2,height:2}}/>
        <View 
                    style={{
                    backgroundColor: '#000000',
                    flex:1,
                    alignItems:'center',
                    
                }}>

       
        <Content  >
        
          <Button rounded warning
         onPress={() =>this.props.navigation.navigate("Before")}
        style={{marginTop: 20,height:70,width:250,marginLeft:20}}>
            <Text style={{fontSize:25,marginLeft:25,}}>ก่อนดื่มแอลกอฮอล์</Text>
          </Button>
          <View style={{marginTop:10}}>
            <Text style={{color: 'white',marginLeft:30,fontSize:18}}>คำแนะนำที่ควรทำก่อนดื่มแอลกอฮอล์ เพื่อเพิ่ม </Text>
            <Text style={{color: 'white',marginLeft:20,fontSize:18}}>ประสิทธิภาพให้ร่างกายสามารถรับมือและกำจัด</Text>
            <Text style={{color: 'white',marginLeft:20,fontSize:18}}>ปริมาณแอลกอฮอล์ให้ดีมากยิ่งขึ้น ซึ่งจะประกอบ</Text>
            <Text style={{color: 'white',marginLeft:20,fontSize:18}}>ด้วยอาหารและผลิตภัณฑ์ต่าง ๆ </Text>
            <Text style={{color: 'red',marginLeft:20,fontSize:18,marginTop:20}}>หมายเหตุ : โปรดใช้วิจารณญาณในการอ่าน</Text>
            


          </View>
         
          <View style={{backgroundColor: '#ffffff',width:500,height:2,marginTop:20}}/>
         
          <Button rounded warning 
          onPress={() =>this.props.navigation.navigate("After")}
          style={{marginTop: 20,height:70,width:250,marginLeft:20}}>
            <Text style={{fontSize:25,marginLeft:25,}}>หลังดื่มแอลกอฮอล์</Text>
          </Button>
          
          <View style={{marginTop:10}}>
            <Text style={{color: 'white',marginLeft:30,fontSize:18}}>คำแนะนำที่ควรทำหลังดื่มแอลกอฮอล์ เพื่อเพิ่ม </Text>
            <Text style={{color: 'white',marginLeft:20,fontSize:18}}>ประสิทธิภาพให้ร่างกายสามารถกำจัดปริมาณ</Text>
            <Text style={{color: 'white',marginLeft:20,fontSize:18}}>แอลกอฮอล์ให้ดีมากยิ่งขึ้น ซึ่งจะประกอบด้วย</Text>
            <Text style={{color: 'white',marginLeft:20,fontSize:18}}>อาหาร เครื่องดื่ม และกิจกรรมต่าง ๆ  </Text>
            <Text style={{color: 'red',marginLeft:20,fontSize:18,marginTop:20}}>หมายเหตุ : โปรดใช้วิจารณญาณในการอ่าน</Text>
            


          </View>
         
          
        </Content>
        </View>



            </Container>

        );
    }
}
