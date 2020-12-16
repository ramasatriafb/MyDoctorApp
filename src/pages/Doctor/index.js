import React, { useEffect, useState } from 'react'
import { StyleSheet,View, Text, ScrollView } from 'react-native'
import {
    HomeProfile,
    DoctorCategory,
    RatedDoctor,
    NewsItem,
    Gap
} from '../../components';
import { fonts, colors, getData, showError } from '../../utils';
import {JSONDoctorCategory, DummyDoctor2, DummyDoctor1, DummyDoctor3} from '../../assets';
import {ILNullPhoto} from '../../assets';
import {Fire} from '../../config';

const Doctor = ({navigation}) => {
    const [profile, setProfile] = useState({
        photo: ILNullPhoto,
        fullName: '',
        profession: '',
    });
    const [news, setNews] = useState([]);
    const [categoryDoctor, setCategoryDoctor] = useState([]);
    useEffect(() => {
        getUserData();
        getNews();
        getCategoryDoctor();

    },[]);

    const getUserData = () => {
        getData('user').then(res =>{
            const data = res;
            data.photo = res?.photo?.length > 1 ? {uri: res.photo} : ILNullPhoto;
            setProfile(res);
        });
    }

    const getNews = () => {
        Fire.database()
        .ref('news/')
        .once('value').
        then(res =>{
            console.log(res.val());
            if(res.val()){
                setNews(res.val());
            }
        }).catch(err =>{
            showError(err.message);
        });
    }

    const getCategoryDoctor = () => {
        Fire.database()
        .ref('category_doc/')
        .once('value').
        then(res =>{
            console.log(res.val());
            if(res.val()){
                setCategoryDoctor(res.val());
            }
        }).catch(err =>{
            showError(err.message);
        });
    }
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.wrapperSection}>
                        <Gap width={32} />
                        <HomeProfile onPress={()=>navigation.navigate('UserProfile')} />
                        <Text style={styles.welcome}>Mau konsultasi dengan siapa hari ini ? </Text>
                    </View>
                    <View style={styles.wrapperScroll}>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <View style={styles.category}>
                                <Gap width={32} />
                                {categoryDoctor.map(item => {
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
                        <RatedDoctor name="Alexandra Michelle" desc="Pediatrician" avatar={DummyDoctor2} onPress={() => navigation.navigate('DoctorProfile')} />
                        <RatedDoctor name="Gatra Sulaiman" desc="Dentist" avatar={DummyDoctor1} onPress={() => navigation.navigate('DoctorProfile')} />
                        <RatedDoctor name="Leticia Patra Lestari" desc="Nutrionist" avatar={DummyDoctor3} onPress={() => navigation.navigate('DoctorProfile')} />
                        <Text style={styles.sectionLabel}>Good News</Text>
                    </View>
                    {news.map(item => {
                        return (
                            <NewsItem key={item.id}
                            // key={item.id}
                            title={item.title}
                            date={item.date}
                            image={item.image}
                            />
                        );
                    })}
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
