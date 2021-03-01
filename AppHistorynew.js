import React, { useState } from 'react'
import {View, Text, StyleSheet, FlatList } from 'react-native'
import Header from './component/Header'
import ListItem from './component/ListItem'
import uuid from 'uuid-random'
import AddItem from './component/AddItem'

const App = () => {

  const [items, setItems] = useState('')

  //delte item
  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id)
    })
  }

  //add item
  const addItem = (text,cost) => {
    setItems(prevItems => {
      return[{id: uuid(), text,cost}, ...prevItems];
    })
  }


  return(
    <View style={styles.container}>
        <Header title='ประวัติรายจ่าย'/>
        <AddItem addItem={addItem}/>
        <FlatList data={items}
              renderItem={({item}) => (<ListItem item={item}
                deleteItem={deleteItem} />)} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  }
})

export default App;