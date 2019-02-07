import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity, StatusBar, StatusBarIOS} from 'react-native';
import { Icon } from 'react-native-elements'

const TopBarComponent = (props) => {

    return <View style={[styles.topbarContainer, {paddingTop: props.paddingTopPlatform}]}>
        <StatusBar barSyle="light-content"/>
        <TouchableOpacity
            style={{flex:1, justifyContent: "center", alignItems:"flex-start"}}
            onPress={props.menuClick}>
            <Icon
                name="bars"
                type="font-awesome"
                color="white"
                size={28}
            />
        </TouchableOpacity>
        <View
            style={{flex:2, alignItems: "center"}}>
            <Image
                resizeMode="contain"
                style={{height: 40, width: 130}}
                source={{uri: "http://oi66.tinypic.com/14ugyt3.jpg"}}
            />
        </View>
        <TouchableOpacity
            style={{flex:1, justifyContent: "center", alignItems:"flex-end"}}>
            <Icon
                name="envelope"
                type="font-awesome"
                color="white"
                size={28}/>
        </TouchableOpacity>

    </View>;
};


export default TopBarComponent;

const styles = StyleSheet.create({
    topbarContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
        backgroundColor: "#1A6047",
        paddingHorizontal: 8
    },
    elements: {
        flex: 1,
    }
});