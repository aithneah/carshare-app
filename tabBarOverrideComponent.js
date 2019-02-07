import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import {Button, Icon} from "react-native-elements";
import TopBarComponent from "./components/topBar/TopBarComponent";


class TabBarOverrideComponent extends Component {
    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route,
        });
        this.props.navigation.dispatch(navigateAction);
    };

    render() {
        let index = this.props.navigation.state.index;
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.navigateToScreen('AllRoutes')}>
                    <Icon
                        name='home'
                        color={index === 0 ? "#1A6047" : "#979797"}
                        type='font-awesome'/>
                    <Text style={{color: (index === 0 ? "#1A6047" : "#979797")}}>Start</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.navigateToScreen('Passenger')}>
                    <Icon
                        name='male'
                        color={index === 2 ? "#1A6047" : "#979797"}
                        type='font-awesome'/>
                    <Text style={{color: (index === 2 ? "#1A6047" : "#979797")}}>Pasażer</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.navigateToScreen('Driver')}>
                    <Icon name='car'
                          color={index === 1 ? "#1A6047" : "#979797"}
                          type="font-awesome"/>
                    <Text style={{color: (index === 1 ? "#1A6047" : "#979797")}}>Kierowca</Text>
                </TouchableOpacity>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: "#F3F3F3",
        paddingVertical: 8
    }
});

export default TabBarOverrideComponent