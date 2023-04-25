import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import HeaderText from "./components/HeaderText";
import BigCard from "./components/BigCard";
import BodyCards from "./components/BodyCards";
import BodyText from "./components/BodyText";
import Footer from "./components/Footer";

export default function App() {
  return (
    <SafeAreaView style={styles.parentElement}>
      <Header />
      <HeaderText />
      <BigCard />
      <BodyCards />
      <BodyText />
      <Footer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  parentElement: {
    margin: 25,
    backgroundColor: "#fefefd",
  },
});
