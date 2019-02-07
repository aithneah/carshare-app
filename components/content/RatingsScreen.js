import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {Button, Icon, Rating, ListItem} from "react-native-elements";
import TopBarComponent from "../topBar/TopBarComponent";
import {DrawerActions} from "react-navigation-drawer";

class RatingsScreen extends Component {

    render() {
        return (
            <View style={{flex: 1}}>
                <TopBarComponent paddingTopPlatform={this.props.screenProps.height}
                                 menuClick={() => this.props.navigation.dispatch(DrawerActions.toggleDrawer())}/>
                <View style={{flex:10, padding:10}}>
                    <Text style={{fontWeight: "bold", paddingBottom: 5, marginBottom:5, borderBottomColor: "black", borderBottomWidth: 1}}>Twoje wszystkie oceny:</Text>
                    <View style={{flexDirection: 'column'}}>
                    {
                        list.map((item, i) => (
                                <View style={{flexDirection: 'row',justifyContent: "space-between"}}>
                                    <View style={{flexDirection: 'row', flex: 1, paddingVertical: 10, alignItems: "center", justifyContent: "center"}}>
                                        <Image
                                            style={styles.userProfilePictureSmall}
                                            source={{uri: item.avatar_url}}
                                            imageStyle={{width: 40,
                                                height: 40,
                                                borderRadius: 40,
                                                overflow: "hidden"}}
                                        />
                                    </View>
                                    <View style={{flexDirection: 'column', flex: 4}}>
                                        <Text>{item.name}</Text>
                                        <Text>{item.date}</Text>
                                    </View>
                                    <View style={{alignItems: "flex-end", flex: 2}}>
                                        <Rating
                                            imageSize={20}
                                            readonly
                                            startingValue={item.rating}
                                        />
                                    </View>
                                </View>
                        ))
                    }
                    </View>
                </View>
            </View>
        );

    }

}

const styles = StyleSheet.create({
    userProfilePictureSmall: {
        flex: 1,
        resizeMode: "center",
        width: 40,
        height:40,
        borderRadius: 40,
    },
});

const list = [
    {
        name: 'Lily Rolland',
        avatar_url: 'https://randomuser.me/api/portraits/women/79.jpg',
        subtitle: 'Vice President',
        rating: 4.5,
        date: "12.10.2018"
    },
    {
        name: 'Chris Jackson',
        avatar_url: 'https://randomuser.me/api/portraits/men/32.jpg',
        subtitle: 'Vice Chairman',
        rating: 3.7,
        date: "2.10.2018"
    },
    {
        name: 'Tony McGill',
        avatar_url: 'https://randomuser.me/api/portraits/men/23.jpg',
        subtitle: 'Vice Chairman',
        rating: 4.1,
        date: "28.09.2018"
    },
    {
        name: 'Jeniffer Hill',
        avatar_url: 'https://randomuser.me/api/portraits/women/23.jpg',
        subtitle: 'Vice Chairman',
        rating: 4.8,
        date: "13.09.2018"
    }];


export default RatingsScreen;