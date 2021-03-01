import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Modal,
  Pressable,
  TextInput,
} from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
} from "native-base";
import DatePicker from "react-native-datepicker";

export default class History extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  };
  //ปฏิทิน
  constructor(props) {
    super(props);
    this.state = { date: "2021-01-01" };
  }
  //Textinput ของ รายละเอียดกับจำนวนเงิน
  state = {
    detail: "",
    charges: "",
  };
  handleDetail = (text) => {
    this.setState({ detail: text });
  };
  handleCharges = (text) => {
    this.setState({ charges: text });
  };

  render() {
    const { modalVisible } = this.state;

    return (
      <Container>
        <Header style={{ backgroundColor: "#000000" }}>
          <Left>
            <Button transparent>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body style={{ marginLeft: 10 }}>
            <Title style={{ fontSize: 28, fontWeight: "bold" }}>
              ประวัติรายจ่าย
            </Title>
          </Body>
        </Header>

        <View
          style={{
            backgroundColor: "black",
            flex: 1,
          }}
        >
          <View
            style={{
              width: 300,
              height: 110,
              backgroundColor: "#C4C4C4",
              marginTop: 35,
              marginLeft: 60,
              borderRadius: 10,
            }}
          >
            <Text style={{ marginLeft: 10, marginTop: 10, fontSize: 18 }}>
              ค่าใช้จ่ายทั้งหมด
            </Text>
            <Text style={{ color: "#FF0000", fontSize: 36, marginLeft: 100 }}>
              5,555
            </Text>
            <Text
              style={{
                fontSize: 18,
                color: "black",
                marginLeft: 240,
                marginTop: -30,
              }}
            >
              บาท
            </Text>
          </View>

          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              this.setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Pressable onPress={() => this.setModalVisible(!modalVisible)}>
                  <Image
                    source={require("../icon/close.png")}
                    style={{
                      height: 28,
                      width: 28,
                      marginTop: 20,
                      marginLeft: 250,
                      marginTop: -30,
                    }}
                  />
                </Pressable>

                <Text
                  style={{
                    color: "black",
                    fontSize: 20,
                    marginLeft: -20,
                    marginTop: 10,
                  }}
                >
                  วัน/เดือน/ปี :{" "}
                </Text>

                <View style={{ marginTop: -35, marginLeft: 90 }}>
                  <DatePicker
                    style={{ width: 150 }}
                    date={this.state.date}
                    mode="date"
                    placeholder="select date"
                    format="YYYY-MM-DD"
                    minDate="2021-01-01"
                    maxDate="2025-12-01"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                      dateIcon: {
                        position: "absolute",
                        left: 0,
                        top: 4,
                        marginLeft: 0,
                      },
                      dateInput: {
                        marginLeft: 36,
                      },
                      // ... You can check the source to find the other keys.
                    }}
                    onDateChange={(date) => {
                      this.setState({ date: date });
                    }}
                  />
                </View>
                <Text
                  style={{
                    color: "black",
                    fontSize: 20,
                    marginTop: 10,
                    marginLeft: -20,
                  }}
                >
                  รายละเอียด :
                </Text>
                <View style={{ marginTop: -30, marginLeft: 100 }}>
                  <TextInput
                    style={{
                      width: 140,
                      height: 40,
                      borderColor: "#000000",
                      borderWidth: 1,
                    }}
                    underlineColorAndroid="transparent"
                    placeholder="ไปสังสรรค์กับเพื่อน"
                    autoCapitalize="none"
                    onChangeText={this.handleDetail}
                  />
                </View>
                <Text
                  style={{
                    color: "black",
                    fontSize: 20,
                    marginTop: 10,
                    marginLeft: -20,
                  }}
                >
                  ค่าใช้จ่าย :{" "}
                </Text>
                <View style={{ marginTop: -30, marginLeft: 100 }}>
                  <TextInput
                    style={{
                      width: 140,
                      height: 40,
                      borderColor: "#000000",
                      borderWidth: 1,
                    }}
                    underlineColorAndroid="transparent"
                    placeholder="548"
                    autoCapitalize="none"
                    onChangeText={this.handleCharges}
                  />
                </View>
                <Pressable
                  style={[styles.button, styles.buttonSave]}
                  onPress={() => this.setModalVisible(!modalVisible)}
                >
                  <Text
                    style={{
                      color: "black",
                      fontSize: 18,
                      textAlign: "center",
                    }}
                  >
                    บันทึก
                  </Text>
                </Pressable>
              </View>
            </View>
          </Modal>

          <Pressable onPress={() => this.setModalVisible(true)}>
            <Image
              source={require("../icon/add.png")}
              style={{
                height: 30,
                width: 30,
                marginTop: 20,
                marginLeft: 120,
              }}
            />
            <Text
              style={{
                color: "white",
                fontSize: 18,
                marginLeft: 160,
                marginTop: -25,
              }}
            >
              เพิ่มค่าใช้จ่าย
            </Text>
          </Pressable>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    alignItems: "center",
    marginTop: 200,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    width: 320,
    height: 250,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 10,
    width: 80,
    height: 40,
    padding: 10,
    marginTop: 20,
    marginRight: -100,
    marginStart: 80,
  },

  buttonSave: {
    backgroundColor: "#24FF00",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },

});
