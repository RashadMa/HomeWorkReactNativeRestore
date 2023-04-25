import { StyleSheet, View, Text } from "react-native";
import FooterCard from "./FooterCard";

const Footer = () => {
  const datas = [
    {
      title1: "Google UX Course",
      title2: "Uploaded on April 28",
    },
    {
      title1: "Dribble Shot Filer",
      title2: "Uploaded on April 28",
    },
  ];

  return (
    <View style={styles.cards}>
      {datas.map((item) => (
        <FooterCard title1={item.title1} title2={item.title2} />
      ))}
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  cards: {
    gap: 10,
  },
});
