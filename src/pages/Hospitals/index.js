import React from 'react'
import { StyleSheet,View, Text, ImageBackground, ScrollView } from 'react-native'
import {ILHospitalBG} from '../../assets/ilustration';
import { fonts, colors } from '../../utils';
import { ListHospital } from '../../components';
import { DummyHospitals1, DummyHospitals2, DummyHospitals3 } from '../../assets';

const Hospitals = () => {
    return (
        <View style={styles.page}>
            <ImageBackground source={ILHospitalBG} style={styles.background}>
                <Text style={styles.title}>Nearby Hospitals</Text>
                <Text style={styles.desc}>3 Tersedia</Text>
            </ImageBackground>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>
              <ListHospital pic={DummyHospitals1} type='Rumah Sakit' name="Citra Bunga Merdeka" address="Jln. Surya Sejahtera 20"/>
              <ListHospital pic={DummyHospitals2} type='Rumah Sakit Anak' name="Happy Family & Kids" address="Jln. Surya Sejahtera 20"/>
              <ListHospital pic={DummyHospitals3} type='Rumah Jiwa' name="Tingkatan Paling Atas" address="Jln. Surya Sejahtera 20"/>
              <ListHospital pic={DummyHospitals1} type='Rumah Sakit' name="Citra Bunga Merdeka" address="Jln. Surya Sejahtera 20"/>
              <ListHospital pic={DummyHospitals1} type='Rumah Sakit' name="Citra Bunga Merdeka" address="Jln. Surya Sejahtera 20"/>
              <ListHospital pic={DummyHospitals1} type='Rumah Sakit' name="Citra Bunga Merdeka" address="Jln. Surya Sejahtera 20"/>
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
        paddingTop: 14,
    },
});
