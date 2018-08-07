import React from 'react';
import { View, StyleSheet, Text, Dimensions, ScrollView } from 'react-native';
import AssessmentOverdueComponent from './AssessmentOverdueComponent';

const screenWidth = Dimensions.get("window").width;

class AssessmentList extends React.Component {
    constructor() {
        super();
        this.state = {
            entries: [{
                title: 'Zest For Life',
                overdue: 20
            }, {
                title: 'Biological Age',
                overdue: 16
            }, {
                title: 'Wholesomeness',
                overdue: 15
            }, {
                title: 'Strength & Energy',
                overdue: 12
            }, {
                title: 'Diet Score',
                overdue: 10
            }]
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={{paddingHorizontal:10,color:'#353535'}}>Assessments Overdue</Text>
                <ScrollView horizontal={true}>
                    {this.state.entries.map((x, i) => (
                        <View style={{padding:5}} key={i}>
                            <AssessmentOverdueComponent assessObj={x} />
                        </View>
                    ))}
                </ScrollView>
            </View>
        )
    }

}
const styles = StyleSheet.create({
    container: {
       padding:10
    }
})
export default AssessmentList;