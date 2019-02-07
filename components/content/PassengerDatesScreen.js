import React, {Component} from 'react';
import {Stylesheet, View, Text, TouchableOpacity, StyleSheet, Modal} from 'react-native';
import TopBarComponent from "../topBar/TopBarComponent";
import {DrawerActions} from "react-navigation-drawer";
import CalendarPicker from 'react-native-calendar-picker';
import {FormInput, Button} from 'react-native-elements';
import WeekDayComponent from "../shared/WeekDayComponent";

class PassengerDatesScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weekdays: [],
            hour: "",
            validSince: "",
            validUntil: "",
            modalValidSinceVisible: false,
            modalValidUntilVisible: false,
            timeVariation: ""
        };
    }

    setValidSinceModalVisible(visible) {
        this.setState({modalValidSinceVisible: visible});
    }
    setValidUntilModalVisible(visible) {
        this.setState({modalValidUntilVisible: visible});
    }

    render() {
        return <View style={styles.driverMapsContainer}>
            <TopBarComponent paddingTopPlatform={this.props.screenProps.height}
                             menuClick={() => this.props.navigation.dispatch(DrawerActions.toggleDrawer())}/>
            <View style={styles.driverWaypointsProgressBar}>
                <Text style={styles.driverWaypointsProgressBarText}>KROK 2 Z 3: WYBÓR TERMINÓW</Text>
            </View>
            <View style={styles.driverWaypointsContent}>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalValidSinceVisible}
                    onRequestClose={() => console.log('close')}>
                    <View style={{marginTop: 100}}>
                    <CalendarPicker
                        onDateChange={(el) => {
                            this.setState({validSince: el});
                            this.setValidSinceModalVisible(false);
                        }}
                    />
                    </View>
                </Modal>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalValidUntilVisible}
                    onRequestClose={() => console.log('close')}>
                    <View style={{marginTop: 100}}>
                        <CalendarPicker
                            onDateChange={(el) => {
                                this.setState({validUntil: el});
                                this.setValidUntilModalVisible(false);
                            }}
                        />
                    </View>
                </Modal>
                <View style={styles.weekDays}>
                    {[
                        ["MONDAY", "PN"],
                        ["TUESDAY", "WT"],
                        ["WEDNESDAY", "SR"],
                        ["THURSDAY", "CZ"],
                        ["FRIDAY", "PT"],
                        ["SATURDAY", "SB"],
                        ["SUNDAY", "ND"]].map(([enWeekDay, plWeekDay], i) =>
                            <TouchableOpacity key={i} onPress={() => this.setState({
                            weekdays: this.state.weekdays.includes(enWeekDay) ?
                                this.state.weekdays.filter(w => w !== enWeekDay)
                                : [...this.state.weekdays, enWeekDay]})}>
                            <WeekDayComponent isChecked={this.state.weekdays.includes(enWeekDay)}
                            day={plWeekDay}/>
                            </TouchableOpacity>
                        )}
                </View>
                <View style={{marginVertical: 15}}>
                    <Button title={this.state.validSince === "" ? "Wybierz datę początkową"
                        : this.state.validSince.format("YYYY-MM-DD")}
                            buttonStyle={{backgroundColor: "#004332",
                                borderColor: "transparent",
                                borderWidth: 0,
                                borderRadius: 5, marginVertical: 5}}
                            onPress={() => this.setValidSinceModalVisible(true)}/>
                    <Button title={this.state.validUntil === "" ?
                        "Wybierz datę końcową" : this.state.validUntil.format("YYYY-MM-DD")}
                            buttonStyle={{backgroundColor: "#004332",
                                borderColor: "transparent",
                                borderWidth: 0,
                                borderRadius: 5, marginVertical: 5}}
                            onPress={() => this.setValidUntilModalVisible(true)}/>
                </View>
                <View style={{marginVertical: 15}}>
                    <Text>Godzina odjazdu:</Text>
                        <FormInput placeholder={"Podaj godzinę w formacie hh:mm"} onChangeText={(el) => this.setState({hour: el})}/>
                </View>
                <View style={{marginVertical: 15}}>
                    <Text>Możliwe opóźnienie +/-:</Text>
                    <FormInput placeholder={"Podaj liczbę minut"} onChangeText={(el) => this.setState({timeVariation: el})}/>
                </View>
            </View>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('PassengerPrefferences', {
                weekdays: this.state.weekdays,
                departureTime: this.state.hour,
                timeVariation: this.state.timeVariation,
                ...this.props.navigation.state.params
                })} style={styles.buttonContinue}>
                <View>
                    <Text style={styles.buttonContinueText}>KONTYNUUJ</Text>
                </View>
            </TouchableOpacity>
        </View>;
    }
}

export default PassengerDatesScreen;

const styles = StyleSheet.create({
    driverMapsContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch'
    },
    driverWaypointsProgressBar: {
        flex: 0.5,
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
        flex: 10,
        padding: 15,
        alignSelf: 'stretch',
        marginVertical: 10
    },
    weekDays: {
        flexDirection: 'row',
        justifyContent: 'center'
    }
});
