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
import {JSONDoctorCategory} from '../../assets';
import { NavigationContainer } from '@react-navigation/native';

const Doctor = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.wrapperSection}>
                        <Gap width={32} />
                        <HomeProfile />
                        <Text style={styles.welcome}>Mau konsulasi dengan siapa hari ini ? </Text>
                    </View>
                    <View style={styles.wrapperScroll}>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <View style={styles.category}>
                                <Gap width={32} />
                                {JSONDoctorCategory.data.map(item => {
                                    return(
                                        <DoctorCategory key={item.id} category={item.category} onPress={() => navigation.navigate('ChooseDoctor')}/>
                                    );
                                })}
                                <Gap width={22} />
                            </View>
                        </ScrollView>
                    </View>
                    <View style={styles.wrapperSection}>
                        <Text style={styles.sectionLabel}>Top Rated Doctor</Text>
                        <RatedDoctor />
                        <RatedDoctor />
                        <RatedDoctor />
                        <Text style={styles.sectionLabel}>Good News</Text>
                    </View>
                    <NewsItem />
                    <NewsItem />
                    <NewsItem />
                    <Gap height={30} />
                </ScrollView>
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
    wrapperSection:{
        paddingHorizontal: 16,
    },
    sectionLabel:{
        fontSize: 16,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
        marginTop: 30,
        marginBottom: 16,
    }
});
