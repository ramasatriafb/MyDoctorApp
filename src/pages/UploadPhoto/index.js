import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Header, Button, Link, Gap } from '../../components';
import { ILNullPhoto, IconAddPhoto, IconRemovePhoto } from '../../assets';
import { colors, fonts, storeData, showError } from '../../utils';
import ImagePicker from 'react-native-image-picker';
import { Fire } from '../../config';

const UploadPhoto = ({navigation, route}) => {
    const {fullName, profession, uid} = route.params;
    const[photoForDB, setPhotoForDB] = useState('');
    const [hasPhoto, setHasPhoto] = useState(false);
    const [photo, setPhoto] = useState(ILNullPhoto);
    const getImage = () =>{
        ImagePicker.launchImageLibrary(
            {quality: 0.5, maxHeight: 200, maxWidth: 200},
            response => {
            // console.log('response : ', response);
            if(response.didCancel || response.error){
                showError('Ooop, sepertinya anda tidak memilih foto');
            }else{
                // console.log('response getImage: ', response);
                setPhotoForDB(`data:${response.type};base64, ${response.data}`);
                const source = {uri: response.uri};
                setPhoto(source);
                setHasPhoto(true);
            }
        });
    };

    const uploadAndContinue = () =>{
        Fire.database()
        .ref('users/' + uid + '/')
        .update({photo: photoForDB});

        const data = route.params;
        data.photo = photoForDB;

        storeData('user', data);

        navigation.replace('MainApp');
    }
    return (
        <View style={styles.page}>
            <Header title="Upload Photo"  onPress={() => navigation.goBack()}/>
            <View style={styles.content}>
                <View style= {styles.profile}>
                    <TouchableOpacity onPress={getImage} style={styles.avatarWrapper}>
                        <Image style={styles.avatar} source={photo} />
                        {hasPhoto && <IconRemovePhoto style={styles.addPhoto}/>}
                        {!hasPhoto && <IconAddPhoto style={styles.addPhoto}/>}
                    </TouchableOpacity>
                    <Text style={styles.name}>{fullName}</Text>
                    <Text style={styles.profession}>{profession}</Text>
                </View>
                <View>
                    <Button disable={!hasPhoto} title="Upload and Continue" onPress={uploadAndContinue}/>
                    <Gap height={30} />
                    <Link title="Skip for this" align="center" size={16} onPress={() => navigation.replace('MainApp')} />
                </View>
            </View>
        </View>
    )
}

export default UploadPhoto;

const styles = StyleSheet.create({
    page:{ flex:1, backgroundColor: colors.white},
    content:{
        paddingHorizontal: 40,
        paddingBottom: 64,
        flex: 1,
        justifyContent: 'space-between'
    },
    profile: {alignItems: 'center', flex: 1, justifyContent: 'center'},
    avatar:{ width: 110, height: 110, borderRadius: 110 /2 },
    avatarWrapper:{
        width: 130,
        height: 130,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 130 / 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    addPhoto:{position: 'absolute', bottom: 8, right: 6},
    name:{
        fontSize: 24,
        color: colors.text.primary,
        fontFamily: fonts.primary[600],
        textAlign: 'center',
    },
    profession: {
        fontSize: 18,
        fontFamily: fonts.primary.normal,
        textAlign: 'center',
        color: colors.text.secondary,
        marginTop: 4,
    }
});
