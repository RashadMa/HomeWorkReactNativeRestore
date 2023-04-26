import React from "react";
import { View, StyleSheet } from "react-native";
import Card from "./Card";

const BodyCards = () => {
  const datas = [
    {
      icon: "addfile",
      headerText: "Picture",
      bodyText: "896 items",
      color: "#ffb161",
    },
    {
      icon: "file1",
      headerText: "Video",
      bodyText: "336 items",
      color: "#45f0e2",
    },
    {
      icon: "filetext1",
      headerText: "Picture",
      bodyText: "289 items",
      color: "#ff72fd",
    },
    {
      icon: "jpgfile1",
      headerText: "Picture",
      bodyText: "289 items",
      color: "#66d7f9",
    },
    {
      icon: "pdffile1",
      headerText: "Picture",
      bodyText: "289 items",
      color: "#7b60d7",
    },
  ];
  return (
    <View style={styles.cards}>
      {datas.map((item) => (
        <Card
          headerText={item.headerText}
          icon={item.icon}
          bodyText={item.bodyText}
          color={item.color}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  cards: {
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//     gap: 40,
  },
});

export default BodyCards;
