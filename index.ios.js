/**
 * React Native App
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    NavigatorIOS
} from 'react-native';

import Main from './app/components/Main';

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#48BBEC'
    },

    content: {
        color: 'white'
    }
});

class findmefree extends Component {
    render() {
        return (
            <NavigatorIOS
                style={styles.mainContainer}
                initialRoute={{
                title: 'Find me free',
                component: Main
                }}/>
        );
    }
}

AppRegistry.registerComponent('findmefree', () => findmefree);
