import React from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import CourseList from "./CourseList";

export default class Home extends React.Component {
  render() {
    return (
      <ImageBackground
        source={require("../images/chs.png")}
        style={{ width: "100%", height: "100%" }}
      >
        <ScrollView>
          <Text
            style={{
              paddingHorizontal: 20,
              fontSize: 35,
              paddingTop: 40,
              marginTop: 220,
              fontFamily: "Bold",
              color: "#FFF",
            }}
          >
            Please sign in
          </Text>

          <View
            style={{
              flexDirection: "row",
              backgroundColor: "#FFF2F2",
              marginTop: 70,
              marginHorizontal: 20,
              borderRadius: 20,
              paddingVertical: 30,
            }}
          >
            <View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  backgroundColor: "#FFF",
                  padding: 10,
                  borderRadius: 12,
                  marginHorizontal: 20,
                  marginTop: 20,
                }}
              >
                <TextInput
                  placeholder="User Name"
                  placeholderTextColor="#345c74"
                  style={{
                    fontFamily: "Bold",
                    fontSize: 12,
                    width: 220,
                    paddingHorizontal: 12,
                  }}
                />
                <Image
                  source={require("../images/sear.png")}
                  style={{ height: 14, width: 14 }}
                />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  backgroundColor: "#FFF",
                  padding: 10,
                  borderRadius: 12,
                  marginHorizontal: 20,
                  marginTop: 20,
                }}
              >
                <TextInput
                  placeholder="E-mail"
                  placeholderTextColor="#345c74"
                  style={{
                    fontFamily: "Bold",
                    fontSize: 12,
                    width: 280,
                    paddingHorizontal: 12,
                  }}
                />
                <Image
                  source={require("../images/sear.png")}
                  style={{ height: 14, width: 14 }}
                />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  backgroundColor: "#FFF",
                  padding: 10,
                  borderRadius: 12,
                  marginHorizontal: 20,
                  marginTop: 20,
                }}
              >
                <TextInput
                  placeholder="Password"
                  placeholderTextColor="#345c74"
                  style={{
                    fontFamily: "Bold",
                    fontSize: 12,
                    width: 280,
                    paddingHorizontal: 12,
                  }}
                />
                <Image
                  source={require("../images/sear.png")}
                  style={{ height: 14, width: 14 }}
                />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  padding: 10,
                  borderRadius: 12,
                  marginHorizontal: 20,
                  marginTop: 20,
                }}
              >
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("Home")}
                  style={{
                    flexDirection: "row",
                    backgroundColor: "#f58084",
                    alignItems: "center",
                    marginTop: 20,
                    width: 150,
                    paddingVertical: 10,
                    borderRadius: 14,
                    paddingHorizontal: 10,
                  }}
                >
                  <Text
                    style={{
                      color: "#FFF",
                      fontFamily: "Bold",
                      fontSize: 12,
                    }}
                  >
                    SignUp
                  </Text>
                  <Image
                    source={require("../images/a3.png")}
                    style={{ marginLeft: 20, width: 8, height: 8 }}
                  />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  padding: 10,
                  borderRadius: 12,
                  marginHorizontal: 20,
                }}
              >
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("login")}
                  style={{
                    flexDirection: "row",
                    backgroundColor: "#f58084",
                    alignItems: "center",
                    width: 150,
                    paddingVertical: 10,
                    borderRadius: 14,
                    paddingHorizontal: 10,
                  }}
                >
                  <Text
                    style={{
                      color: "#FFF",
                      fontFamily: "Bold",
                      fontSize: 12,
                    }}
                  >
                    LogIn
                  </Text>
                  <Image
                    source={require("../images/a3.png")}
                    style={{ marginLeft: 20, width: 8, height: 8 }}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <Image
              source={require("../images/undraw.png")}
              style={{ marginLeft: -80, marginTop: 35 }}
            />
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}
