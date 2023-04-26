import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import * as Progress from "react-native-progress";

const Header = () => {
  return (
    <View style={styles.bodyColor}>
      <View style={styles.parentElement}>
        <View style={styles.headerSection}>
          <FontAwesome style={styles.icons} name="angle-left" />
          <Text style={styles.text}>Google Course</Text>
          <MaterialCommunityIcons style={styles.icons} name="dots-vertical" />
        </View>
        <View style={styles.toggle}>
          <View style={styles.styleToggle}>
            <Text style={styles.toggleText}>Storage</Text>
          </View>
          <View style={[styles.styleToggle, { backgroundColor: "white" }]}>
            <Text style={styles.toggleText2}>Cloudes</Text>
          </View>
        </View>
        <View style={styles.memorySection}>
          <View style={styles.memoryTextBody}>
            <Text style={styles.used}>Used 186 GB</Text>
            <Text style={styles.used}>Total 256 GB</Text>
          </View>
          <View>
            <Progress.Bar style={styles.progress} progress={0.8} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentElement: {
    margin: 25,
    marginTop: "16%",
  },
  bodyColor: {
    backgroundColor: "#8661f3",
    borderBottomEndRadius: "26",
    borderBottomStartRadius: "26",
    height: "30%",
  },
  headerSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
  icons: {
    fontSize: 23,
    color: "white",
  },
  toggle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: "6%",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 40,
  },
  toggleText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
    marginHorizontal: 40,
    marginVertical: 13,
  },
  toggleText2: {
    color: "#cfd5e1",
    fontSize: 18,
    fontWeight: "600",
    marginHorizontal: 40,
    marginVertical: 13,
  },
  styleToggle: {
    backgroundColor: "#fd75ff",
    borderRadius: 30,
  },
  memoryTextBody: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  memorySection: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 14,
    // transform: "translateY(50deg)",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  used: {
    fontSize: 17,
    fontWeight: "500",
  },
  progress: {
    marginTop: 20,
    width: "100%",
  },
});

export default Header;
