import { BlurView } from '@react-native-community/blur';
import React from 'react';
import {View,Text, SafeAreaView, StyleSheet, Image,Dimensions} from 'react-native';

const screenWidth=Dimensions.get('window').width;
const screenHeight=Dimensions.get('window').height;

const GlassMorphism=()=>{
    return(
        <SafeAreaView style={styles.container}>
            <Image source={require('../assets/gradientView.jpeg')} style={styles.bgImg}/>
            <Image source={require('../assets/abstract.jpeg')} style={styles.abstractImg}/>
            <View style={styles.subContainer}>
            <BlurView 
            blurType='light'
            blurAmount={20}
            style={styles.cardContainer}
            >
                <Text style={{fontSize:30,color:"black"}}>ABCD</Text>
            </BlurView>
            </View>
        </SafeAreaView>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    bgImg:{
        height:'100%',
        // width:undefined,
        aspectRatio:1,
        // zIndex:1
    },
    abstractImg:{
        position:'absolute',
        width:screenWidth,
        aspectRatio:1,
        zIndex:5,
        // height:screenHeight/2
    },
    subContainer:{
        display:'flex',
        height:100,
        width:100,
        position:'absolute',
        alignItems:'center',
        justifyContent:'center',
    },
    cardContainer:{
        width:250,
        height:250,
    }
})

export default GlassMorphism;