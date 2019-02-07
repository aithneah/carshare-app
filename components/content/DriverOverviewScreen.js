import React, {Component} from 'react';
import {View, Text, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import TopBarComponent from "../topBar/TopBarComponent";
import {DrawerActions} from "react-navigation-drawer";
import RouteTileComponent from "./RouteTileComponent";
import {Icon} from 'react-native-elements';

class DriverOverviewScreen extends Component {
    render() {
        return <View style={styles.allRoutesScreenContainer}>
            <TopBarComponent paddingTopPlatform={this.props.screenProps.height}
                             menuClick={() => this.props.navigation.dispatch(DrawerActions.toggleDrawer())}/>
            <View style={styles.allRoutesScreenContent}>
                <ScrollView>
                    <RouteTileComponent from={"Ul. Szczepanika 2"}
                                        to={"Pl. Bema 13"}
                                        routeType={"car"}
                                        daysOfWeek={["MONDAY", "TUESDAY", "FRIDAY"]}
                                        hour={"8:00"}
                                        validSince={"15.12.2018"}
                                        validTo={"22.02.2019"}
                                        views={33}
                                        interested={14}/>
                    <RouteTileComponent from={"Ul. Braniborska 5"}
                                        to={"Ul. Mielna 18"}
                                        routeType={"car"}
                                        daysOfWeek={["MONDAY", "THURSDAY"]}
                                        hour={"19:30"}
                                        validSince={"01.12.2018"}
                                        validTo={"24.12.2018"}
                                        views={5}
                                        interested={1}/>
                </ScrollView>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('DriverWaypoints')} style={styles.plusButton}>
                    <View>
                        <Icon color="white" size={38} name="plus" type="font-awesome"/>
                    </View>
                </TouchableOpacity>
            </View>
        </View>;
    };
}

export default DriverOverviewScreen;

const styles = StyleSheet.create({
    allRoutesScreenContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch'
    },
    allRoutesScreenContent: {
        flex: 10
    },
    plusButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        zIndex:11,
        bottom: 15,
        right: 15,
        width: 55,
        height: 55,
        backgroundColor: "#1A6047",
        borderColor: "transparent",
        borderWidth: 0,
        borderRadius: 100,
        elevation: 8,
        shadowColor: "#000000",
        shadowOpacity: 1,
        shadowRadius: 5,
        shadowOffset: {width: 0, height: 0}
    },
});