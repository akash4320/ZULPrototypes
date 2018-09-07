import React from 'react';
import { View, StyleSheet, TouchableOpacity,TouchableHighlight, FlatList, ScrollView } from 'react-native';
import { Thumbnail, Badge, Text, Icon,Button } from 'native-base';
import StarRating from 'react-native-star-rating';
const expertData =[
    {
        key:'a',
        img:require('../../assests/images/profilepic/gym.jpg'),
        name:'Sanjay Singhania',
        degree:'MBBS, DOMS',
        speciality:'Yoga expert',
        experience:5,
        dimension:'dumbbell',
        rating:4.3,
        reviews:150
    },
    {
        key:'a',
        img:require('../../assests/images/profilepic/cute1.jpg'),
        name:'Samira Reddy',
        degree:'MBBS, BODMS',
        speciality:'Child Specialists',
        experience:10,
        rating:4.2,
        dimension:'face',
        reviews:150
    },
    {
        key:'a',
        img:require('../../assests/images/profilepic/suresh.png'),
        name:'Dr. Suresh Kumar',
        degree:'PhD, M.S, B.S',
        speciality:'Family expert',
        experience:5,
        rating:4.1,
        dimension:'heart',
        reviews:250
    },
    {
        key:'a',
        img:require('../../assests/images/profilepic/stylish-girl.jpg'),
        name:'Hima Soni',
        degree:'M.Sc, B.Sc',
        speciality:'Meditation expert',
        dimension:'owl',
        experience:5,
        rating:4.3,
        reviews:150
    },
    {
        key:'a',
        img:require('../../assests/images/profilepic/yogagirl.jpg'),
        name:'Sonam Bothra',
        degree:'M.S, B.S',
        speciality:'Yoga expert',
        dimension:'dumbbell',
        experience:5,
        rating:4.3,
        reviews:150
    },
    {
        key:'a',
        img:require('../../assests/images/profilepic/beautiful-girl.jpg'),
        name:'Sanjana Ranawat',
        degree:'M.S, B.S',
        speciality:'Yoga expert',
        experience:5,
        dimension:'dumbbell',
        rating:4.3,
        reviews:150
    },
  
    {
        key:'a',
        img:require('../../assests/images/profilepic/suresh.png'),
        name:'Dr. Ramesh Kumar',
        degree:'PhD, M.S, B.S',
        speciality:'Family expert',
        dimension:'heart',
        experience:5,
        rating:4.1,
        reviews:250
    },
];

const ExpertList = (props) => {
    return (
        <FlatList
            data={expertData}
            renderItem={({ item }) => <ExpertComponent item={item} bookExperts={props.bookExperts} viewExperts={props.viewExperts}/>}
        />
    )
}
const styles = StyleSheet.create({
    container: {
    }
})


const ExpertComponent = (props) => {
    return (
        <View style={{ flexDirection: 'column', padding: 3 , backgroundColor: '#F5FCFF'}}>
            <View style={{ flex: 1, flexDirection: 'row', backgroundColor: '#ffffff',paddingBottom:2 }}>
                <View style={{ alignItems: 'center', padding: 5 }}>
                    <Thumbnail medium round source={props.item.img} />
                            </View>
                <TouchableOpacity  style={{ flex: 2}} >
           
                <View style={{ flex: 2, paddingHorizontal: 10,paddingRight:2 }}>
                    <View style={{ flexDirection:'row',padding:0 ,margin:0 }}>
                        <Text style={{ flex: 1 ,marginLeft:10}}>{props.item.name}</Text>
                         <Icon name={props.item.dimension} type="MaterialCommunityIcons" style={{ fontSize: 18 ,marginRight:4}} />
                         
                    </View>
                    <Text style={{ fontSize: 13,marginLeft:10  }}>{props.item.speciality}</Text>
                    <View style={{ flexDirection: 'row', marginTop: 3,marginLeft:10 }}>
                    <Text style={{color:'#000',fontSize:14}}>{props.item.rating} </Text>
                        <StarRating
                            disabled={false}
                            maxStars={1}
                            rating={1}
                            fullStarColor={'#000'}
                            starSize={16}
                        />
                        <View style={{flex:1}}>
                        </View>
                        <Button rounded primary style={{height:25,marginVertical:1}}  onPress={()=>props.bookExperts()} >
                      
                                    <Text>Connect</Text>
                                </Button>
                    </View>
                    
                </View>
                </TouchableOpacity>

            </View>

        </View>
    )
}


export default ExpertList;

