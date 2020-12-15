import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import {Header, Profile, Input, Button, Gap} from '../../components';
import { colors, storeData, showError, getData } from '../../utils';
import { Fire } from '../../config';
import ImagePicker from 'react-native-image-picker';
import { ILNullPhoto } from '../../assets';

const UpdateProfile = ({navigation}) => {
    const[profile, setProfile] = useState({
        fullName: '',
        profession: '',
        email: '',
    });
    const[password, setPassword] = useState('');
    const[photo, setPhoto] = useState(ILNullPhoto);
    const[photoForDB, setPhotoForDB] = useState('');

    useEffect(() =>{
        getData('user').then(res => {
            const data = res;
            console.log(data);
            data.photoForDB = res?.photo?.length > 1 ? res.photo : ILNullPhoto;
            const tempPhoto = res?.photo?.length > 1 ? {uri: res.photo} : ILNullPhoto;
            setPhoto(tempPhoto);
            setProfile(data);
        });
    },[]);

    const getImage = () =>{
        ImagePicker.launchImageLibrary(
            {quality: 0.5, maxHeight: 200, maxWidth: 200},
            response => {
            console.log('response : ', response);
            if(response.didCancel || response.error){
                showError('Ooop, sepertinya anda tidak memilih foto');
            }else{
                console.log('response getImage: ', response);
                setPhotoForDB(`data:${response.type};base64, ${response.data}`);
                const source = {uri: response.uri};
                setPhoto(source);
            }
        });
    };

    const update = () =>{
        if(password.length > 0){
            if(password.length < 6){
                showError('Password kurang dari 6 karakter');
            }else{
                // update password
                updatePassword();
                updateProfileData();
                navigation.replace('MainApp');
            }
        }else{
            updateProfileData();
            navigation.replace('MainApp');
        }
    };

    const updatePassword = () =>{
        Fire.auth().onAuthStateChanged(user => {
            if(user){
                // update password
                user.updatePassword(password).catch(err=>{
                    showError(err.message);
                })
            }
        })
    }
    const updateProfileData = () => {
        const data = profile;
        data.photo = photoForDB;
        Fire.database().
        ref(`user/${profile.uid}/`)
        .update(data)
        .then(() =>{
            console.log('success');
            storeData('user', data);
        })
        .catch(err =>{
            showError(err.message);
        });
    }

    const changeText =(key, value)=>{
         setProfile({
             ...profile,
             [key]: value,
         });
    };

    return (
        <View style={styles.page}>
            <Header title="Update Profile" onPress={()=> navigation.goBack()}/>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.content} >
                    <Profile isRemove photo={photo} onPress={getImage}/>
                    <Gap height={26}/>
                    <Input label="Full Name"
                        value={profile.fullName} onChangeText={(value) => changeText('fullName' , value)}/>
                    <Gap height={24}/>
                    <Input label="Pekerjaan"
                        value={profile.profession} onChangeText={(value) => changeText('profession' , value)}/>
                    <Gap height={24}/>
                    <Input label="Email"
                        value={profile.email}
                        disable />
                    <Gap height={24}/>
                    <Input label="Password"
                        value={password}
                        onChangeText={(value) => setPassword(value)}
                        secureTextEntry />
                    <Gap height={40}/>
                    <Button title="Save Profile" onPress={update}/>
                </View>
            </ScrollView>
        </View>
    )
}

export default UpdateProfile

const styles = StyleSheet.create({
    page:{
        backgroundColor: colors.white,
        flex: 1,
    },
    content:{
        padding: 16,
        paddingTop: 0,
    }
})
