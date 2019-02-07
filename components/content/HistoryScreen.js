import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {Button, Icon, Rating, ListItem} from "react-native-elements";
import TopBarComponent from "../topBar/TopBarComponent";
import {DrawerActions} from "react-navigation-drawer";

class HistoryScreen extends Component {

    render() {
        return (
            <View style={{flex: 1}}>
                <TopBarComponent paddingTopPlatform={this.props.screenProps.height}
                                 menuClick={() => this.props.navigation.dispatch(DrawerActions.toggleDrawer())}/>
                <View style={{flex:10, padding:10}}>
                {
                    list.map((item, i) => (
                        <ListItem
                            key={i}
                            leftIcon={{ name: item.icon, type: "font-awesome"}}
                            title={item.name1 + ' do ' + item.name2}
                            subtitle={item.date + ', ' + item.km + ' km'}
                            hideChevron
                        />
                    ))
                }
                </View>
            </View>
        );

    }

}

const styles = StyleSheet.create({
});

const list = [
    {
        icon: "car",
        name1: "Borowska 12/b",
        name2: "Cicha 3",
        date: "07.09.2018",
        km: 23
    },
    {
        icon: "car",
        name1: "Żernica 2a",
        name2: "Nowodworska 12",
        date: "16.09.2018",
        km: 6
    },
    {
        icon: "male",
        name1: "Krzywa 19",
        name2: "Cicha 3",
        date: "13.08.2018",
        km: 31
    },
    {
        icon: "car",
        name1: "Wyszyńskiego 121",
        name2: "Wyspańskiego 1",
        date: "01.08.2018",
        km: 17
    }];


export default HistoryScreen;