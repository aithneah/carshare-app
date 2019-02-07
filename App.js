import React from 'react';
import {Platform, StatusBar, StyleSheet, View} from 'react-native';
import {RootNavigator} from "./Navigation";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            driverRoutes: null,
            passengerRoutes: null
        };
    }


    render() {
        const height = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

        return (
            <View style={styles.container}>
                <RootNavigator screenProps={{height: height}}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch'
    }
});

export default App;