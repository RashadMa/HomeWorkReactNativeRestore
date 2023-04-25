import { StyleSheet, View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Card = ({ title, icon, items, color = "orange" }) => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={[styles.iconParent, , { backgroundColor: color }]}>
          <AntDesign style={styles.icon} name={icon} />
        </View>
        <View style={styles.body}></View>
        <View style={styles.footer}></View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.headerText}>{title}</Text>
        <Text style={styles.footerText}>{items}</Text>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  cards: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "#ffffff",
    shadowColor: "lightgrey",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
    borderRadius: 20,
    padding: 15,
  },
  icon: {
    fontSize: 35,
    color: "white",
  },
  iconParent: {
    padding: 17,
    borderRadius: 15,
  },
  footer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    color: "#3c4266",
    fontWeight: "700",
    fontSize: 16,
    marginVertical: 7,
  },
  footerText: {
    color: "#7b7e90",
  },
});
