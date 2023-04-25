import { StyleSheet, View, Text } from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";

const FooterCard = ({ title1, title2 }) => {
  return (
    <View style={styles.cards}>
      <View style={styles.cardBody}>
        <View>
          <AntDesign style={styles.icon} name="folder1" />
        </View>
        <View>
          <Text style={styles.headerText}>{title1}</Text>
          <Text style={styles.footerText}>{title2}</Text>
        </View>
        <View>
          <Entypo style={styles.dots} name="dots-three-vertical" />
        </View>
      </View>
    </View>
  );
};

export default FooterCard;

const styles = StyleSheet.create({
  cardBody: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 23,
    backgroundColor: "#fff",
    shadowColor: "lightgrey",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,
    borderRadius: 13,
  },
  icon: {
    fontSize: 50,
    color: "#3c4266",
  },
  dots: {
    fontSize: 25,
    color: "lightgrey",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#3c4266",
    marginBottom: 2,
  },
  footerText: {
    fontSize: 12,
    fontWeight: "500",
    color: "#7b7e90",
  },
});
