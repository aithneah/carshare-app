import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import TopBarComponent from "../topBar/TopBarComponent";
import {Button, FormInput, Icon} from 'react-native-elements';
import {DrawerActions} from "react-navigation-drawer";

class DriverWaypointsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {waypoints: ["", ""]};
    }

    setWaypoint(waypointIndex, value) {
        const waypoints = [...this.state.waypoints];
        waypoints[waypointIndex] = value;

        this.setState({waypoints: waypoints});
    }

    render() {
        return <View style={styles.driverWaypointsContainer}>
            <TopBarComponent paddingTopPlatform={this.props.screenProps.height}
                             menuClick={() => this.props.navigation.dispatch(DrawerActions.toggleDrawer())}/>

            <View style={styles.driverWaypointsProgressBar}>
                <Text style={styles.driverWaypointsProgressBarText}>KROK 1 Z 4: WYZNACZ TRASĘ</Text>
            </View>
            <View style={styles.driverWaypointsContent}>
                <View style={styles.driverWaypointsInputs}>
                    <View style={styles.driverWaypointsInputElements}>
                        <Text style={styles.driverWaypointsLetters}>A</Text>
                        <FormInput containerStyle={{width: 300}}
                                   inputContainerStyle={{borderBottomWidth: 0}}
                                   onChangeText={(el) => this.setWaypoint(0, el)}
                                   placeholder="Wprowadź punkt początkowy" required/>
                    </View>
                    <View style={styles.driverWaypointsInputElements}>
                        <Text style={styles.driverWaypointsLetters}>B</Text>
                        <FormInput containerStyle={{width: 300}}
                                   onChangeText={(el) => this.setWaypoint(1, el)}
                                   placeholder="Wprowadź punkt docelowy" required/>
                    </View>
                </View>
                <TouchableOpacity onPress={() => console.log("dodaj waypoint")}>
                    <View style={styles.driverWaypointsAddView}>
                        <View style={styles.plusButton}>
                            <Icon color="white" size={32} name="plus" type="font-awesome"/>
                        </View>
                        <Text style={styles.driverWaypointsAddWaypointText}>Dodaj punkt na trasie</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('DriverMaps', {waypoints: this.state.waypoints})} style={styles.buttonContinue}>
                <View>
                    <Text style={styles.buttonContinueText}>KONTYNUUJ</Text>
                </View>
            </TouchableOpacity>
        </View>;
    }

};

export default DriverWaypointsScreen;

const styles = StyleSheet.create({
    driverWaypointsContainer: {
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
    driverWaypointsContent: {
        flex: 10,
        padding: 15
    },
    driverWaypointsInputs: {
        marginVertical: 10
    },
    driverWaypointsInputElements: {
        marginBottom: 15,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    driverWaypointsLetters: {
        fontWeight: '700',
        fontSize: 30,
        color: "#358668"
    },
    driverWaypointsAddView: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    driverWaypointsAddWaypointText: {
        fontSize: 20,
        fontWeight: '300',
        color: "#636363",
        marginRight: 5
    },
    plusButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex:11,
        width: 45,
        height: 45,
        backgroundColor: "#1A6047",
        borderColor: "transparent",
        borderWidth: 0,
        borderRadius: 100,
        marginRight: 10
        // elevation: 5,
        // shadowColor: "#000000",
        // shadowOpacity: 1,
        // shadowRadius: 5,
        // shadowOffset: {width: 0, height: 0}
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
        fontSize: 20,
    }
});
