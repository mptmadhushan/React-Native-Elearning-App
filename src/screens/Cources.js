import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { Modalize } from "react-native-modalize";
import CourseList from "../screens/CourseList";

export default class Cources extends React.Component {
  render() {
    return (
      <ImageBackground
        source={require("../images/cat.png")}
        style={{ width: "100%", height: "100%" }}
      >
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            paddingHorizontal: 20,
          }}
        >
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Home")}
            style={{
              paddingHorizontal: 10,
              paddingVertical: 13,
              borderRadius: 10,
              marginTop: 30,
              backgroundColor: "#8bbcdb",
            }}
          >
            <Image
              source={require("../images/a1.png")}
              style={{ width: 20, height: 15 }}
            />
          </TouchableOpacity>
          <View
            style={{
              paddingHorizontal: 10,
              paddingVertical: 13,
              borderRadius: 10,
              marginTop: 30,
            //   backgroundColor: "#8bbcdb",
              marginLeft: 240,
            }}
          >
            {/* <Image
              source={require("../images/hum.png")}
              style={{ height: 15, width: 20 }}
            /> */}
          </View>
        </View>
        <Text
          style={{
            color: "#FFF",
            fontSize: 35,
            fontFamily: "Bold",
            width: 200,
            alignSelf: "center",
            textAlign: "center",
            marginTop: 34,
          }}
        >
          Science
        </Text>

        <Modalize
          handleStyle={{
            marginTop: 30,
            backgroundColor: "#e9e9e9",
            width: 80,
          }}
          modalStyle={{
            borderTopLeftRadius: 60,
            borderTopRightRadius: 60,
          }}
          alwaysOpen={500}
          scrollViewProps={{ showsVerticalScrollIndicator: false }}
        >
          <View style={{ marginTop: 40 }}>
            <CourseList
              onPress={() => this.props.navigation.navigate("CoursePage")}
              img={require("../images/1-1.png")}
              title="Cells & Organelles"
              bg="#fdddf3"
            />
            <CourseList
              img={require("../images/1-3.png")}
              title="Sketch shortcuts and tricks"
              bg="#fef8e3"
            />
            <CourseList
              img={require("../images/1-4.png")}
              title="Microscope Mystery"
              bg="#fcf2ff"
            />
            <CourseList
              img={require("../images/1-3.png")}
              title="-DNA Extraction"
              bg="#fff0ee"
            />
            <CourseList
              img={require("../images/1-2.png")}
              title="Phenotypes, Genotypes, & the Environment"
              bg="#fdddf3"
            />
            <CourseList
              img={require("../images/1-1.png")}
              title="From Genes to Proteins"
              bg="#fef8e3"
            />
            <CourseList
              img={require("../images/1-3.png")}
              title="Blood Typing"
              bg="#fcf2ff"
            />
          </View>
        </Modalize>
      </ImageBackground>
    );
  }
}
