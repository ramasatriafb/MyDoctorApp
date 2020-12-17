import React ,{useState,useEffect} from 'react'
import { StyleSheet,View, Text, ImageBackground, ScrollView } from 'react-native'
import {ILHospitalBG} from '../../assets/ilustration';
import { fonts, colors, showError } from '../../utils';
import { ListHospital } from '../../components';
// import { DummyHospitals1, DummyHospitals2, DummyHospitals3 } from '../../assets';
import {Fire} from '../../config';

const Hospitals = () => {
    const [hospitals, setHospitals] = useState([]);
    useEffect(() => {
        Fire.database()
        .ref('hospitals/')
        .once('value').
        then(res =>{
            // console.log(res.val());
            if(res.val()){
                setHospitals(res.val());
            }
        }).catch(err =>{
            showError(err.message);
        });

    });
    return (
        <View style={styles.page}>
            <ImageBackground source={ILHospitalBG} style={styles.background}>
                <Text style={styles.title}>Nearby Hospitals</Text>
                <Text style={styles.desc}> {hospitals.length - 1} Tersedia</Text>
            </ImageBackground>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>
                {hospitals.map(item => {
                    return (
                        <ListHospital
                        key={item.name}
                        name={item.name}
                        type={item.category}
                        address={item.address}
                        pic={item.image}
                        />
                    );
                })}
            </ScrollView>
        </View>
    )
}

export default Hospitals;

const styles = StyleSheet.create({
    page:{
        backgroundColor: colors.secondary,
        flex: 1,
    },
    background:{
        height: 240,
        paddingTop: 30,
    },
    title:{
        fontSize: 20,
        fontFamily: fonts.primary[600],
        color: colors.white,
        textAlign: 'center',
    },
    desc:{
        fontSize: 14,
        fontFamily: fonts.primary[300],
        color: colors.white,
        marginTop: 6,
        textAlign: 'center',
    },
    content:{
        backgroundColor: colors.white,
        borderRadius: 20,
        marginTop: -30,
        flex: 1,
        // paddingTop: 14,
    },
});
