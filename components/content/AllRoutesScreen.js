import React from 'react';
import {View, Text, StyleSheet,ScrollView} from 'react-native';
import TopBarComponent from "../topBar/TopBarComponent";
import {DrawerActions} from "react-navigation-drawer";
import RouteTileComponent from "./RouteTileComponent";

const AllRoutesScreen = (props) => {
    return <View style={styles.allRoutesScreenContainer}>
        <TopBarComponent paddingTopPlatform={props.screenProps.height}
                         menuClick={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}/>
        <View style={styles.allRoutesScreenContent}>
            <ScrollView>
            <RouteTileComponent from={"Ul. Krakowska 78/5"}
                                to={"Ul. Grunwaldzka 15c"}
                                routeType={"pasenger"}
                                hour={"7:30"}
                                daysOfWeek={["MONDAY", "THURSDAY"]}
                                validSince={"27.12.2018"}
                                validTo={"13.01.2019"}
                                views={19}
                                interested={4}/>
            <RouteTileComponent from={"Ul. Szczepanika 2"}
                                to={"Pl. Bema 13"}
                                routeType={"car"}
                                hour={"8:00"}
                                daysOfWeek={["FRIDAY", "SATURDAY", "SUNDAY"]}
                                validSince={"15.12.2018"}
                                validTo={"22.02.2019"}
                                views={33}
                                interested={14}/>
            <RouteTileComponent from={"Ul. Braniborska 5"}
                                to={"Ul. Mielna 18"}
                                routeType={"car"}
                                daysOfWeek={["TUESDAY", "FRIDAY"]}
                                hour={"19:30"}
                                validSince={"01.12.2018"}
                                validTo={"24.12.2018"}
                                views={5}
                                interested={1}/>
            </ScrollView>
            {/*<View style={styles.plusButton}>*/}
                {/*<Icon color="white" size={38} name="plus" type="font-awesome"/>*/}
            {/*</View>*/}
        </View>
    </View>;
};

export default AllRoutesScreen;

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
        bottom: 15,
        right: 15,
        width: 55,
        height: 55,
        backgroundColor: "#1A6047",
        borderColor: "transparent",
        borderWidth: 0,
        borderRadius: 100,
        elevation: 5,
        shadowColor: "#000000",
        shadowOpacity: 1,
        shadowRadius: 5,
        shadowOffset: {width: 0, height: 0}
    },
});

