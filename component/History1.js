import { useLinkBuilder } from '@react-navigation/native'
import { ListItem } from 'native-base'
import React, {useState} from 'react'
import {View,Text,Flatlist, StyleSheet} from 'react-native'
import Adddetail from './Test'

const App = () => {
  const [items, setItems] = useState ([
    {id: uuid(), text: 'HTML'}
  ])

  return (
    <View>
      <Adddetail/>
      <Flatlist data={items}
        renderItem={({item})} />
    </View>
  )

}
