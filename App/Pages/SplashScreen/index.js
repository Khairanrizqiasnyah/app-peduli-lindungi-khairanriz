import * as React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import {bumnlogo,kemenkeslogo,kominfologo,kpclogo,peduli,} from "../../assets";
const windowHeight = Dimensions.get("window").height;

export default SplashScreen = ({ navigation }) => {

React.useEffect(() => {setTimeout(() => {navigation.replace("LoginScreen");}, 3000);}, [navigation]);

  return (
    <View style={styles.bgApp}>
      <View style={styles.imgContainer}>
        <Image source={peduli} style={styles.imgStyle} />
      </View>
      <View style={styles.container}>
        <Text style={styles.footerText}>Bekerjasama Dengan :</Text>
      </View>
      <View style={styles.imgStyle2}>
        <Image source={kpclogo} style={styles.imgSize} />
        <Image source={kominfologo} style={styles.imgSize} />
        <Image source={kemenkeslogo} style={styles.imgSize} />
        <Image source={bumnlogo} style={styles.imgSize} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bgApp: {
    flex: 1,
  },
  imgContainer: {
    alignItems: "center",
  },
  container: {
    margin: 40,
  },
  imgStyle: {
    marginTop: windowHeight / 3,
    marginBottom: 10,
    resizeMode: "contain",
    height: 80,
  },
  imgStyle2: {
    flexDirection: "row",
    marginRight: 30,
    marginLeft: 40,
  },
  imgSize: {
    width: null,
    resizeMode: "contain",
    height: 50,
    margin: 0,
    flex: 1,
  },
  headerText: {
    textAlign: "left",
    fontSize: 30,
    fontWeight: "bold",
  },
  bodyText: {
    marginTop: 10,
    marginBottom: 50,
    fontSize: 16,
  },
  footerText: {
    marginTop: 250,
    fontSize: 16,
    marginBottom: 0,
  },
})
