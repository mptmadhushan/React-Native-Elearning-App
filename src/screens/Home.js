import React from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import CourseList from "../screens/CourseList";

export default class Home extends React.Component {
  render() {
    return (
      <ImageBackground
        source={require("../images/Home.png")}
        style={{ width: "100%", height: "100%" }}
      >
        <ScrollView>
          <View
            style={{
              width: "100%",
              alignItems: "flex-end",
              paddingHorizontal: 20,
            }}
          >
            <View
              style={{
                paddingHorizontal: 10,
                paddingVertical: 12,
                borderRadius: 10,
                marginTop: 30,
                backgroundColor: "#d1a0a7",
              }}
            >
              <Image
                source={require("../images/hum.png")}
                style={{ height: 15, width: 20 }}
              />
            </View>
          </View>
          <Text
            style={{
              paddingHorizontal: 20,
              fontSize: 35,
              paddingTop: 40,
              fontFamily: "Bold",
              color: "#FFF",
            }}
          >
            Welcome back dev
          </Text>

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
              placeholder="Search for new knowledge!"
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
              backgroundColor: "#FFF2F2",
              marginTop: 15,
              marginHorizontal: 20,
              borderRadius: 20,
              paddingVertical: 30,
              paddingLeft: 30,
            }}
          >
            <View>
              <Text
                style={{
                  color: "#345c74",
                  fontSize: 20,
                  fontFamily: "Bold",
                  width: 250,
                  paddingRight: 100,
                }}
              >
                Start learning new Staff
              </Text>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("VideoPage")}
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
                  Get start
                </Text>
                <Image
                  source={require("../images/a3.png")}
                  style={{ marginLeft: 20, width: 8, height: 8 }}
                />
              </TouchableOpacity>
            </View>
            <Image
              source={require("../images/undraw.png")}
              style={{ marginLeft: -80, marginTop: 35 }}
            />
          </View>
          <Text
            style={{
              color: "#345c74",
              fontFamily: "Bold",
              fontSize: 20,
              paddingHorizontal: 20,
              marginTop: 20,
              marginBottom: 10,
            }}
          >
            Features
          </Text>
          <CourseList
            img={require("../images/moti.png")}
            title="Motivation"
            bg="#fef8e3"
            onPress={() => this.props.navigation.navigate("MotivationView")}
            pres={true}
          />
          {/* <TouchableOpacity
            onPress={() => this.props.navigation.navigate("CoursePage")}
          > */}
          <CourseList
            onPress={() => this.props.navigation.navigate("CoursePage")}
            img={require("../images/rank.png")}
            title="Ranking"
            bg="#fdddf3"
            pres={true}
          />
          {/* </TouchableOpacity> */}
          <CourseList
            img={require("../images/game.png")}
            title="Game"
            pres={true}
            onPress={() => this.props.navigation.navigate("Game")}
            bg="#fcf2ff"
          />
        </ScrollView>
      </ImageBackground>
    );
  }
}
