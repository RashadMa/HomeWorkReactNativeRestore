import { StatusBar } from "expo-status-bar";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Cards from "./components/Cards";

export default function App() {
  return <Cards />;
  // const datas = [
  //   {
  //     // avatar: "./assets/businessman-character-avatar-isolated_24877-60111.avif",
  //     userName: "Rashad",
  //     title: "Pink Floyd Guy",
  //     follow: 2631,
  //     like: 290,
  //     smelting: 100,
  //     ranking: 10,
  //   },
  // ];
  // return (
  //   <SafeAreaView style={styles.parentElement}>
  //     <View>
  //       <View style={styles.avatarElement}>
  //         <Image
  //           style={styles.img}
  //           // source={require({avatar})}
  //         />
  //       </View>
  //       <View style={styles.profile}>
  //         <View style={styles.userName}>
  //           <Text style={styles.userNameText}>{userName}</Text>
  //           <Text style={styles.title}>Title: {title}</Text>
  //         </View>
  //         <View style={styles.rating}>
  //           <Text style={styles.ratingText}></Text>
  //           <Text style={styles.ratingCount}></Text>
  //         </View>
  //       </View>
  //     </View>
  //     <View>
  //       <View></View>
  //       <View></View>
  //     </View>
  //   </SafeAreaView>
  // );
}

const styles = StyleSheet.create({
  parentElement: {
    borderWidth: 1,
    margin: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
});
