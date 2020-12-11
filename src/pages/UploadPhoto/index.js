import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Header, Button, Link, Gap } from '../../components';
import { ILNullPhoto, IconAddPhoto, IconRemovePhoto } from '../../assets';
import { colors, fonts } from '../../utils';
import ImagePicker from 'react-native-image-picker';

const UploadPhoto = ({navigation}) => {
    const [hasPhoto, setHasPhoto] = useState(false);
    const getImage = () =>{
        ImagePicker.launchImageLibrary((response) => {
            // Same code as in above section!
            console.log('response : ', response);
        });
    }
    return (
        <View style={styles.page}>
            <Header title="Upload Photo"  onPress={() => navigation.goBack()}/>
            <View style={styles.content}>
                <View style= {styles.profile}>
                    <TouchableOpacity onPress={getImage} style={styles.avatarWrapper}>
                        <Image style={styles.avatar} source={ILNullPhoto} />
                        {hasPhoto && <IconRemovePhoto style={styles.addPhoto}/>}
                        {!hasPhoto && <IconAddPhoto style={styles.addPhoto}/>}
                    </TouchableOpacity>
                    <Text style={styles.name}>Adelia Patra</Text>
                    <Text style={styles.profession}>Product Designer</Text>
                </View>
                <View>
                    <Button disable title="Upload and Continue" onPress={() => navigation.replace('MainApp')}/>
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
    avatar:{ width: 110, height: 110},
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
