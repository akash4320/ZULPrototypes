import React from 'react';
import { View, StyleSheet, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { Thumbnail, Badge, Text, Icon } from 'native-base';
import StarRating from 'react-native-star-rating';


const ExpertList = (props) => {
    return (
        <FlatList
            data={[{ key: 'a' }, { key: 'b' }, { key: 'a' }, { key: 'b' }, { key: 'a' }, { key: 'b' }]}
            renderItem={({ item }) => <ExpertComponent item={item} />}
        />
    )
}
const styles = StyleSheet.create({
    container: {
    }
})


const ExpertComponent = () => {
    return (
        <View style={{ flexDirection: 'column', padding: 5, marginVertical: 3, backgroundColor: '#ffffff' }}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ alignItems: 'center', padding: 5 }}>
                    <Thumbnail large square source={require('../../assests/images/profilepic/stylish-girl.jpg')} />
                    <View style={{ flexDirection: 'row', marginTop: 5 }}>
                        <StarRating
                            disabled={false}
                            maxStars={5}
                            rating={4}
                            style={{ width: 50 }}
                            fullStarColor={'#00b386'}
                            starSize={20}
                        />
                    </View>
                    <Text style={{ fontSize: 12, color: '#00b386', textDecorationLine: 'underline' }}>350 Reviews</Text>
                    {/* <Text style={{ fontSize: 12, color: '#00b386', marginVertical: 5 }}>Available Today</Text> */}
                </View>
                <View style={{ flex: 1, paddingHorizontal: 10,paddingRight:2 }}>
                    <View style={{ flexDirection:'row',padding:0 ,margin:0 }}>
                        <Text style={{ flex: 1 }}>Samira Reddy</Text>
                            <Icon name='heart' type="FontAwesome" style={{ fontSize:20, color:'red',marginRight:5 ,}} />
                         <TouchableOpacity>
                            <Icon name='ellipsis-v' type="FontAwesome" style={{ fontSize:20,}} />
                            </TouchableOpacity>
                    </View>
                    <Text style={{ fontSize: 13, color: '#505050', margin:0}}>Dermatologiest, MBBS</Text>
                    <Text style={{ fontSize: 13, color: '#505050' }}>Child Specialists</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 12 }}>5 Yrs Exp</Text>
                    </View>
                    <Text style={{ fontSize: 14, marginTop: 5 }}>Services available:</Text>
                    <ScrollView horizontal={true} style={{ flexDirection: 'row' }}>
                        <Badge style={{ backgroundColor: '#e8e8e8', borderRadius: 5, padding: 5, marginRight: 5 }}>
                            <Text style={{ color: '#353535', fontSize: 14 }}>Skin therapy</Text>
                        </Badge>
                        <Badge style={{ backgroundColor: '#e8e8e8', borderRadius: 5, padding: 5, marginRight: 5 }}>
                            <Text style={{ color: '#353535', fontSize: 14 }}>Laser treatment</Text>
                        </Badge>
                        <Badge style={{ backgroundColor: '#e8e8e8', borderRadius: 5, padding: 5, marginRight: 5 }}>
                            <Text style={{ color: '#353535', fontSize: 14 }}>Hair Transplantation</Text>
                        </Badge>
                        <Badge style={{ backgroundColor: '#e8e8e8', borderRadius: 5, padding: 5, marginRight: 5 }}>
                            <Text style={{ color: '#353535', fontSize: 14 }}>Fungal therapy</Text>
                        </Badge>
                    </ScrollView>
                </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 1 }}>
                    <TouchableOpacity style={{ paddingVertical: 4, backgroundColor: '#ffffff', borderWidth: 1, margin: 10 }}>
                        <Text style={{ textAlign: 'center' }}>Contact</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1 }}>
                    <TouchableOpacity style={{ paddingVertical: 5, backgroundColor: '#5067FF', margin: 10 }}>
                        <Text style={{ textAlign: 'center', color: '#ffffff' }}>Book Appointment</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}


export default ExpertList;

