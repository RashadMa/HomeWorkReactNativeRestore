import { StyleSheet, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const BigCard = () => {
  return (
    <View style={styles.card}>
      <View>
        <Ionicons name="thunderstorm" style={styles.thunderStorm} />
      </View>
      <View style={styles.rightSide}>
        <Text style={styles.headText}>Unlimited Storage</Text>
        <Text style={styles.bodyText}>$30/year</Text>
        <Text style={styles.footerText}>Offer till May 26</Text>
        <View style={styles.buttonParent}>
          <Text style={styles.button}>Upgrade</Text>
        </View>
      </View>
    </View>
  );
};

export default BigCard;

const styles = StyleSheet.create({
  card: {
    marginVertical: 30,
    flexDirection: "row",
    justifyContent: "spaceBetween",
    padding: 40,
    backgroundColor: "#885efe",
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  thunderStorm: {
    fontSize: 100,
    color: "#e3e0e1",
    transform: [{ rotate: "-27deg" }],
  },
  rightSide: {
    marginLeft: "20%",
  },
  headText: {
    fontSize: 15,
    color: "#fdfaff",
    fontWeight: "500",
    marginBottom: 5,
  },
  bodyText: {
    fontSize: 30,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 5,
  },
  footerText: {
    fontSize: 15,
    color: "#fdfaff",
    fontWeight: "700",
    marginBottom: 15,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: 15,
    fontWeight: "600",
  },
  buttonParent: {
    padding: 8,
    borderRadius: 30,
    backgroundColor: "#fbab2b",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
