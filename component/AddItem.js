import React,{useState} from 'react'
import {View, Text, StyleSheet,TextInput,TouchableOpacity } from 'react-native'

const AddItem = ({title,addItem}) => {

    const [text, setText] = useState('');
    const [cost,setCost] = useState('');
    const onChange =()=>{
        textValue => setText(textValue);
        textValue => setText(textValue);
    }

    
  return(
    <View>
        <Text style={styles.btext}>รายละเอียด : </Text>
        <TextInput placeholder='ไปกินเหล้ากับเพื่อน' 
            style={styles.input}
            onChangeText={textValue => setText(textValue)} />
        <Text style={styles.btext}>ค่าใช้จ่าย : </Text>
        <TextInput placeholder='585 บาท' 
            style={styles.input}
            onChangeText={costValue => setCost(costValue)} />
        <TouchableOpacity style={styles.btn} 
            onPress={() => addItem(text,cost)}>
            <Text style={styles.btnText}>
                Add Item
            </Text>
        </TouchableOpacity> 

    </View>
  )
}

const styles = StyleSheet.create({
    btext: {
        fontSize: 24
    },
    input: {
        height: 60,
        padding:8,
        fontSize:16,
    },
    btn: {
        backgroundColor: '#c2bad8',
        padding:9,
        margin: 5
    },
    btnText: {
        color: 'black',
        fontSize:20,
        textAlign: 'center'
    },
  
})

export default AddItem;