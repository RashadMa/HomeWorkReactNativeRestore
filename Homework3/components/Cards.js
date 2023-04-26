import { Entypo } from "@expo/vector-icons";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";

const Cards = () => {
  const datas = [
    {
      // avatar: "./assets/businessman-character-avatar-isolated_24877-60111.avif",
      userName: "Rashad",
      title: "Pink Floyd Guy",
      follow: 2631,
      like: 290,
      smelting: 100,
      ranking: 10,
    },
  ];
  return (
    <SafeAreaView style={styles.parentElement}>
      <View style={styles.merg}>
        <View style={styles.avatarElement}>
          <Image
            style={styles.img}
            source={require("../assets/businessman-character-avatar-isolated_24877-60111.avif")}
          />
        </View>
        <View style={styles.profile}>
          <View style={styles.userName}>
            <Text style={styles.userNameText}>asdasdas</Text>
            <Text style={styles.title}>Title: asdasdas</Text>
          </View>
          <View style={styles.some}>
            <View>
              <Text>123213</Text>
              <Text>Follow</Text>
            </View>
            <View>
              <Text>123213</Text>
              <Text>Like</Text>
            </View>
            <View>
              <Text>123213</Text>
              <Text>Smelting</Text>
            </View>
          </View>
        </View>
      </View>
      <View>
        <View>

        </View>
        <View>asdasdas</View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  parentElement: {
    flexDirection: "row",
    borderWidth: 1,
    margin: 35,
    justifyContent: "space-between",
    alignItems: "center",
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  merg: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  userName: {
    marginLeft: 20,
    marginTop: 25,
    //     alignItems: "center",
  },
  some: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
    marginTop: 10,
  },
});

export default Cards;
