import React from 'react'
import { StyleSheet,View, Text, ScrollView } from 'react-native'
import {
    HomeProfile,
    DoctorCategory,
    RatedDoctor,
    NewsItem,
    Gap
} from '../../components';
import { fonts, colors } from '../../utils';

const Doctor = () => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <HomeProfile />
                <Text style={styles.welcome}>Mau konsulasi dengan siapa hari ini ? </Text>
                <View style={styles.wrapperScroll}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <View style={styles.category}>
                            <Gap width={16} />
                                <DoctorCategory/>
                                <DoctorCategory/>
                                <DoctorCategory/>
                                <DoctorCategory/>
                            <Gap width={6} />
                        </View>
                    </ScrollView>
                </View>
                <Text style={styles.sectionLabel}>Top Rated Doctors</Text>
                <RatedDoctor />
                <RatedDoctor />
                <RatedDoctor />
                <Text style={styles.sectionLabel}>Good News</Text>
                <NewsItem />
                <NewsItem />
            <NewsItem />
            </View>
        </View>
    )
}

export default Doctor;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.secondary,
        flex: 1,
    },
    content:{
        backgroundColor: colors.white,
        flex: 1,
        paddingVertical: 30,
        paddingHorizontal: 16,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    welcome:{
        fontSize: 20,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
        marginTop: 30,
        marginBottom: 16,
        maxWidth: 209
    },
    category:{
        flexDirection: 'row',
    },
    wrapperScroll:{
        marginHorizontal: -16,
    },
    sectionLabel:{
        fontSize: 16,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
        marginTop: 30,
        marginBottom: 16,
    }
});
