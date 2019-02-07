import React, {Component} from 'react';
import {StyleSheet, Switch, Text, TouchableOpacity, View} from "react-native";
import TopBarComponent from "../topBar/TopBarComponent";
import {DrawerActions} from "react-navigation-drawer";
import {FormInput} from "react-native-elements";
import axios from "react-native-axios";

class DriverPrefferencesScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            withChildren: false,
            withAnimals: false,
            isDisabled: false,
            comment: "",
            peopleCount: 1
        }
    }

    render() {
        const params = this.props.navigation.state.params;

        return <View style={styles.driverMapsContainer}>
            <TopBarComponent paddingTopPlatform={this.props.screenProps.height}
                             menuClick={() => this.props.navigation.dispatch(DrawerActions.toggleDrawer())}/>
            <View style={styles.driverWaypointsProgressBar}>
                <Text style={styles.driverWaypointsProgressBarText}>KROK 4 Z 4: WYBÓR PREFERENCJI</Text>
            </View>
            <View style={styles.driverWaypointsContent}>
                <View style={styles.preffer}>
                    <Text style={styles.prefferText}>Podróżowanie z dzieckiem:</Text>
                    <Switch trackColor={{false: "#C5C5C5", true: "#358668"}}  ios_backgroundColor="#358668"  value={this.state.withChildren} onValueChange={(val) => this.setState({withChildren: val})}/>
                </View>
                <View style={styles.preffer}>
                    <Text style={styles.prefferText}>Podróżowanie ze zwierzętami:</Text>
                    <Switch trackColor={{false: "#C5C5C5", true: "#358668"}}  ios_backgroundColor="#358668"  value={this.state.withAnimals} onValueChange={(val) => this.setState({withAnimals: val})}/>
                </View>
                <View style={styles.preffer}>
                    <Text style={styles.prefferText}>Udogodnienia dla niepełnosprawnych:</Text>
                    <Switch trackColor={{false: "#C5C5C5", true: "#358668"}}  ios_backgroundColor="#358668" value={this.state.isDisabled}
                            onValueChange={(val) => this.setState({isDisabled: val})}/>
                </View>
                <View style={{marginVertical: 10}}>
                    <Text>Wprowadź liczbę osób:</Text>
                    <FormInput placeholder={"Podaj liczbę osób"} onChangeText={(el) => this.setState({peopleCount: el})}/>
                </View>
                <View style={{marginVertical: 10}}>
                    <Text>Wprowadź dodatkowy komentarz:</Text>
                    <FormInput placeholder={"Komentarz"} onChangeText={(el) => this.setState({comment: el})}/>
                </View>
            </View>


            <TouchableOpacity onPress={() => {
                console.log(params);
                axios.post('http://156.17.141.101:8000/accounts/1/routes', {
                    waypoints: params.waypoints,
                    daysOfWeek: params.weekdays,
                    departureTime: params.departureTime,
                    timeVariation: "PT" + params.timeVariation + "M",
                    validSince: params.validSince.format("YYYY-MM-DD"),
                    validUntil: params.validUntil.format("YYYY-MM-DD"),
                    comment: this.state.comment
                }, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                this.props.navigation.navigate('DriverOverview');
            }} style={styles.buttonContinue}>
                <View>
                    <Text style={styles.buttonContinueText}>KONTYNUUJ</Text>
                </View>
            </TouchableOpacity>
        </View>;
    }
}

export default DriverPrefferencesScreen;

const styles = StyleSheet.create({
    driverMapsContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch'
    },
    driverWaypointsProgressBar: {
        flex: 0.5,
        backgroundColor: "#358668",
        paddingVertical: 2,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    driverWaypointsProgressBarText: {
        fontWeight: '600',
        color: "white"
    },
    buttonContinue: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        alignSelf: 'stretch',
        backgroundColor: "#1A6047",
        height: 60,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonContinueText: {
        color: 'white',
        fontWeight: '500',
        fontSize: 20
    },
    driverWaypointsContent: {
        flex: 10,
        padding: 15,
        alignSelf: 'stretch',
        marginVertical: 10
    },
    preffer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10
    },
    prefferText: {
        fontSize: 16
    }
});