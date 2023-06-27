import { ImageBackground } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

const FiveRows = () => {
  return <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.sectionContainer}>
        <View style={styles.section}>
          {
          /* YOUR CODE HERE */
        }
        <ImageBackground style={styles.czqVOgfy} source={require("./Group (1).png")} resizeMode="cover"></ImageBackground></View>
        <View style={styles.section}>
          {
          /* YOUR CODE HERE */
        }
        <ImageBackground style={styles.KkZNzYwd} source={require("./istockphoto-514325215-612x612.jpg")} resizeMode="cover"></ImageBackground></View>
        <View style={styles.section}>
          {
          /* YOUR CODE HERE */
        }
        <ImageBackground style={styles.tZmxpYvd} source={require("./Recipeful(2).png")} resizeMode="cover"></ImageBackground></View>
        <View style={styles.section}>
          {
          /* YOUR CODE HERE */
        }
        <ImageBackground style={styles.BbvUOkna} source={require("./Recipeful(2).png")} resizeMode="cover"></ImageBackground></View>
        <View style={styles.section}>
          {
          /* YOUR CODE HERE */
        }
        <ImageBackground style={styles.jCMzGHOr} source={require("./ups-logo.png")} resizeMode="cover"></ImageBackground></View>
      </View>
    </ScrollView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  sectionContainer: {
    flex: 1,
    backgroundColor: "pink",
    marginHorizontal: 10,
    marginVertical: 5,
    padding: 15
  },
  section: {
    flex: 1,
    backgroundColor: "white",
    marginVertical: 5,
    padding: 15,
    justifyContent: "center",
    alignItems: "center"
  },
  czqVOgfy: {
    width: 107,
    height: 62
  },
  KkZNzYwd: {
    width: 107,
    height: 62
  },
  tZmxpYvd: {
    width: 107,
    height: 62
  },
  BbvUOkna: {
    width: 107,
    height: 62
  },
  jCMzGHOr: {
    width: 107,
    height: 62
  }
});
export default FiveRows;