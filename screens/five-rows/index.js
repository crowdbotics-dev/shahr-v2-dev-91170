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
        <ImageBackground style={styles.AORMnuoz} source={require("./jamie-street-aLoN4KX1xSA-unsplash.jpg")} resizeMode="cover"></ImageBackground></View>
        <View style={styles.section}>
          {
          /* YOUR CODE HERE */
        }
        <ImageBackground style={styles.CfgkLsIu} source={require("./denys-nevozhai-06Vp5xyhl-8-unsplash.jpg")} resizeMode="cover"></ImageBackground></View>
        <View style={styles.section}>
          {
          /* YOUR CODE HERE */
        }
        <ImageBackground style={styles.QxpLRffj} source={require("./caspar-camille-rubin-HUBNTCzE-R8-unsplash.jpg")} resizeMode="cover"></ImageBackground></View>
        <View style={styles.section}>
          {
          /* YOUR CODE HERE */
        }
        <ImageBackground style={styles.jvKNlNat} source={require("./caspar-camille-rubin-XA0v5hbb7HY-unsplash.jpg")} resizeMode="cover"></ImageBackground></View>
        <View style={styles.section}>
          {
          /* YOUR CODE HERE */
        }
        <ImageBackground style={styles.nxAbLteI} source={require("./denys-nevozhai-06Vp5xyhl-8-unsplash.jpg")} resizeMode="cover"></ImageBackground></View>
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
  AORMnuoz: {
    width: 297,
    height: 118
  },
  CfgkLsIu: {
    width: 309,
    height: 108
  },
  QxpLRffj: {
    width: 308,
    height: 117
  },
  jvKNlNat: {
    width: 308,
    height: 103
  },
  nxAbLteI: {
    width: 308,
    height: 106
  }
});
export default FiveRows;