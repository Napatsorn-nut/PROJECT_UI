import React,{ Component } from "react";
import { Text, View, Image, StyleSheet, Pressable, Modal } from "react-native";
import {
  Container,
  Header,
  Title,
  Button,
  Left,
  Body,
  Icon,
} from "native-base";

export default class History1 extends Component {
  //ส่งค่า sum
  constructor(props) {
    super(props);
    this.state = {
      sum: 0,
    };
  }

  //popup
  state = {
    modalVisible: false,
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
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

            <Body style={{ marginLeft: 50 }}>
              <Title style={{ fontSize: 28, fontWeight: "bold" }}>กฎหมาย</Title>
            </Body>
          </Header>


          <View style={{ flex: 1, backgroundColor: "black", alignItems: "center" }}>
              <View
                  style={{
                    backgroundColor: "#C4C4C4",
                    width: 300,
                    height: 90,
                    borderRadius: 10,
                    marginTop: 30,
                    }}
              >
                    <Text style={{ marginTop: 10, marginLeft: 10, fontSize: 18 }}>ค่าใช้จ่ายทั้งหมด</Text>
                    <Text style={{ color: "#FF0000", fontSize: 36, marginLeft: 110 }}>{this.state.sum}</Text>
                    <Text style={{ marginTop: -30, marginLeft: 250, fontSize: 18 }}>บาท</Text>

              </View>

              <View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                      Alert.alert("Modal has been closed.");
                      this.setModalVisible(!modalVisible);
                    }}
                  >
                    <View
                      style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: 22,
                      }}
                      >

                        <View style={styles.modalView}>
                          <Text
                            style={{
                              color: "black",
                              fontSize: 20,
                              marginLeft:-20,
                              marginTop: -10,
                            }}
                          >
                            วัน/เดือน/ปี :
                          </Text>
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
                          <Text
                            style={{
                              color: "black",
                              fontSize: 20,
                              marginTop: 10,
                              marginLeft: -20,
                            }}
                          >
                            ค่าใช้จ่าย :
                          </Text>

                          <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => this.setModalVisible(!modalVisible)}
                          >
                            <Text style={styles.textStyle}>Hide Modal</Text>
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
                  marginLeft: -10,
                }}
              />
              <Text
                style={{
                  color: "white",
                  fontSize: 18,
                  marginLeft: 30,
                  marginTop: -25,
                }}
              >
                เพิ่มค่าใช้จ่าย
              </Text>
            </Pressable>
          </View>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  modalView: {
    width: 300,
    height: 200,
    margin: 20,
    backgroundColor: "#CCCCCC",
    borderRadius: 10,
    padding: 35,
    
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
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: "#2196F3",
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
