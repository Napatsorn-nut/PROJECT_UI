import React from 'react';
import {Component} from 'react';
import {
    Text,
    View,
    Dimensions,
    Image,
    StyleSheet,
} from 'react-native';
import { Container, Header, Title,Button, Left, Body, Icon } from 'native-base';
import Swiper from 'react-native-swiper'


export default class Law extends Component {
    render() {
      let screenWidth = Dimensions.get('window').width;
      let screenHight = Dimensions.get('window').height;
        return(

        <Container>

        <Header style={{backgroundColor : '#000000'}}>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body style={{marginLeft:50}}>
            <Title style={{fontSize:28,fontWeight:'bold',}}>กฎหมาย</Title>
          </Body>
          
        </Header>

        <Swiper
          style={styles.wrapper}
          dot={
            <View
              style={{
                backgroundColor: '#C4C4C4',
                width: 13,
                height: 13,
                borderRadius: 7,
                marginLeft: 7,
                marginRight: 7
              }}
            />
          }
          activeDot={
            <View
              style={{
                backgroundColor: '#FBD343',
                width: 13,
                height: 13,
                borderRadius: 7,
                marginLeft: 7,
                marginRight: 7
              }}
            />
          }
          paginationStyle={{
            bottom: 70
          }}
          loop={false}
        > 
                
                <View 
                    style={{
                    backgroundColor: '#000000',
                    flex:1,
                    width: screenWidth,
                    alignItems:'center',
                    paddingTop: 20
                }}>
          
                        <Text style={{paddingTop:20,color: '#FBD343',fontSize:24 ,textAlign: 'center'}}>กฎหมายเมาแล้วขับ</Text>
                        <Text style={{paddingTop:5,color: '#FF0000',fontSize:24 ,textAlign: 'center',}}>ค่าปรับเท่าไหร่รับโทษอย่างไรบ้าง ?</Text>
                        <Text style={{paddingTop:30,paddingHorizontal:12,color: '#FFFFFF',fontSize:18 ,textAlign: 'center',}}>ตาม พ.ร.บ.จราจรทางบก พ.ศ.2522</Text>
                        <Text style={styles.baseText}>มาตรา 43 ได้ระบุห้ามมิให้ขับรถในขณะเมาสุรา</Text>
                        <Text style={styles.baseText}>หรือของมึนเมาอื่น ๆ โดยในปัจจุบันมีการเพิ่มโทษ</Text>
                        <Text style={styles.baseText}>ให้หนักขึ้นตาม พ.ร.บ.จราจรทางบก พ.ศ.2550</Text>
                        <Text style={styles.baseText}>โดยกำหนดโทษของการเมาแล้วขับ</Text>
                        <Text style={styles.baseText}>สามารถแบ่งตามข้อหาได้ทั้งหมด 3 ข้อ ดังนี้ </Text>

          <View style={{paddingTop:40}}/>
          <Image 
            source={require('../icon/beer.png')}
            style={{
            
            height:120,
            width:120,
            }}/>
    </View>
    <View 
                    style={{
                    backgroundColor: '#000000',
                    flex:1,
                    width: screenWidth,
                    alignItems:'center',
                    paddingTop: 20
                }}>
          
          <Text style={{color: '#FF0000',fontSize:24 ,textAlign: 'center'}}>เมาแล้วขับ</Text>
          <Text style={{paddingTop:5,color: '#FF0000',fontSize:24 ,textAlign: 'center',}}>เป็นเหตุให้ผู้อื่นได้รับอันตราย</Text>
		  <Text style={{paddingTop:5,color: '#FF0000',fontSize:24 ,textAlign: 'center',}}>แก่ร่างกายและจิตใจ</Text>


          <Text style={{paddingTop:30,paddingHorizontal:12,color: '#FFFFFF',fontSize:18 ,textAlign: 'center',}}>ผู้ใดเมาแล้วขับ และเป็นเหตุให้ผู้อื่นได้รับอันตราย</Text>
          <Text style={{paddingTop:5,paddingHorizontal:12,color: '#FFFFFF',fontSize:18 ,textAlign: 'center',}}>หรือได้รับบาดเจ็บทางร่างกายและจิตใจ</Text>
		  
          <View style={{paddingTop:20}}>
          <Text style={styles.innerText3}>- มีโทษจำคุก 1-5 ปี</Text>
          <Text style={styles.innerText3}>- ปรับตั้งแต่ 20,000-100,000 บาท</Text>
          <Text style={styles.innerText3}>หรือทั้งจำทั้งปรับ</Text>
          <Text style={styles.innerText3}>- ศาลสามารถสั่งพักใช้ใบขับขี่ไม่น้อยกว่า 1 ปี</Text>
          <Text style={styles.innerText3}>หรือเพิกถอนใบขับขี่</Text>
          </View>
          
          <View style={{paddingTop:40,
        justifyContent:'center',
        alignItems:'center'}}>
          <Image 
            source={require('../icon/heartbroken.png')}
            style={{
            height:80,
            width:80,
            }}/>
            </View>
    </View>

    <View 
                    style={{
                    backgroundColor: '#000000',
                    flex:1,
                    width: screenWidth,
                    alignItems:'center',
                    paddingTop: 20
                }}>
          
          <Text style={{color: '#FF0000',fontSize:24 ,textAlign: 'center'}}>เมาแล้วขับ</Text>
          <Text style={{paddingTop:5,color: '#FF0000',fontSize:24 ,textAlign: 'center',}}>เป็นเหตุให้ผู้อื่นได้รับอันตรายสาหัส</Text>
		  


          <Text style={{paddingTop:30,paddingHorizontal:12,color: '#FFFFFF',fontSize:18 ,textAlign: 'center',}}>ผู้ใดเมาแล้วขับ และเป็นเหตุให้ผู้อื่นได้รับ</Text>
          <Text style={{paddingTop:5,paddingHorizontal:12,color: '#FFFFFF',fontSize:18 ,textAlign: 'center',}}>อันตรายสาหัส เช่น สูญเสียอวัยวะ หรือทุพพลภาพ</Text>
		  
          <View style={{paddingTop:20}}>
          <Text style={styles.innerText3}>- มีโทษจำคุก 2-6 ปี</Text>
          <Text style={styles.innerText3}>- ปรับตั้งแต่ 40,000-120,000 บาท</Text>
          <Text style={styles.innerText3}>หรือทั้งจำทั้งปรับ</Text>
          <Text style={styles.innerText3}>- ศาลสามารถสั่งพักใช้ใบขับขี่ไม่น้อยกว่า 2 ปี</Text>
          <Text style={styles.innerText3}>หรือเพิกถอนใบขับขี่</Text>
          </View>
          
          <View style={{paddingTop:40,
        justifyContent:'center',
        alignItems:'center'}}>
          <Image 
            source={require('../icon/patient.png')}
            style={{
            height:100,
            width:100,
            }}/>
            </View>
    </View>
            

    <View 
                    style={{
                    backgroundColor: '#000000',
                    flex:1,
                    width: screenWidth,
                    alignItems:'center',
                    paddingTop: 20
                }}>
          
          <Text style={{color: '#FF0000',fontSize:24 ,textAlign: 'center'}}>เมาแล้วขับ</Text>
          <Text style={{paddingTop:5,color: '#FF0000',fontSize:24 ,textAlign: 'center',}}>เป็นเหตุให้ผู้อื่นถึงแก่ความตาย</Text>
		  


          <Text style={{paddingTop:30,paddingHorizontal:12,color: '#FFFFFF',fontSize:18 ,textAlign: 'center',}}>ผู้ใดเมาแล้วขับ เป็นเหตุให้ผู้อื่นถึงแก่ความตาย</Text>
          
          <View style={{paddingTop:20}}>
          <Text style={styles.innerText3}>- มีโทษจำคุก 3-10 ปี</Text>
          <Text style={styles.innerText3}>- ปรับตั้งแต่ 60,000-200,000 บาท</Text>
          <Text style={styles.innerText3}>หรือทั้งจำทั้งปรับ</Text>
          <Text style={styles.innerText3}>- ศาลสามารถสั่งเพิกถอนใบขับขี่่</Text>
          
          </View>
          
          <View style={{paddingTop:40,
        justifyContent:'center',
        alignItems:'center'}}>
          <Image 
            source={require('../icon/tombstone.png')}
            style={{
            height:100,
            width:100,
            }}/>
            </View>
    </View>

    <View 
                    style={{
                    backgroundColor: '#000000',
                    flex:1,
                    width: screenWidth,
                    alignItems:'center',
                    paddingTop: 30
                    
                }}>
          
          <Text style={styles.baseText} >โดยผู้ขับขี่ทั่วไป ถ้าระดับแอลกอฮอล์ในเลือด </Text>

          <Text style={styles.baseText}>
                    <Text style={styles.innerText1}>เกิน 50 มิลลิกรัมเปอร์เซ็นต์</Text>
                    ถือว่า
                    <Text style={styles.innerText1}>ผิดกฎหมาย</Text>
          </Text>

          <Text style={styles.baseText}>ส่วนผู้ขับขี่ที่มี
                    <Text style={styles.innerText2}>อายุน้อยกว่า 20 ปีบริบูรณ์</Text>
          </Text>

          <Text style={styles.baseText}>ที่ได้รับใบอนุญาตขับขี่ชั่วคราวทั้งผู้ดื่มและขับขี่,</Text>
          <Text style={styles.baseText}>ผู้ที่มีใบอนุญาตขับขี่ประเภทอื่น ๆ ที่ใช้แทนกันไม่ได้</Text>
          <Text style={styles.baseText}>และผู้ที่ไม่มีใบอนุญาตขับขี่หรือถูกระหว่างพักใช้</Text>
          <Text style={styles.baseText}>หรือถูกเพิกถอนใบอนุญาตขับขี่</Text>
          <Text style={styles.baseText}>ถ้าเป่าแล้วมีระดับแอลกอฮอล์ในเลือด</Text>		  
          <Text style={styles.innerText1}>เกิน 20 มิลลิกรัมเปอร์เซ็นต์</Text>
          <Text style={styles.baseText}>ก็ถือว่า
                    <Text style={styles.innerText1}>ผิดกฎหมาย</Text>
                    เช่นกัน
          </Text>
          
          
          <View style={{paddingTop:40,
        justifyContent:'center',
        alignItems:'center'}}>
          <Image 
            source={require('../icon/court.png')}
            style={{
            height:100,
            width:100,
            }}/>
            </View>
    </View>


    </Swiper>
           
            </Container>

        );
    }
}

const styles = StyleSheet.create({
  wrapper: {
  },
    baseText: {
        paddingTop:3,
        paddingHorizontal:12,
        color: '#FFFFFF',
        fontSize:18 ,
        textAlign: 'center',
    },
    innerText1:{
        paddingTop:3,
        paddingHorizontal:12,
        color : '#FF0000',
        fontSize:18 ,
        textAlign: 'center',
    },
    innerText2:{
        paddingTop:3,
        paddingHorizontal:12,
        color : '#FBD343',
        fontSize:18 ,
        textAlign: 'center',
    },
    innerText3:{
        paddingTop:3,
        paddingHorizontal:12,
        color: '#FFFFFF',
        fontSize:18 ,
        textAlign: 'left'
    },
  
})