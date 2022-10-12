import React from "react";
import {View, Text, StyleSheet, Image, Dimensions,} from "react-native";
import {bgtopehac, myehac, crtehac} from "../../assets";

const windowHeight = Dimensions.get("window").height;
const {width, height} = Dimensions.get("window");

export default EhacScreen = ({ navigation }) => {
    return (
        <View style={styles.bgApp}>
            <View>
                <Image source={bgtopehac} style={styles.gambartop} />
            </View>

            <View style={styles.item}>
                <View style={{flexDirection: 'row'}}>
                    <Image source={crtehac} style={styles.gambar1}/>
                        <View style={{flexDirection: 'column'}}>
                            <Text style={styles.teks1}>Create e-HAC</Text>
                            <Text style={styles.teks11}>Electronic Health Alert Card</Text>
                        </View>
                </View>
                    <View style={{borderBottomColor: 'black', borderBottomWidth: StyleSheet.hairlineWidth,width:220,marginStart:90,}} />
                <View style={{flexDirection: 'row'}}>
                    <Image source={myehac} style={styles.gambar2}/>
                        <View style={{flexDirection: 'column'}}>
                            <Text style={styles.teks2}>My e-HAC</Text>
                            <Text style={styles.teks22}>Check your history eHAC here</Text>
                        </View>
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
        bgApp: {
          flex: 1,
          backgroundColor: "white",
        },
        item: {
            backgroundColor: "white",
            padding: 15,
            borderRadius: 15,
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: 220,
            marginTop: windowHeight / 23,
            marginLeft: 17,
            marginRight: 17,
            shadowColor: "black",
            shadowOffset: {
            width: 0,
            height: 12,},
            shadowOpacity: 0.58,
            shadowRadius: 16.00,
            elevation: 24,
        },
        gambartop: {
            height: 230,
            width: width,
            
        },
        gambar1: {
            borderRadius: 20,
            height:80,
            width:80,
            resizeMode: "contain"
        },
        gambar2: {
            borderRadius: 20,
            height:80,
            width:80,
            resizeMode: 'contain'
        },
        teks1: {
            fontWeight: 'bold',
            fontSize: 18,
            top: 5,
            marginLeft: 10
        },
        teks11: {
            fontSize: 16,
            top: 5,
            marginLeft: 10,
            color: '#8A8A8A'
        },
        teks2: {
            fontWeight: 'bold',
            fontSize: 18,
            top: 5,
            marginLeft: 10
        },
        teks22: {
            fontSize: 16,
            top: 5,
            marginLeft: 10,
            color: '#8A8A8A'
        },
      });