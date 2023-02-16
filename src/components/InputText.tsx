import React from "react";
import { View, Text, TextInput, StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width

function InputText(props: any) {
    console.log('error',props.error)

    return (
        <>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between',paddingHorizontal:20 }}>
                <Text style={styles.text}>{props.label}</Text>
                {props.error ? <Text style={[styles.text, { color: 'red' }]}>{props.error}</Text> : null}
            </View>
            <TextInput
                {...props}
                placeholder={props.placeholder}
                style={styles.input}
            />
        </>
    )
}

const styles = StyleSheet.create({
    input: {
        borderColor: 'black',
        borderWidth: 1,
        width: screenWidth - 50,
        borderRadius: 30,
        marginVertical: 10
    },
    text: {
        fontWeight: 'bold'
    }
})

export default InputText;