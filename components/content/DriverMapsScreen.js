import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ActivityIndicator} from 'react-native';
import {DrawerActions} from "react-navigation-drawer";
import TopBarComponent from "../topBar/TopBarComponent";
import MapView, { Polyline, Marker } from 'react-native-maps';
import axios from 'react-native-axios';

class DriverMapsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            polyline: null
        };
    }

    componentDidMount() {
        this.fetchRoute();
    }


    fetchRoute() {
        axios.post('http://156.17.141.101:8000/google/routes', {
            waypoints: this.props.navigation.getParam("waypoints", [])
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => this.setState({polyline: response.data.polyline})).catch(error => console.log("eerrrr", error));
    }

    render() {
        const initialBound = this.state.polyline ? { initialRegion: {
            latitude: (this.state.polyline[0].lat + this.state.polyline[this.state.polyline.length-1].lat)/2,
            longitude: (this.state.polyline[0].lng + this.state.polyline[this.state.polyline.length-1].lng)/2,
            latitudeDelta: Math.abs(this.state.polyline[0].lat - this.state.polyline[this.state.polyline.length-1].lat)*1.5,
            longitudeDelta: Math.abs(this.state.polyline[0].lng - this.state.polyline[this.state.polyline.length-1].lng)*1.5}
        } : {};

        return <View style={styles.driverMapsContainer}>
            <TopBarComponent paddingTopPlatform={this.props.screenProps.height}
                             menuClick={() => this.props.navigation.dispatch(DrawerActions.toggleDrawer())}/>
            <View style={styles.driverWaypointsProgressBar}>
                <Text style={styles.driverWaypointsProgressBarText}>KROK 2 Z 4: PODGLĄD WYZNACZONEJ TRASY</Text>
            </View>
            <View style={styles.driverWaypointsContent}>
                {this.state.polyline ?
                <MapView style={{alignSelf: "stretch", flex: 1}}  {...initialBound}>
                    <Polyline
                        coordinates={this.state.polyline.map(({ lat, lng }) => ({latitude: lat, longitude: lng}))}
                        strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
                        strokeColors={[
                            '#7F0000',
                            '#00000000', // no color, creates a "long" gradient between the previous and next coordinate
                            '#B24112',
                            '#E5845C',
                            '#238C23',
                            '#7F0000'
                        ]}
                        strokeWidth={6}
                    />
                    <Marker coordinate={{latitude: this.state.polyline[0].lat, longitude: this.state.polyline[0].lng}}/>

                    <Marker coordinate={{latitude: this.state.polyline[this.state.polyline.length - 1].lat,
                        longitude: this.state.polyline[this.state.polyline.length - 1].lng}}/>
                </MapView> : <View style={{marginTop: 30}}><ActivityIndicator size="large" color={"#358668"}/></View>}
            </View>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('DriverDates', {waypoints: this.props.navigation.getParam("waypoints", [])})} style={styles.buttonContinue}>
                <View >
                    <Text style={styles.buttonContinueText}>KONTYNUUJ</Text>
                </View>
            </TouchableOpacity>
        </View>;
    }
}

export default DriverMapsScreen;

let map;

const styles = StyleSheet.create({
    driverMapsContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch'
    },
    driverWaypointsProgressBar: {
        flex: 1,
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
        zIndex: 11,
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
        flex: 9,
        padding: 15,
        alignSelf: 'stretch',
        backgroundColor: '#fefefe'
    },
});