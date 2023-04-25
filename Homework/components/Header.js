import { StyleSheet, View } from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";

const Header = () => {
  return (
    <View style={styles.header}>
      <AntDesign name="dotchart" style={styles.dotsMenu} />
      <Feather name="search" style={styles.search} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 30,
  },
  dotsMenu: {
    fontSize: 28,
    color: "gray",
  },
  search: {
    fontSize: 23,
    color: "gray",
  },
});
