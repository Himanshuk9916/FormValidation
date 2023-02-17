import { BlurView } from '@react-native-community/blur';
import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, Dimensions, Animated } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { PanGestureHandler, State } from 'react-native-gesture-handler'

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const GlassMorphism = () => {

    const DraggableBox = (props:any) => {
        const _transalateX = new Animated.Value(0);
        const _transalateY = new Animated.Value(0);
        const _lastOffset = { x: 0, y: 0 };

        const _onHandlerStateChange = (event: {
            nativeEvent: {
                translationY: number;
                translationX: number; oldState: any;
            };
        }) => {
            if (event.nativeEvent.oldState === State.ACTIVE) {
                _lastOffset.x += event.nativeEvent.translationX;
                _lastOffset.y += event.nativeEvent.translationY;
                _transalateX.setOffset(_lastOffset.x);
                _transalateX.setValue(0);
                _transalateY.setOffset(_lastOffset.y);
                _transalateY.setValue(0);
            }
        }

        const _onGestureEvent = Animated.event([
            {
                nativeEvent: {
                    translationX: _transalateX,
                    transalationY: _transalateY
                }
            }
        ], {
            useNativeDriver: true,
        })

        return (
            <PanGestureHandler {...props} onGestureEvent={_onGestureEvent} onHandlerStateChange={_onHandlerStateChange}>
                <Animated.View>
                </Animated.View>
            </PanGestureHandler>
        )
    }
    return (
        <SafeAreaView style={styles.container}>
            <Image source={require('../assets/gradientView.jpeg')} style={styles.bgImg} />
            <Image source={require('../assets/abstract.jpeg')} style={styles.abstractImg} />
            <View style={styles.subContainer}>
                {/* <DraggableBox> */}
                <BlurView
                    blurType='light'
                    blurAmount={20}
                    style={styles.cardContainer}
                >
                    <LinearGradient colors={['rgba(0,0,0,0.1)', 'rgba(0,0,0,0.2)']} start={{ x: 0, y: 1 }} end={{ x: 1, y: 1 }}
                        useAngle angle={110}
                        style={styles.card}
                    ></LinearGradient>
                </BlurView>
                {/* </DraggableBox> */}
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bgImg: {
        height: '100%',
        // width:undefined,
        aspectRatio: 1,
        // zIndex:1
    },
    abstractImg: {
        position: 'absolute',
        width: screenWidth,
        aspectRatio: 1,
        zIndex: 0,
        // height:screenHeight/2
    },
    subContainer: {
        display: 'flex',
        height: 100,
        width: 100,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardContainer: {
        width: 250,
        height: 250,
    },
    card: {
        height: '100%',
        width: '100%',
        borderColor: '#(225,225,225,0.3)',
        borderRadius: 20,
        borderWidth: 1
    }
})

export default GlassMorphism;