import { StyleSheet, View, Text } from "react-native";
import { AntDesign, Ionicons, Feather } from "@expo/vector-icons";
import Card from "./Card";

const BodyCards = () => {
  const datas = [
    {
      icon: "picture",
      title: "Picture",
      items: "896 items",
      color: "#fc7efe",
    },
    {
      icon: "videocamera",
      title: "Video",
      items: "336 items",
      color: "#fdbb74",
    },
    {
      icon: "filetext1",
      title: "Picture",
      items: "289 items",
      color: "#48d2f8",
    },
  ];

  return (
    <View style={styles.cards}>
      {datas.map((item) => (
        <Card title={item.title} icon={item.icon} items={item.items} color={item.color} />
      ))}
    </View>
  );
};

export default BodyCards;

const styles = StyleSheet.create({
  cards: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 40,
  },
});
