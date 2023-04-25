import { StyleSheet, View, Text } from "react-native";

const HeaderText = () => {
  return (
    <View>
      <Text style={styles.headerText}>Hi Rashad</Text>
      <Text style={styles.bodyText}>Can't resist the wall</Text>
    </View>
  );
};

export default HeaderText;

const styles = StyleSheet.create({
  headerText: {
    fontSize: 22,
    fontWeight: 500,
    color: "#7b7e90",
    fontFamily: "Helvetica"
  },
  bodyText: {
    fontSize: 28,
    color: "#3c4266",
    fontWeight: 600,
    fontFamily: "Helvetica"
  },
  search: {
    fontSize: 23,
    color: "gray",
  },
});
