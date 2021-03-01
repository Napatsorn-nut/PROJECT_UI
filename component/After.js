import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';
import { Container, Header, Title,Button, Left, Right, Body, Icon } from 'native-base';

import * as Animatable from 'react-native-animatable';
import Accordion from 'react-native-collapsible/Accordion';

const Food =
<View style={{backgroundColor: 'black',width:800}}> 
  <Text  style={{color: '#FBD343',fontSize:20,marginLeft:30,marginTop:20}}>ไข่ต้ม</Text>
  <Text style={{color: '#ffffff',fontSize:18,marginLeft:30}}>มีหน้าที่จับสารพิษในร่างกาย</Text>
  <Image source={require('../icon/egg.png')}
            style={{
            marginTop:15,
            marginLeft:100,
            height:140,
            width:180,
            }}/>

  <Text  style={{color: '#FBD343',fontSize:20,marginLeft:30,marginTop:15,}}>ขนมปัง</Text>
  <Text style={{color: '#ffffff',fontSize:18,marginLeft:30}}>ช่วยดูดซับสารพิษและป้องกันการอาเจียนได้</Text>
  <Text style={{color: '#ffffff',fontSize:18,marginLeft:30}}>เป็นอย่างดี</Text>
  <Image source={require('../icon/bread.png')}
            style={{
            marginTop:15,
            marginLeft:90,
            height:140,
            width:200,
            }}/>

  <Text  style={{color: '#FBD343',fontSize:20,marginLeft:30,marginTop:15,}}>โจ๊ก ข้าวต้ม น้ำซุปใส</Text>
  <Text style={{color: '#ffffff',fontSize:18,marginLeft:30}}>ช่วยลดอาการขาดน้ำของผู้ดื่มหนักและช่วยลด</Text>
  <Text style={{color: '#ffffff',fontSize:18,marginLeft:30}}>อาการระคายเคืองในกระเพาะอาหารได้</Text>
  <Image source={require('../icon/soup.png')}
            style={{
            marginTop:15,
            marginLeft:80,
            height:130,
            width:200,
            }}/>
             
  <Text  style={{color: '#FBD343',fontSize:20,marginLeft:30,marginTop:15,}}>ผลไม้ที่มีรสเปรี้ยว</Text>
  <Text style={{color: '#ffffff',fontSize:18,marginLeft:30}}>เพื่อชดเชยวิตามินซีและเพิ่มปริมาณออกซิเจน</Text>
  <Text style={{color: '#ffffff',fontSize:18,marginLeft:30}}>ในเลือด ชดเชยพลังงานที่ร่างกายต้องการ เช่น </Text>
  <Text style={{color: '#ffffff',fontSize:18,marginLeft:30}}>มะม่วงดิบ มะขามเปียก</Text>
  <Image source={require('../icon/mango.png')}
            style={{
            marginTop:15,
            marginLeft:80,
            height:200,
            width:200,
            }}/>

  <Text  style={{color: '#FBD343',fontSize:20,marginLeft:30,marginTop:15,}}>ช็อกโกแลตแท่งหรือของหวานจัด ๆ</Text>
  <Text style={{color: '#ffffff',fontSize:18,marginLeft:30}}>ช็อกโกแลตเป็นตัวช่วยสำคัญในการล้างพิษ</Text>
  <Text style={{color: '#ffffff',fontSize:18,marginLeft:30}}>แอลกอฮอล์ให้ออกไปจากร่างกาย</Text>
  <Image source={require('../icon/chocolate.png')}
            style={{
            marginTop:15,
            marginLeft:80,
            height:140,
            width:200,
            }}/>
   <View style={{height:20}}/>
</View>

const Drink =
<View style={{backgroundColor: 'black',width:800}}> 
  <Text  style={{color: '#FBD343',fontSize:20,marginLeft:30,marginTop:20}}>น้ำเปล่า</Text>
  <Text style={{color: '#ffffff',fontSize:18,marginLeft:30}}>สาเหตุที่ทำให้แฮงค์ เกิดจากสภาวะที่ร่างกาย</Text>
  <Text  style={{color: '#ffffff',fontSize:18,marginLeft:30}}>ขาดน้ำ การดื่มน้ำเปล่าเยอะ ๆ เพื่อช่วยชดเชย</Text>
  <Text style={{color: '#ffffff',fontSize:18,marginLeft:30}}>การเสียน้ำ</Text>
  <Image source={require('../icon/water.png')}
            style={{
            marginTop:15,
            marginLeft:100,
            height:140,
            width:180,
            }}/>

  <Text  style={{color: '#FBD343',fontSize:20,marginLeft:30}}>เครื่องดื่มเกลือแร่และวิตามิน</Text>
  <Text style={{color: '#ffffff',fontSize:18,marginLeft:30}}>เครื่องดื่มวิตามินจะมีวิตามินบีและวิตามินซี </Text>
  <Text  style={{color: '#ffffff',fontSize:18,marginLeft:30}}>ซึ่งช่วยลดอาการแฮงค์และอาการปวดหัวได้</Text>
  <Image source={require('../icon/vitaminc.png')}
            style={{
            marginTop:15,
            marginLeft:120,
            height:150,
            width:150,
            }}/>

  <Text  style={{color: '#FBD343',fontSize:20,marginLeft:30}}>นมเปรี้ยว</Text>
  <Text style={{color: '#ffffff',fontSize:18,marginLeft:30}}>ช่วยให้ปริมาณแอลกอฮอล์ที่ฝังตัวอยู่ในลมหายใจ</Text>
  <Text  style={{color: '#ffffff',fontSize:18,marginLeft:30}}>ลดลง</Text>
  <Image source={require('../icon/milk.png')}
            style={{
            marginTop:15,
            marginLeft:100,
            height:140,
            width:180,
            }}/>

  <Text  style={{color: '#FBD343',fontSize:20,marginLeft:30}}>กาแฟดำ</Text>
  <Text style={{color: '#ffffff',fontSize:18,marginLeft:30}}>คาเฟอีนในกาแฟช่วยเพิ่มความดันในกระแสเลือด</Text>
  <Text  style={{color: '#ffffff',fontSize:18,marginLeft:30}}>ทำให้แอลกอฮอล์ออกจากกระแสเลือดได้เร็วขึ้น</Text>
  <Text style={{color: '#ffffff',fontSize:18,marginLeft:30}}>ฟื้นจากอาการมึนและปวดศีรษะได้ดี</Text>
  <Image source={require('../icon/coffee.png')}
            style={{
            marginTop:15,
            marginLeft:120,
            height:140,
            width:180,
            }}/>

  <View style={{height:20}}/>

</View>;



const Activity = 
<View style={{ backgroundColor: '#000000',width:800}}>
  <Text  style={{color: '#FBD343',fontSize:20,marginLeft:30,marginTop:20}}>ออกกำลังกายขับแอลกอฮอล์ </Text>
  <Text style={{color: '#ffffff',fontSize:18,marginLeft:30}}>วิ่งสักนิด วิดพื้นสักหน่อยเพื่อให้มีเหงื่อออก</Text>
  <Text  style={{color: '#ffffff',fontSize:18,marginLeft:30}}>เพราะเหงื่อจะขับเอาแอลกอฮอล์ออกมา</Text>
  <Image source={require('../icon/run.jpg')}
            style={{
            marginTop:15,
            marginLeft:120,
            height:140,
            width:180,
            }}/>
            
  <Text  style={{color: '#FBD343',fontSize:20,marginLeft:30,marginTop:20}}>แปรงฟันหรือบ้วนปากด้วยน้ำสะระแหน่</Text>
  <Image source={require('../icon/toothbrush.png')}
            style={{
            marginTop:15,
            marginLeft:120,
            height:140,
            width:180,
            }}/>
  
  <Text  style={{color: '#FBD343',fontSize:20,marginLeft:30,marginTop:20}}>น้ำยาบ้วนปาก</Text>
  <Text style={{color: '#ffffff',fontSize:18,marginLeft:30}}>กลิ่นของน้ำยาบ้วนปากอาจจะช่วยดับกลิ่นของ</Text>
  <Text style={{color: '#ffffff',fontSize:18,marginLeft:30}}>แอลกอฮอล์ในช่องปากได้</Text>
  <Image source={require('../icon/mouth-wash.jpg')}
            style={{
            marginTop:15,
            marginLeft:120,
            height:140,
            width:180,
            }}/>

  <Text  style={{color: '#FBD343',fontSize:20,marginLeft:30,marginTop:20}}>เคี้ยวหมากฝรั่ง</Text>
  <Image source={require('../icon/gum.png')}
              style={{
              marginTop:15,
              marginLeft:120,
              height:150,
              width:200,
              }}/>

  <Text  style={{color: '#FBD343',fontSize:20,marginLeft:30,marginTop:20}}>เช็ดตัวด้วยผ้าเปียก</Text>
  <Image source={require('../icon/chedtua.png')}
              style={{
              marginTop:15,
              marginLeft:120,
              height:150,
              width:150,
              }}/>

  <Text  style={{color: '#FBD343',fontSize:20,marginLeft:30,marginTop:20}}>อาบน้ำ</Text>
  <Image source={require('../icon/shower.png')}
              style={{
              marginTop:15,
              marginLeft:120,
              height:150,
              width:150,
              }}/>
  <View style={{height:20}}/>

  
            
</View>;

const Food1 =
<View style={{ paddingHorizontal: 60,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5}}>
  <Text style={{fontSize:24,marginLeft:10}}>อาหารแก้เมาค้าง</Text>
  <Image source={require('../icon/back.png')} 
    style={{
      width: 25,
      height: 25,
      transform: [{ rotate: '270deg'}],
      marginLeft:180
      }} />

</View>

const Drink1 =
<View style={{ paddingHorizontal: 60,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5}}>
  <Text style={{fontSize:24,marginLeft:10}}>เครื่องดื่มแก้เมาค้าง</Text>
  <Image source={require('../icon/back.png')} 
    style={{
      width: 25,
      height: 25,
      transform: [{ rotate: '270deg'}],
      marginLeft:150
      }} />

</View>

const Activity1 =
<View style={{ paddingHorizontal: 60,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5}}>
  <Text style={{fontSize:24,marginLeft:10}}>กิจกรรมแก้เมา</Text>
  <Image source={require('../icon/back.png')} 
    style={{
      width: 25,
      height: 25,
      transform: [{ rotate: '270deg'}],
      marginLeft:200
      }} />

</View>

const CONTENT = [
  {
    title: Food1,
    content: Food,
  },
  {
    title: Drink1,
    content: Drink,
  },
  {
    title: Activity1,
    content: Activity
    ,
  },
];


export default class After extends Component {
  state = {
    activeSections: [],
    collapsed: true,
    multipleSelect: false,
  };

  toggleExpanded = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  setSections = sections => {
    this.setState({
      activeSections: sections.includes(undefined) ? [] : sections,
    });
  };

  renderHeader = (section, _, isActive) => {
    return (
      <Animatable.View
        duration={400}
        style={[styles.header, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor"
      >
        <Text style={styles.headerText}>{section.title}</Text>
      </Animatable.View>
    );
  };

  renderContent(section, _, isActive) {
    return (
      <Animatable.View
        duration={400}
        style={[styles.content, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor"
      >
        <Animatable.Text animation={isActive ? 'bounceIn' : undefined}>
          {section.content}
        </Animatable.Text>
      </Animatable.View>
    );
  }

  render() {
    const { multipleSelect, activeSections } = this.state;

    return (

      <Container>
        <Header style={{backgroundColor : '#000000'}}>
          <Left>
            <Button transparent
            onPress={() =>this.props.navigation.navigate("Advice")}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body style={{marginLeft:-20}}>
            <Title style={{fontSize:28,fontWeight:'bold',}}>หลังดื่มแอลกอฮอล์</Title>
          </Body>
        </Header>   
      <View style={styles.container}>
        <ScrollView contentContainerStyle={{ paddingTop: 30 }}>

         
          <Accordion
            activeSections={activeSections}
            sections={CONTENT}
            touchableComponent={TouchableOpacity}
            expandMultiple={multipleSelect}
            renderHeader={this.renderHeader}
            renderContent={this.renderContent}
            duration={400}
            onChange={this.setSections}
          />
        </ScrollView>

        
      </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  headerText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },

  active: {
    backgroundColor: '#FBD343',
  },
  inactive: {
    backgroundColor: '#ffffff',
  },



});