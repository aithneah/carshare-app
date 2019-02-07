import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Card, Icon} from 'react-native-elements'
import WeekDayComponent from "../shared/WeekDayComponent";

const RouteTileComponent = (props) => {
    return <View style={styles.routeTileComponent}>
        <View style={styles.routeTileComponentElements}>
            <View style={styles.routeTileComponentHeader}>
                <View style={styles.routeTileComponentIcon}>
                    <Icon name={props.routeType === "car" ? "car" : "male"}
                          color="#1A6047"
                          size={38}
                          type="font-awesome"/>
                </View>
                <View style={styles.routeTileComponentTitleStyle}>
                    <Text style={styles.routeTileComponentTitleStyleBold}>Z:
                        <Text
                            style={styles.routeTileComponentTitleStyleThin}>{"   " + props.from.toUpperCase()}</Text></Text>
                    <Text style={styles.routeTileComponentTitleStyleBold}>DO:
                        <Text
                            style={styles.routeTileComponentTitleStyleThin}>{"   " + props.to.toUpperCase()}</Text></Text>
                </View>
            </View>
            <View>
                <View style={styles.routeTileComponentWeekDayTiles}>
                    <WeekDayComponent isChecked={props.daysOfWeek.includes("MONDAY")} day={"PN"}/>
                    <WeekDayComponent isChecked={props.daysOfWeek.includes("TUESDAY")} day={"WT"}/>
                    <WeekDayComponent isChecked={props.daysOfWeek.includes("WEDNESDAY")} day={"ŚR"}/>
                    <WeekDayComponent isChecked={props.daysOfWeek.includes("THURSDAY")} day={"CZ"}/>
                    <WeekDayComponent isChecked={props.daysOfWeek.includes("FRIDAY")} day={"PT"}/>
                    <WeekDayComponent isChecked={props.daysOfWeek.includes("SATURDAY")} day={"SB"}/>
                    <WeekDayComponent isChecked={props.daysOfWeek.includes("SUNDAY")} day={"ND"}/>
                </View>
                <View style={styles.routeTileComponentOfferValidView}>
                    <Text style={[styles.routeTileComponentOffer, {fontWeight: 'bold', fontSize: 26, marginBottom: 5}]}>Godzina:
                        <Text style={styles.routeTileComponentOfferDate}> {props.hour}</Text></Text>
                    <Text style={styles.routeTileComponentOffer}>Oferta ważna od:
                        <Text style={styles.routeTileComponentOfferDate}> {props.validSince}</Text></Text>
                    <Text style={styles.routeTileComponentOffer}>Oferta ważna do:
                        <Text style={styles.routeTileComponentOfferDate}> {props.validTo}</Text></Text>
                </View>
                <View style={styles.routeTileComponentStatstics}>
                    <Text style={styles.routeTileComponentStatsticsText}>Wyświetlono: {props.views}</Text>
                    <Text style={styles.routeTileComponentStatsticsText}>Zainteresowanych: {props.interested}</Text>
                </View>

            </View>
        </View>

    </View>;
};

export default RouteTileComponent;

const styles = StyleSheet.create({
    routeTileComponent: {
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#e8e8e8",
        elevation: 5,
        margin: 15,
        shadowColor: "#a6a6a6",
        shadowOpacity: 1,
        shadowRadius: 5,
        backgroundColor: 'white',
        shadowOffset: {width: 0, height: 2},
    },
    routeTileComponentElements: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    routeTileComponentHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomColor: "#EBEBEB",
        borderBottomWidth: 1,
        paddingBottom: 5
    },
    routeTileComponentIcon: {
        flexDirection: "row",
        alignItems: "center"
    },
    routeTileComponentTitleStyle: {
        flexDirection: "column",
        alignItems: "center",
        marginLeft: 10
    },
    routeTileComponentTitleStyleThin: {
        fontWeight: "300",
        paddingLeft: 5,
        fontSize: 18
    },
    routeTileComponentTitleStyleBold: {
        fontWeight: "600",
        color: "#1A6047",
        fontSize: 20
    },
    routeTileComponentWeekDayTiles: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginVertical: 10
    },
    routeTileComponentOfferValidView: {
        marginBottom: 10,
        flexDirection: 'column',
        alignItems: 'center'
    },
    routeTileComponentOffer: {
        fontSize: 18
    },
    routeTileComponentOfferDate: {
        color: "#358668",
        fontWeight: '900'
    },
    routeTileComponentStatstics: {
        flexDirection: 'column',
        alignItems: 'flex-end'
    },
    routeTileComponentStatsticsText: {
        fontSize: 16,
        color: "#818181"
    }
});