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
    constructor(props) {
        super(props);
        this.state = {free: false};
        this.getStatus();
    }

    getStatus() {
        fetch("http://localhost:3000/api/user", {
            method: "POST",
            body: JSON.stringify({id: "kmdeepthi"})
        }).then((response) => response.json())
            .then((responseData) => {
                console.log(responseData.free);
                this.setState({free: responseData.free});
            })
            .done();
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <Text style={styles.content}>Deepthi is </Text>
                <Text style={styles.content}>{this.state.free ? "Free" : "Busy"}</Text>
            </View>
        )
    }
}

export default Main;