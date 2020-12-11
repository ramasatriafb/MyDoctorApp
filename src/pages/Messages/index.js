import React, {useState}from 'react'
import { StyleSheet,View, Text, ScrollView } from 'react-native'
import List from '../../components/molecules/List'
import { fonts, colors } from '../../utils';
import {DummyDoctor1, DummyDoctor2, DummyDoctor4} from '../../assets';
const Messages = ({navigation}) => {
    const [doctors] = useState([
        {
            id: 1,
            profile: DummyDoctor4,
            name: 'Alexandra Michelle',
            desc: 'Baik ibu, terima kasih banyak atas jawa...',
        },{
            id: 2,
            profile: DummyDoctor2,
            name: 'Patricia Lessana',
            desc: 'Oh tentu saja tidak karena jeruk it...',
        },{
            id: 3,
            profile: DummyDoctor1,
            name: 'Gatra Sulaiman',
            desc: 'Oke menurut pak dokter bagaimana unt...',
        },{
            id: 4,
            profile: DummyDoctor1,
            name: 'Gatra Sulaiman',
            desc: 'Oke menurut pak dokter bagaimana unt...',
        },{
            id: 5,
            profile: DummyDoctor1,
            name: 'Gatra Sulaiman',
            desc: 'Oke menurut pak dokter bagaimana unt...',
        },{
            id: 6,
            profile: DummyDoctor1,
            name: 'Gatra Sulaiman',
            desc: 'Oke menurut pak dokter bagaimana unt...',
        },{
            id: 7,
            profile: DummyDoctor1,
            name: 'Gatra Sulaiman',
            desc: 'Oke menurut pak dokter bagaimana unt...',
        },{
            id: 8,
            profile: DummyDoctor1,
            name: 'Gatra Sulaiman',
            desc: 'Oke menurut pak dokter bagaimana unt...',
        },{
            id: 9,
            profile: DummyDoctor1,
            name: 'Gatra Sulaiman',
            desc: 'Oke menurut pak dokter bagaimana unt...',
        },
    ]);
    return (
        <View style={styles.page}>
            <View style={styles.content}>
                <Text style={styles.title}>Messages</Text>
                <ScrollView showsVerticalScrollIndicator={false} style={styles.listWrapper}>
                {doctors.map(doctor =>{
                        return (
                        <List
                        key={doctor.id}
                        profile={doctor.profile}
                        name={doctor.name}
                        desc={doctor.desc}
                        onPress={()=>navigation.navigate('Chatting')}
                        />
                        );
                    })}
            </ScrollView>
            </View>
        </View>
    )
}

export default Messages;

const styles = StyleSheet.create({
    page:{
        backgroundColor: colors.secondary,
        flex: 1,
    },
    content:{
        backgroundColor: colors.white,
        flex: 1,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    listWrapper:{
        marginTop: 16,
    },
    title:{
        fontSize: 20,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
        marginTop: 30,
        marginLeft: 16,
    }
});
