import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { ILCatUmum } from '../../../assets';
import { colors, fonts } from '../../../utils';

const DoctorCategory = () => {
    return (
        <View styles={styles.container}>
            <ILCatUmum style={styles.illustration} />
            <Text style={styles.label}>Saya butuh</Text>
            <Text style={styles.category}>Dokter Umum</Text>
        </View>
    )
}

export default DoctorCategory;

const styles = StyleSheet.create({
    container: {
        padding: 12,
        backgroundColor: colors.cardLight,
        alignSelf: 'flex-start',
        borderRadius: 10,
        marginRight: 10,
        width: 100,
        height: 300,
    },
    illustration:{
        marginBottom: 28,
    },
    label:{
        fontSize: 12,
        fontFamily: fonts.primary[300],
        color: colors.text.primary,
    },
    category: {
        fontSize: 12,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
    }
});
