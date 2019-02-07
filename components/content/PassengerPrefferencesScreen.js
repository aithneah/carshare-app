import React, {Component} from 'react';
import {Button, Modal, Text, TouchableOpacity, View, Switch, StyleSheet} from 'react-native';
import TopBarComponent from "../topBar/TopBarComponent";
import {FormInput} from 'react-native-elements';
import {DrawerActions} from "react-navigation-drawer";
import axios from "react-native-axios";

class PassengerPrefferencesScreen extends Component {
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
                <Text style={styles.driverWaypointsProgressBarText}>KROK 3 Z 3: WYBÓR PREFERENCJI</Text>
            </View>
            <View style={styles.driverWaypointsContent}>
                <View style={styles.preffer}>
                    <Text style={styles.prefferText}>Podróżowanie z dzieckiem:</Text>
                    <Switch trackColor={{false: "#C5C5C5", true: "#358668"}}  ios_backgroundColor="#358668"  value={this.state.withChildren} onValueChange={(val) => this.setState({withChildren: val})}/>
                </View>
                <View style={styles.preffer}>
                    <Text style={styles.prefferText}>Podróżowanie ze zwierzętami:</Text>
                    <Switch trackColor={{false: "#C5C5C5", true: "#358668"}} ios_backgroundColor="#358668"  value={this.state.withAnimals} onValueChange={(val) => this.setState({withAnimals: val})}/>
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
            </View>


            <TouchableOpacity onPress={() => {
                const response = axios.post('http://156.17.141.101:8000/search-routes', {
                    start: params.waypoints[0],
                    end: params.waypoints[1],
                    daysOfWeek: params.weekdays,
                    time: params.departureTime,
                    timeVariation: "PT" + params.timeVariation + "M"
                }, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                this.props.navigation.navigate('PassengerSearchingRoutes', {responsePromise: response});
            }} style={styles.buttonContinue}>
                <View>
                    <Text style={styles.buttonContinueText}>KONTYNUUJ</Text>
                </View>
            </TouchableOpacity>
        </View>;
    }
}

export default PassengerPrefferencesScreen;

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

