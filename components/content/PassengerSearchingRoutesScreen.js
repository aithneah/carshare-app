import React, {Component} from 'react';
import {ScrollView, StyleSheet, TouchableOpacity, View, ActivityIndicator} from "react-native";
import TopBarComponent from "../topBar/TopBarComponent";
import {DrawerActions} from "react-navigation-drawer";
import RouteTileComponent from "./RouteTileComponent";
import {Icon} from "react-native-elements";

class PassengerSearchingRoutesScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            routes: null
        };
    }

    componentDidMount() {
        this.props.navigation.state.params.responsePromise.then(response =>
            this.setState({routes: response.data}))
    }

    render() {
        return <View style={styles.allRoutesScreenContainer}>
            <TopBarComponent paddingTopPlatform={this.props.screenProps.height}
                             menuClick={() => this.props.navigation.dispatch(DrawerActions.toggleDrawer())}/>
            <View style={styles.allRoutesScreenContent}>
                {this.state.routes ?
                <ScrollView>
                    {this.state.routes.map((route, id) => {
                        return <RouteTileComponent from={route.origin}
                                                   key={id}
                                                   to={route.destination}
                                                   routeType={"car"}
                                                   daysOfWeek={route.daysOfWeek}
                                                   hour={route.departureTime}
                                                   validSince={route.validSince}
                                                   validTo={route.validUntil}
                                                   views={33}
                                                   interested={14}
                                                   />;
                    })}
                </ScrollView> : <View style={{marginTop: 30}}><ActivityIndicator size="large" color={"#358668"}/></View>}
                <TouchableOpacity onPress={() => this.props.navigation.navigate('PassengerWaypoints')}>
                    <View style={styles.plusButton}>
                        <Icon color="white" size={38} name="plus" type="font-awesome"/>
                    </View>
                </TouchableOpacity>
            </View>
        </View>;
    }
}

export default PassengerSearchingRoutesScreen;

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