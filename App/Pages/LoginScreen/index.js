import * as React from "react";
import {View,Text,StyleSheet,Image,Dimensions,TextInput,} from "react-native";
import {bumnlogo,kemenkeslogo,kominfologo,kpclogo,toppeduli,} from "../../assets";
import { PrimaryButton } from "../../Componets";
const windowHeight = Dimensions.get("window").height;

export default SignupScreen = ({ navigation }) => {
  return (
    <View style={styles.bgApp}>
      <View style={styles.imgContainer}>
        <Image source={toppeduli} style={styles.imgStyle} />
      </View>
      <View>
        <TextInput
          style={styles.Input}
          placeholder="Masukan Email Anda"
        />
        <TextInput
          style={styles.InputPassword}
          placeholder="Masukkan Password Anda"
        />
        <PrimaryButton
          title="Login"
          style={styles.customeButton}
          onPress={() => navigation.navigate("HomeScreen")}
        />
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
    marginTop: windowHeight / 8,
    marginBottom:20,
  },
  Input: {
    borderWidth: 1,
    borderColor: "#239BD8",
    padding: 7,
    marginStart: 20,
    fontSize: 17,
    marginEnd: 20,
    borderRadius: 10,
    padding: 10,
  },
  InputPassword: {
    borderWidth: 1,
    borderColor: "#239BD8",
    padding: 7,
    marginStart: 20,
    fontSize: 17,
    marginTop: 20,
    marginEnd: 20,
    borderRadius: 10,
    padding: 10,
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
    marginTop: 100,
    fontSize: 16,
    marginBottom: 0,
  },
  customeButton: {
    marginTop: 30,
    marginRight: 30,
    marginLeft: 30,
  },
});