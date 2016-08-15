import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        padding: 30,
        marginTop: 50,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#48BBEC'
    },

    content: {
        color: 'white'
    }
});

class Main extends Component {
    getStatus() {
        fetch("http://localhost:3000/api/user", {
            method: "GET",
            body: JSON.stringify({id: "kmdeepthi"})
        }).then((response) => response.json())
            .then((responseData) => {
                return JSON.stringify("something");
            })
            .done();
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <Text style={styles.content}>Deepthi is </Text>
                <Text style={styles.content}>{this.getStatus()}</Text>
            </View>
        )
    }
}

export default Main;