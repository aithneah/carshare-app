import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import {Button, Icon} from "react-native-elements";

class NavigationContentComponent extends Component {
    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route,
        });
        this.props.navigation.dispatch(navigateAction);
    };

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={this.navigateToScreen('Routes')}
                    style={styles.listNavElement}>
                    <View style={styles.listNavElementIcon}>
                        <Icon name='car'
                              type='font-awesome'
                              color='white'/></View>
                    <Text style={styles.listNavElementText}>
                        TRASY
                    </Text>
                    <View style={styles.listNavElementIcon}>
                    <Icon name='caret-right'
                          type='font-awesome'
                          color='white'/></View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={this.navigateToScreen('Profile')}
                    style={styles.listNavElement}>
                    <View style={styles.listNavElementIcon}>
                        <Icon name='user'
                              type='font-awesome'
                              color='white'/></View>
                    <Text style={styles.listNavElementText}>
                        PROFIL
                    </Text>
                    <View style={styles.listNavElementIcon}>
                    <Icon name='caret-right'
                          type='font-awesome'
                          color='white'/></View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={this.navigateToScreen('History')}
                    style={styles.listNavElement}>
                    <View style={styles.listNavElementIcon}>
                        <Icon name='history'
                              type='font-awesome'
                              color='white'/></View>
                    <Text style={styles.listNavElementText}>
                        HISTORIA PRZEJAZDÓW
                    </Text>
                    <View style={styles.listNavElementIcon}>
                    <Icon name='caret-right'
                          type='font-awesome'
                          color='white'/></View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={this.navigateToScreen('Ratings')}
                    style={styles.listNavElement}>
                    <View style={styles.listNavElementIcon}>
                        <Icon name='trophy'
                              type='font-awesome'
                              color='white'/></View>
                    <Text style={styles.listNavElementText}>
                        OCENY
                    </Text>
                    <View style={styles.listNavElementIcon}>
                    <Icon name='caret-right'
                          type='font-awesome'
                          color='white'/></View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={this.navigateToScreen('Notifications')}
                    style={styles.listNavElement}>
                    <View style={styles.listNavElementIcon}>
                        <Icon
                            name='bell'
                            type='font-awesome'
                            color='white'/></View>
                    <Text style={styles.listNavElementText}>
                        POWIADOMIENIA
                    </Text>
                    <View style={styles.listNavElementIcon}>
                    <Icon name='caret-right'
                          type='font-awesome'
                          color='white'/></View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={this.navigateToScreen('Settings')}
                    style={styles.listNavElement}>
                    <View style={styles.listNavElementIcon}>
                        <Icon name='cogs'
                              type='font-awesome'
                              color='white'/></View>
                    <Text style={styles.listNavElementText}>
                        USTAWIENIA
                    </Text>
                    <View style={styles.listNavElementIcon}>
                    <Icon name='caret-right'
                          type='font-awesome'
                          color='white'/></View>
                </TouchableOpacity>
                <View style={styles.buyProContainer}>
                    <Text style={styles.buyProContainerCaption}>
                        Chcesz pozbyć się reklam?</Text>
                    <Text style={styles.buyProContainerCaption}>
                        Wybierz wersję premium już za</Text>
                    <Text style={styles.buyProContainerPrice}>
                        12.99zł
                    </Text>
                    <Button
                        title="Dowiedz się więcej"
                        buttonStyle={styles.buyProContainerButton}/>
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        backgroundColor: "#1a6047",
        flex: 1
    },
    navItemStyle: {
        padding: 10
    },
    navSectionStyle: {
        backgroundColor: 'lightgrey'
    },
    sectionHeadingStyle: {
        paddingVertical: 10,
        paddingHorizontal: 5
    },
    footerContainer: {
        padding: 20,
        backgroundColor: 'lightgrey'
    },
    listNavElement: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomColor: "#004332",
        borderBottomWidth: 1
    },
    listNavElementIcon: {
        flex: 1,
    },
    listNavElementText: {
        flex: 5,
        color: "white",
        textAlign: "left",
    },
    buyProContainer: {
        flex: 6,
        flexDirection: "column",
        paddingTop: 10
    },
    buyProContainerCaption: {
        color: "#6ABB9E",
        fontSize: 14,
        textAlign: "center",
        paddingHorizontal: 5
    },
    buyProContainerPrice: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        paddingBottom: 10
    },
    buyProContainerButton: {
        backgroundColor: "#004332",
        borderColor: "transparent",
        borderWidth: 0,
        borderRadius: 5
    }
});
/*<View style={styles.footerContainer}>*/
/*<Text>This is fixed footer with buy app</Text>*/
/*</View>*/
NavigationContentComponent.propTypes = {
    navigation: PropTypes.object
};


export default NavigationContentComponent;