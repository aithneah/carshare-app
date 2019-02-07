import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const WeekDayComponent = (props) => {
    return <View style={[styles.weekDayTile, props.isChecked ? styles.weekDayTileChecked : styles.weekDayTileUnchecked]}>
        <Text style={props.isChecked ? styles.weekDayTileChecked : styles.weekDayTileUnchecked}>{props.day}</Text>
    </View>;
};

export default WeekDayComponent;

const styles = StyleSheet.create({
    weekDayTile: {
        width: 40,
        height: 40,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 5
    },
    weekDayTileChecked: {
        backgroundColor: "#6ABB9E",
        color: "black"
    },
    weekDayTileUnchecked: {
        backgroundColor: "#E5E5E5",
        color: "#BDBDBD"
    }
});