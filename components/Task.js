import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const task = (props) => {
    return(
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View style={styles.circular}>
            </View>
        </View>
    )
}

const styles= StyleSheet.create({
    item:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 15,
        backgroundColor: '#fff',
        marginBottom: 20,
        borderRadius: 10
    },
    itemLeft: {
        flexDirection:'row',
        alignItems:'center',
        flexWrap: 'wrap'
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15
    },
    itemText: {
        maxWidth: '80%'
    },
    circular: {
        width: 12,
        height: 12,
        borderRadius: 5,
        borderColor: '#55BCF6',
        borderWidth: 2
    }
})

export default task