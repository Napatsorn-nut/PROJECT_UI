import React, { Component } from 'react';
import {ScrollView, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Accordion from 'react-native-collapsible/Accordion';
import Header from '../component/Header'
import Food from '../component/Food'
import Drink from '../component/Drink'
import Activity from '../component/Activity'
import HeaderFood from '../component/HeaderFood'
import HeaderDrink from '../component/HeaderDrink'
import HeaderActivity from '../component/HeaderActivity'

const CONTENT = [
  {
    title: <HeaderFood/>,
    content: <Food/>,
  },
  {
    title: <HeaderDrink/>,
    content: <Drink/>,
  },
  {
    title: <HeaderActivity/>,
    content: <Activity/>
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
      <View style={styles.container}>
        <Header title='หลังดื่มแอลกอฮอล์' />
        <View>
          <ScrollView contentContainerStyle={{ paddingTop: 30 }}>
            <Accordion
              activeSections={activeSections}
              sections={CONTENT}
              touchableComponent={TouchableOpacity}
              expandMultiple={multipleSelect}
              renderHeader={this.renderHeader}
              renderContent={this.renderContent}
              duration={400}
              onChange={this.setSections}/>
          </ScrollView>
        </View>
      </View>
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
  }
});