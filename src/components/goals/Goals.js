import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Container, Header, Body, Left, Button, Icon, Right, Title, Content, Text, Fab, Badge, Card, Accordion } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import Image from 'react-native-remote-svg';
import GoalVideo from './GoalVideo';

class Goals extends Component {
    componentWillMount() {
        Goals = [{
            cardType: "multiple", image: require('../../assests/icons/piggy-bank.svg'),
            headerTitle: 'Save 35k income tax', headerContent: 'Started 54 days ago', trackStatus: 'On track', level: 'Level 2',
            data: [{
                title: "Track your daily expenses", content: "₹ 15,578 expense for this month",
                progressBar: true, progress: '60', totalProgess: '₹ 2,87,539', endProgess: '1 year',
                point: "40 points"
            },
            { title: "Invest in ELSS fund", content: "Pay for this month", progressBar: false, progress: '', totalProgess: '', endProgess: '', point: "40 points" }]
        },
        { cardType: "single", image: require('../../assests/icons/Running.svg'), headerTitle: 'Lose 4kg weight', headerContent: 'Started 20 days ago', trackStatus: 'Off track', level: 'Level 1', title: "Run 2km daily", content: "0.6km more for the day", contentStatus: 'Completed', contentStatusData: '1km', video: false, point: "30 points" },
        { cardType: "single", image: require('../../assests/icons/buddhist-yoga-pose.svg'), headerTitle: 'Relieve stress and anger', headerContent: 'Started 5 days ago', trackStatus: 'On track', level: 'Level 1', title: "Watch this video to complete your activity", content: "Today's task is done", video: true, point: "30 points" }
        ];
    }

    addGoal = () => {
        this.props.navigation.navigate('AddGoal');
    }
    goalStatus = () => {
        this.props.navigation.navigate('GoalStatus');
    }
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={() => { this.props.navigation.openDrawer() }}>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Your Goals</Title>
                    </Body>
                    <Right>

                    </Right>
                </Header>
                <Content style={{ backgroundColor: '#f5f5f5' }}>
                    <LevelHeader />
                    <GoalsSection Goals={Goals} />
                </Content>
                <Fab
                    containerStyle={{}}
                    style={{ backgroundColor: '#5067FF' }}
                    position="bottomLeft"
                    onPress={this.addGoal}>
                    <Icon name="plus" type="FontAwesome" />
                </Fab>
            </Container>
        )
    }
}


const LevelHeader = () => {
    return (
        <View style={{ backgroundColor: '#ffffff', padding: 10 }}>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 1 }}>
                    <LinearGradient colors={['#1A2980', '#26D0CE']} start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }} style={{ borderRadius: 40, flexDirection: 'row', paddingHorizontal: 10, paddingVertical: 5 }} >
                        <Text style={{ color: '#fff', fontSize: 25, marginRight: 10 }}>Level 1</Text>
                        <Icon name="angle-right" type="FontAwesome" style={{ color: '#fff', alignSelf: 'center' }} />
                    </LinearGradient>
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 25, textAlign: 'center' }}>23</Text>
                    <Text style={{ fontSize: 13, textAlign: 'center' }}>{'Pending Activities'.toUpperCase()}</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 18 }}>30 points in 30 days</Text>
                </View>
                <View style={{ flex: 1 }}>
                    <View style={{ height: 8, backgroundColor: '#f5f5f5', marginTop: 10 }}>
                        <View style={{ height: 8, width: '70%' }}>
                            <LinearGradient start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }} colors={['#1A2980', '#26D0CE']} >
                                <View style={{ height: 8 }}></View>
                            </LinearGradient>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}
const GoalDetails = (props) => {
    return (
        <Card style={{ padding: 5, backgroundColor: '#ffffff', marginVertical: 4 }}>
            <GoalHeaderDetails GoalsDetails={props.GoalsDetails} />
            <ActivityDetails GoalsDetails={props.GoalsDetails} />

             {/* <Accordion
                dataArray={props.GoalsDetails}
                animation={true}
                expanded={1}
                renderHeader={this.GoalHeaderDetails}
                renderContent={this.ActivityDetails}
            />  */}
        </Card>
    )
}
const GoalHeaderDetails = (props) => {
    return (
            <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Image source={props.GoalsDetails.image} style={{ width: 50, height: 50 }} />
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 18 }}>{props.GoalsDetails.headerTitle}</Text>
                        </TouchableOpacity>
                        <View><Text style={{ fontSize: 10, backgroundColor: '#00b386', color: '#fff', borderRadius: 10, alignSelf: 'flex-start', padding: 2 }}>{props.GoalsDetails.level}</Text></View>
                    </View>
                </View>
                {props.GoalsDetails.trackStatus === 'On track' ?
                    <TouchableOpacity>
                        <View><Text style={{ fontSize: 13, backgroundColor: '#00b386', color: '#fff', borderRadius: 10, alignSelf: 'center', padding: 2 }}>{props.GoalsDetails.trackStatus}</Text></View>
                    </TouchableOpacity> :
                    <TouchableOpacity>
                        <View><Text style={{ fontSize: 13, backgroundColor: '#ce3c3e', color: '#fff', borderRadius: 10, alignSelf: 'flex-end', padding: 2 }}>{props.GoalsDetails.trackStatus}</Text></View>
                        <Text style={{ fontSize: 13 }}>Need expert help?</Text>
                    </TouchableOpacity>
                }
            </View>
    )
}
const GoalsSection = (props) => {
    return (
        <View>
            <Text style={{ fontSize: 13, marginVertical: 10, marginHorizontal: 10 }}>{'Your Goals'.toUpperCase()}</Text>
            <GoalDetails GoalsDetails={props.Goals[2]} />
            <GoalDetails GoalsDetails={props.Goals[1]} />
            <GoalDetails GoalsDetails={props.Goals[0]} />
        </View>
    )
}

const ActivityDetails = (props) => {
    return (
        <View>
            <Text style={{ fontSize: 11, marginTop: 10, marginHorizontal: 5 }}>{'Activities'.toUpperCase()}</Text>
            <View style={{}}>
                {props.GoalsDetails.cardType === 'single' ?
                    <Activity GoalsDetails={props.GoalsDetails} /> :
                    <MultipleActivity GoalsDetails={props.GoalsDetails} />
                }
            </View>
        </View>
    )
}

const Activity = (props) => {
    return (
        props.GoalsDetails.video ? <GoalVideo /> :
            <Card style={{ padding: 5, backgroundColor: '#fff', marginVertical: 2 }}>
                <View style={{ flexDirection: 'row', marginBottom: 5 }}>
                    <Text style={{ fontSize: 16 }}>{props.GoalsDetails.title}</Text>
                </View>
                <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}><Text style={{ alignSelf: 'flex-start' }}></Text><Text style={{ alignSelf: 'flex-end' }}>2km</Text></View>
                    <View style={{ backgroundColor: '#f5f5f5', borderRadius: 20, borderWidth: 1.5, borderColor: '#1e90ff' }}>
                        <View style={{ height: 22, width: '45%', backgroundColor: '#00bfff', borderRadius: 20 }}><Text style={{ left: '70%', color: 'white' }}>1km</Text></View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', paddingVertical: 10 }}>
                    <DayActivityStatus iconName="eercast" day="Today" />
                    <DayActivityStatus iconName="check-circle" day="M" />
                    <DayActivityStatus iconName="times-circle" day="T" />
                    <DayActivityStatus iconName="check-circle" day="W" />
                    <DayActivityStatus iconName="times-circle" day="T" />
                    <DayActivityStatus iconName="check-circle" day="F" />
                    <DayActivityStatus iconName="times-circle" day="S" />
                </View>
            </Card>
    )
}
const MultipleActivity = (props) => {
    return (
        <View>
            {props.GoalsDetails.data.map((x, i) => (
                x.progressBar ?
                    <Card key={i} style={{ padding: 5, backgroundColor: '#fff', marginVertical: 2 }}>
                        <View style={{ flexDirection: 'row', marginBottom: 5 }}>
                            <Text style={{ fontSize: 16 }}>{x.title}</Text>
                        </View>
                        <View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}><Text style={{ alignSelf: 'flex-start' }}>{x.content}</Text><Text style={{ alignSelf: 'flex-end' }}>{x.endProgess}</Text></View>
                            <View style={{ backgroundColor: '#f5f5f5', borderRadius: 20, borderWidth: 1.5, borderColor: '#1e90ff' }}>
                                <View style={{ height: 22, width: x.progress + '%', backgroundColor: '#00bfff', borderRadius: 20 }}><Text style={{ left: 2 * x.progress / 3 + '%', color: 'white' }}>{x.totalProgess}</Text></View>
                            </View>
                        </View>
                    </Card> :
                    <Card key={i} style={{ padding: 5, backgroundColor: '#fff', marginVertical: 2 }}>
                        <View style={{ flexDirection: 'row', marginBottom: 5 }}>
                            <Text style={{ fontSize: 16 }}>{x.title}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flex: 2 }}></View>
                            <View style={{ flex: 5, flexDirection: 'row' }}>
                                <Icon name="check" type="FontAwesome" style={{ fontSize: 20, color: '#00b386' }} />
                                <Text style={{ fontSize: 13 }}>{'Done for this month'}</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', paddingVertical: 10 }}>
                            <DayActivityStatus iconName="check-circle" day="Jul" />
                            <DayActivityStatus iconName="check-circle" day="Aug" />
                            <DayActivityStatus iconName="check-circle" day="Sep" />
                            <DayActivityStatus iconName="check-circle" day="Oct" />
                            <DayActivityStatus iconName="check-circle" day="Nov" />
                            <DayActivityStatus iconName="check-circle" day="Dec" />
                            <DayActivityStatus iconName="check-circle" day="Jan" />
                        </View>
                    </Card>
            ))}
        </View>
    )
}

const DayActivityStatus = (props) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Icon name={props.iconName} type="FontAwesome" style={{ fontSize: 15, color: props.iconName == "times-circle" ? '#ce3c3e' : '#00b386' }} />
            <Text style={{ fontSize: 13 }}>{props.day}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

})
export default Goals;
