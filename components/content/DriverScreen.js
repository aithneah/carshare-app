import React from 'react';
import {View, Text, StatusBar, Button} from 'react-native';
import TopBarComponent from "../topBar/TopBarComponent";
import {DrawerActions} from "react-navigation-drawer";

const DriverScreen = (props) => <View><StatusBar barStyle="light-content"/>
    <TopBarComponent paddingTopPlatform={20}/>
    <Text>DRIVEEEEEEEEERRRRR</Text>
    <Button title={"Click"} onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}/></View>;
export default DriverScreen;