import { StyleSheet, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const BodyText = () => {
  return (
    <View style={styles.body}>
      <Text style={styles.bodyText}>Recents Files</Text>
      <Text style={styles.footerText}>View All</Text>
    </View>
  );
};

export default BodyText;

const styles = StyleSheet.create({
  body: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 25,
  },
  bodyText: {
    fontSize: 23,
    color: "#3c4266",
    fontWeight: 600,
    fontFamily: "Helvetica",
  },
  footerText: {
    fontSize: 15,
    fontWeight: 400,
    color: "#7b7e90",
    fontFamily: "Helvetica",
  },
});
