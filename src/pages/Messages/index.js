import React, {useState}from 'react'
import { StyleSheet,View, Text } from 'react-native'
import ListDoctor from '../../components/molecules/ListDoctor'
import { fonts, colors } from '../../utils';
import {DummyDoctor1, DummyDoctor2, DummyDoctor4} from '../../assets';
const Messages = () => {
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
        },
    ]);
    return (
        <View style={styles.page}>
            <View style={styles.content}>
                <Text style={styles.title}>Messages</Text>
                {doctors.map(doctor =>{
                        return (
                        <ListDoctor
                        key={doctor.id}
                        profile={doctor.profile}
                        name={doctor.name}
                        desc={doctor.desc}
                        />
                        );
                    })};
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
    title:{
        fontSize: 20,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
        marginTop: 30,
        marginLeft: 16,
    }
});
