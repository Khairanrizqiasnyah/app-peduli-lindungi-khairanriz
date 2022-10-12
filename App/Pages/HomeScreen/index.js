import * as React from "react";
import {  View,Text,StyleSheet,Image,Dimensions,Alert,Linking} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import {lonceng, user,tangan,panah, vaksin, covid, ehac, scan, travel, telemedicine, healthcare, 
statistik, hospital} from "../../assets";

const windowHeight = Dimensions.get("window").height;

export default HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.bgMainApp}>
      <View style={styles.container}>
        <Image source={user} style={styles.imgSize} />
        <Text style={styles.hi}>Hi, </Text>
        <Text style={styles.sata}>Sata Lesmana</Text>
        <Image source={lonceng} style={styles.imgSize2} />
      </View>

      <View>
        <Image source={user} style={styles.imgSize} />
      </View>
      
      <View style={styles.kotakBiru}>
        <View>
          <Text style={styles.text1}>Entering A Public Space?</Text>
          <Text style={styles.text2}>Stay Alert To Stay Safe</Text>
        </View>
        
        <View>
          <Image source={tangan} style={styles.logo1} />
        </View>
      </View>
      
      <View style={styles.kotakPutih}>
        <View style={styles.row}>
          <Image source={panah} style={styles.panah} />
          <Text style={styles.fonthitam}>Check-In Prefence</Text>
        </View>
        
        <View style={styles.kotakcheck}>
          <View style={styles.row}>
            <Image source={scan} style={styles.scaner} />
            <Text style={styles.fontbiru}>Check-In </Text>
          </View>
        </View>
      </View>
      
      <View style={styles.row}>
        <View style={styles.column}>
          <TouchableOpacity onPress={() => navigation.navigate("ImunizationScreen")}>
            <Image source={vaksin} style={styles.gambar2} />
          </TouchableOpacity>
            <Text style={styles.tulisan}>Vaccine And Immunization</Text>
        </View>

        <View style={styles.column}>
          <TouchableOpacity onPress={() => navigation.navigate("CovidTestScreen")}>
            <Image source={covid} style={styles.gambar2} />
          </TouchableOpacity>
            <Text style={styles.tulisan}>Covid-19 Test                  Results</Text>
        </View>

        <View style={styles.column}>
          <TouchableOpacity onPress={() => navigation.navigate("EhacScreen")}>
            <Image source={ehac} style={styles.gambar2} />
          </TouchableOpacity>
            <Text style={styles.tulisan}>EHAC</Text>
        </View>
      </View>
      <View style={styles.row1}>
        <View style={styles.column}>
          <TouchableOpacity onPress={() => Alert.alert("Info", " Module Dalam Pengembangan", 
            [{text: "ok", onPress: () => console.log("ok ditekan"),},])}>
            <Image source={travel} style={styles.gambar2} />
          </TouchableOpacity>
            <Text style={styles.tulisan}>Travel          Regulations</Text>
        </View>
        <View style={styles.column}>
          <TouchableOpacity onPress={() => Alert.alert("Info", " Module Dalam Pengembangan", 
            [{text: "ok",onPress: () => console.log("ok ditekan"),},])}>
            <Image source={telemedicine} style={styles.gambar2} />
          </TouchableOpacity>
            <Text style={styles.tulisan}>Telemedicine</Text>
        </View>

        <View style={styles.column}>
          <TouchableOpacity onPress={() =>Alert.alert("Info", " Module Dalam Pengembangan", 
            [{text: "ok",onPress: () => console.log("ok ditekan"),},])}>
            <Image source={healthcare} style={styles.gambar2} />
          </TouchableOpacity>
            <Text style={styles.tulisan}>Healthcare                 Facility</Text>
        </View>
      </View>

      <View style={styles.row1}>
        <View style={styles.column}>
          <TouchableOpacity onPress={() =>Alert.alert("Info", " Module Dalam Pengembangan", 
            [{text: "ok",onPress: () => console.log("ok ditekan"),},])}>
            <Image source={statistik} style={styles.gambar2} />
          </TouchableOpacity>
            <Text style={styles.tulisan}>Covid-19                Statistic</Text>
        </View>

        <View style={styles.column}>
          <TouchableOpacity onPress={() =>Alert.alert("Info", " Module Dalam Pengembangan", 
            [{text: "ok",onPress: () => console.log("ok ditekan"),},])}>
            <Image source={hospital} style={styles.gambar2} />
          </TouchableOpacity>
            <Text style={styles.tulisan}>Find Hospital              Bed</Text>
        </View>
          <View style={styles.column}></View>
      </View>
      <Text style={{color:'grey', textAlign: 'center', bottom: 15}}>Copyright © Khairan 2022</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  bgMainApp: {
    flex: 1,
  },
  imgContainer: {
    alignItems: "center",
  },
  container: {
    marginTop: 60,
    flexDirection: "row",
  },
  row: {
    flexDirection: "row",
    flex: 1,
    marginRight: 15,
  },
  row1: {
    flexDirection: "row",
    flex: 1,
    marginTop: -70,
    marginRight: 15,
  },
  column: {
    flexDirection: "column",
    flex: 1,
    marginRight: -10,
  },
  tulisan: {
    flex: 1,
    marginTop: 5,
    resizeMode: "contain",
    textAlign: "center",
  },
  kotakBiru: {
    backgroundColor: "#239BD8",
    padding: 30,
    marginHorizontal: 30,
    marginTop: 30,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flexDirection: "row",
    paddingBottom: 0,
    paddingEnd: 0,
  },
  kotakPutih: {
    backgroundColor: "white",
    padding: 15,
    paddingLeft: 15,
    paddingRight: 30,
    marginHorizontal: 30,
    marginTop: -1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: "row",
    paddingBottom: 15,
  },
  kotakcheck: {
    backgroundColor: "#EAF5F9",
    borderRadius: 20,
    flexDirection: "row",
    height: 40,
    width: 120,
    marginLeft: 60,
    marginRight: -20,
    marginTop: -5,
  },
  hi: {
    textAlign: "left",
    fontSize: 20,
    marginTop: 4,
    marginLeft: 10,
    fontWeight: "bold",
  },
  sata: {
    textAlign: "left",
    fontSize: 20,
    marginTop: 4,
    fontWeight: "bold",
    textDecorationLine: "underline",
    marginLeft: 0,
  },
  text1: {
    color: "white",
    fontSize: 17,
    marginRight: 10,
  },
  text2: {
    fontSize: 13,
    color: "white",
    opacity: 0.9,
  },
  gambar2: {
    borderRadius: 20,
    marginLeft: 30,
    marginTop: 20,
    height: 80,
    resizeMode: "contain",
    width: 80,
  },
  fonthitam: {
    fontSize: 14,
    marginLeft: -90,
    fontWeight: "bold",
    color: "#000000",
  },
  fontbiru: {
    fontSize: 14,
    marginLeft: 10,
    marginTop: 10,
    fontWeight: "bold",
    color: "#259AD5",
  },
  logo1: {
    resizeMode: "contain",
    height: 92,
    marginLeft: -60,
    flex: 0,
  },
  panah: {
    resizeMode: "contain",
    height: 20,
    marginLeft: -100,
    marginBottom: 20,
  },
  scaner: {
    resizeMode: "contain",
    width: 23,
    marginTop: -236,
    color: "#259AD5",
    marginLeft: 15,
  },
  imgStyle: {
    marginTop: windowHeight / 8,
    marginBottom: 20,
  },
  Input: {
    borderWidth: 1,
    borderColor: "#0f663f",
    padding: 7,
    marginStart: 20,
    fontSize: 17,
    marginEnd: 20,
    borderRadius: 10,
    padding: 10,
    fontWeight: "bold",
  },
  InputPass: {
    borderWidth: 1,
    borderColor: "#0f663f",
    padding: 7,
    marginStart: 20,
    fontSize: 17,
    marginTop: 20,
    marginEnd: 20,
    borderRadius: 10,
    padding: 10,
    fontWeight: "bold",
  },
  imgStyle2: {
    flexDirection: "row",
  },
  imgSize: {
    resizeMode: "contain",
    marginRight: -70,
    marginLeft: -50,
    alignSelf: "flex-start",
    height: 30,
    flex: 1,
  },
  imgSize2: {
    width: null,
    resizeMode: "contain",
    marginRight: -60,
    marginLeft: 50,
    height: 24,
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
  footherText: {
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