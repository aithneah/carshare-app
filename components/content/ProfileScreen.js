import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {Button, Icon, Rating, ListItem} from "react-native-elements";
import TopBarComponent from "../topBar/TopBarComponent";
import {DrawerActions} from "react-navigation-drawer";

class ProfileScreen extends Component {

    render() {
        return (
            <View style={styles.userProfileComponentContainer}>
            <TopBarComponent paddingTopPlatform={this.props.screenProps.height}
                             menuClick={() => this.props.navigation.dispatch(DrawerActions.toggleDrawer())}/>
                <View style={styles.userProfileComponentInerContainer}>
                    <View style={styles.userProfileSection}>
                        <Image
                            style={styles.userProfilePicture}
                            source={{uri: "https://randomuser.me/api/portraits/women/68.jpg"}}
                            imageStyle={{width: 60,
                                height: 60}}
                        />
                        <View style={{flex:3}}>
                            <Text>Jane Martin</Text>
                            <Text style={{color:"#979797"}}>Data Urodzenia: 1986</Text>
                        </View>
                    </View>
                    <View style={styles.userProfileRatingWrapper}>

                        <Rating
                            imageSize={20}
                            readonly
                            startingValue={rating}
                        />
                        <Text style={{paddingHorizontal: 5}}>{rating} / 5</Text>
                        <Text>Oceniło: 17</Text>
                    </View>
                    <View>
                        <Text style={{paddingTop:10, fontWeight: "bold"}}>Moje Auta:</Text>
                        <View>
                            {
                                auta.map((item, i) => (
                                    <ListItem
                                        key={i}
                                        leftIcon={{ name: "car", type: "font-awesome"}}
                                        title={item.name}
                                        subtitle={item.date}
                                        hideChevron
                                    />
                                ))
                            }
                            <Button
                                title="Dodaj Auto"
                                buttonStyle={styles.buyProContainerButton}/>
                        </View>
                    </View>
                    <View>
                        <Text style={{paddingVertical:10, fontWeight: "bold"}}>Ostatnie Oceny:</Text>
                    </View>
                    <View style={{flexDirection: 'column'}}>
                        <View style={{flexDirection: 'row',justifyContent: "space-between"}}>
                            <View style={{flexDirection: 'row', flex: 1, paddingVertical: 10, alignItems: "center", justifyContent: "center"}}>
                                <Image
                                    style={styles.userProfilePictureSmall}
                                    source={{uri: list[0].avatar_url}}
                                    imageStyle={{width: 35,
                                        height: 35,
                                        borderRadius: 35,
                                        overflow: "hidden"}}
                                />
                            </View>
                            <View style={{flexDirection: 'column', flex: 4}}>
                                <Text>{list[0].name}</Text>
                                <Text>{"2.11.2018"}</Text>
                            </View>
                            <View style={{alignItems: "flex-end", flex: 2}}>
                                <Rating
                                    imageSize={20}
                                    readonly
                                    startingValue={rating}
                                />
                            </View>
                        </View>
                        <View style={{flexDirection: 'row',justifyContent: "space-between"}}>
                            <View style={{flexDirection: 'row', flex: 1, paddingVertical: 10, alignItems: "center", justifyContent: "center"}}>
                                <Image
                                    style={styles.userProfilePictureSmall}
                                    source={{uri: list[1].avatar_url}}
                                    imageStyle={{width: 35,
                                        height: 35,
                                        borderRadius: 35,
                                        overflow: "hidden"}}
                                />
                            </View>
                            <View style={{flexDirection: 'column', flex: 4}}>
                                <Text>{list[1].name}</Text>
                                <Text>{"23.10.2018"}</Text>
                            </View>
                            <View style={{alignItems: "flex-end", flex: 2}}>
                                <Rating
                                    imageSize={20}
                                    readonly
                                    startingValue={rating-1}
                                />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );

    }

}

const styles = StyleSheet.create({
    userProfileComponentContainer: {
        flex: 1,
    },
    userProfileComponentInerContainer: {
      flex: 10,
      padding: 10,
    },
    userProfilePicture: {
        flex: 1,
        resizeMode: "center",
        width: 60,
        height: 60,
        borderRadius: 60
    },
    userProfilePictureSmall: {
        flex: 1,
        resizeMode: "center",
        width: 35,
        height: 35,
        borderRadius: 35,
    },
    userProfileSection: {
        flexDirection: "row",
        justifyContent: "center",
        paddingVertical: 5,
        borderBottomColor: "#004332",
        borderBottomWidth: 1
    },
    userProfileRatingWrapper: {
      flexDirection: "row",
      padding: 5,
      justifyContent: "space-between"
    },
    buyProContainerButton: {
        marginTop: 10,
        backgroundColor: "#1A6047",
        borderColor: "transparent",
        borderWidth: 0,
        borderRadius: 5
    }
});

const auta = [{name: "BMW 3", date: "1998"},{name: "Citroen c4", date: "2008"}, {name: "Fiat 500", date: "2012"}];
const rating = 3.6;

const list = [
    {
        name: 'Lily Rolland',
        avatar_url: 'https://randomuser.me/api/portraits/women/79.jpg',
        subtitle: 'Vice President'
    },
    {
        name: 'Chris Jackson',
        avatar_url: 'https://randomuser.me/api/portraits/men/32.jpg',
        subtitle: 'Vice Chairman'
    }];


export default ProfileScreen;