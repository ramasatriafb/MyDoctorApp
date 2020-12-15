import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { Header, Profile, List, Gap } from '../../components';
import { colors, getData, showError } from '../../utils';
import { ILNullPhoto } from '../../assets';
import { Fire } from '../../config';

const UserProfile = ({navigation}) => {
    const [profile, setProfile] = useState({
        fullName: '',
        profession: '',
        photo: ILNullPhoto,
    });
    useEffect(() =>{
        getData('user').then(res => {
            const data = res;
            data.photo = {uri: res.photo};
            setProfile(data);
        });
    },[]);

    const signOut= () => {
        Fire.auth().signOut().then(()=> {
            console.log('success sign out');
            navigation.replace('GetStarted');
        }).catch(err => {
            showError(err.message);
        })
    }

    return (
        <View style={styles.page}>
            <Header title="Profile" onPress={()=>navigation.goBack()}/>
            <Gap height={10}/>
            {profile.fullName.length > 0 && (
                <Profile name={profile.fullName} desc={profile.profession} photo={profile.photo}/>
            )}
            <Gap height={14}/>
            <List  name="Edit Profile" desc="Last Update Yesterday" type="next" icon="edit-profile" onPress={() => navigation.navigate('UpdateProfile')}/>
            <List  name="Language" desc="Last Update Yesterday" type="next" icon="language"/>
            <List  name="Give Us Rate" desc="Last Update Yesterday" type="next" icon="rate"/>
            <List  name="Sign Out " desc="Sign Out" type="next" icon="help" onPress={signOut}/>
        </View>
    )
}

export default UserProfile

const styles = StyleSheet.create({
    page:{
        backgroundColor: colors.white,
        flex: 1,
    }
})
