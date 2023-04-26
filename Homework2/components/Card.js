import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
const Card = ({icon, color, headerText, bodyText}) => {
  return (
    <View style={styles.parentElement}>
      <View style={styles.ment}>
        <View style={[styles.iconBackground, { backgroundColor: color }]}>
          <AntDesign style={styles.icon} name={icon} />
        </View>
        <View style={styles.marg}>
          <Text style={styles.headerText}>{headerText}</Text>
          <Text style={styles.bodyText}>{bodyText}</Text>
        </View>
      </View>
      <View>
        <FontAwesome style={styles.angle} name="angle-right" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentElement: {
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
    backgroundColor: "white",
    padding:15
  },
  icon: {
    fontSize: 30,
  },
  iconBackground: {
    borderRadius: 19,
    //     backgroundColor: "white",
    padding: 15,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "500",
  },
  bodyText: {
    fontSize: 16,
    fontWeight: "400",
    color: "grey",
  },
  ment: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  marg: {
    marginLeft: 30,
  },
  angle: {
    fontSize: 35,
    color: "grey",
    marginRight: 15,
  },
});

export default Card;
