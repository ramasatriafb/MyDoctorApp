import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import {DummyDoctor2, IconStar} from '../../../assets';
import { fonts, colors } from '../../../utils'

const RatedDoctor = () => {
    return (
        <View style={styles.container}>
            <Image source={DummyDoctor2} style ={styles.avatar}/>
            <View style={styles.profile}>
                <Text style={styles.name}>Alexandra Michella</Text>
                <Text style={styles.profession}>Pediatrician</Text>
            </View>
            <View style={styles.rate}>
                <IconStar />
                <IconStar />
                <IconStar />
                <IconStar />
                <IconStar />
            </View>
        </View>
    )
}

export default RatedDoctor;

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 16,
    },
    avatar:{
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        marginRight: 12,
    },
    rate:{
        flexDirection: 'row',
    },
    name:{
        fontSize: 16,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
    },
    profile:{
        flex: 1,
    },
    profession:{
        fontSize: 12,
        fontFamily: fonts.primary.normal,
        color: colors.text.secondary,
        marginTop: 2,
    }
});
