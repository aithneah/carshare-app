import React from 'react';
import {createBottomTabNavigator, createStackNavigator, createAppContainer, createSwitchNavigator, createDrawerNavigator} from 'react-navigation';
import DriverScreen from './components/content/DriverScreen';
import AllRoutesScreen from "./components/content/AllRoutesScreen";
import NavigationContentComponent from "./NavigationContentComponent";
import TabBarOverrideComponent from "./tabBarOverrideComponent";
import ProfileScreen from "./components/content/ProfileScreen";
import HistoryScreen from "./components/content/HistoryScreen";
import RatingsScreen from "./components/content/RatingsScreen";
import DriverOverviewScreen from "./components/content/DriverOverviewScreen";
import DriverWaypointsScreen from "./components/content/DriverWaypointsScreen";
import DriverMapsScreen from "./components/content/DriverMapsScreen";
import PassengerOverviewScreen from "./components/content/PassengerOverviewScreen";
import PassengerWaypointsScreen from "./components/content/PassengerWaypointsScreen";
import PassengerDatesScreen from "./components/content/PassengerDatesScreen";
import PassengerPrefferencesScreen from "./components/content/PassengerPrefferencesScreen";
import PassengerSearchingRoutesScreen from "./components/content/PassengerSearchingRoutesScreen";
import DriverDatesScreen from "./components/content/DriverDatesScreen";
import DriverPrefferencesScreen from "./components/content/DriverPrefferencesScreen";

const PassengerNavigator = createStackNavigator({
   PassengerOverview: PassengerOverviewScreen,
   PassengerWaypoints: PassengerWaypointsScreen,
   PassengerDates: PassengerDatesScreen,
   PassengerPrefferences: PassengerPrefferencesScreen,
   PassengerSearchingRoutes: PassengerSearchingRoutesScreen
}, {initialRouteName: "PassengerOverview", headerMode: "none"});

const DriverNavigator = createStackNavigator({
    DriverOverview: DriverOverviewScreen,
    DriverWaypoints: DriverWaypointsScreen,
    DriverMaps: DriverMapsScreen,
    DriverDates: DriverDatesScreen,
    DriverPrefferences: DriverPrefferencesScreen
}, {initialRouteName: "DriverOverview", headerMode: "none"});


const RouteNavigator = createBottomTabNavigator({
    AllRoutes: AllRoutesScreen,
    Driver: DriverNavigator,
    Passenger: PassengerNavigator
}, {initialRouteName: "AllRoutes", tabBarComponent: props => <TabBarOverrideComponent {...props}/>});


export const RootNavigator = createAppContainer(
    createDrawerNavigator({
    Routes: RouteNavigator,
    Profile: ProfileScreen,
    History: HistoryScreen,
    Ratings: RatingsScreen,
    Notifications: DriverScreen,
    Settings: DriverScreen
}, {initialRouteName: "Routes", contentComponent: NavigationContentComponent}));




