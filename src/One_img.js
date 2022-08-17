import React from "react";
import { Button, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default One_img = ({route}) => {

    return (
        <View style={styles.container}>
            <Image source={{ uri: route.params }} style={{ width: '90%', height: '90%', resizeMode: 'contain', marginTop: 20 }} />
            <StatusBar style="auto" />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#87CEEB',
        alignItems: 'center',
        justifyContent: 'center',
    },
});