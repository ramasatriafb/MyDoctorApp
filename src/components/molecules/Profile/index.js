import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { DummyUser, IconRemovePhoto, IconMale, IconFemale } from '../../../assets'
import { colors, fonts } from '../../../utils'

const Profile = ({name, desc, sex, isRemove, photo, onPress}) => {
    const Icon =() =>{
        if(sex === 'pria'){
            return <IconMale style={styles.iconPhoto}/>;
        }
        if(sex === 'wanita'){
            return <IconFemale style={styles.iconPhoto}/>;
        }
        return <IconRemovePhoto style={styles.iconPhoto}/>;
    }
    if(sex){
        return (
            <View style={styles.container}>
                {!isRemove && (
                    <View style={styles.borderProfile}>
                    <Image source={photo} style={styles.avatar}/>
                    <Icon/>
                    </View>
                )}
                {isRemove && (
                     <TouchableOpacity style={styles.borderProfile} onPress={onPress}>
                     <Image source={photo} style={styles.avatar}/>
                     {isRemove &&  <IconRemovePhoto style={styles.iconPhoto}/>}
                     <Icon/>
                     </TouchableOpacity>
                )}
                {
                    name && (
                        <View>
                            <Text style={styles.name}>{name}</Text>
                            <Text style={styles.profession}>{desc}</Text>
                        </View>
                    )
                }
            </View>
        )
    }
    return (
        <View style={styles.container}>
            {!isRemove && (
                <View style={styles.borderProfile}>
                <Image source={photo} style={styles.avatar}/>
                </View>
            )}
            {isRemove && (
                 <TouchableOpacity style={styles.borderProfile} onPress={onPress}>
                 <Image source={photo} style={styles.avatar}/>
                 {isRemove &&  <IconRemovePhoto style={styles.iconPhoto}/>}
                 </TouchableOpacity>
            )}
            {
                name && (
                    <View>
                        <Text style={styles.name}>{name}</Text>
                        <Text style={styles.profession}>{desc}</Text>
                    </View>
                )
            }
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatar: {
        width: 110,
        height: 110,
        borderRadius: 110 /2 ,
    },
    borderProfile:{
        width: 130,
        height: 130,
        borderRadius: 130 /2 ,
        borderWidth: 1,
        borderColor: colors.border,
        justifyContent: 'center',
        alignItems: 'center',
    },
    name:{
        fontSize: 20,
        fontFamily: colors.text.primary[600],
        color: colors.text.primary,
        marginTop: 16,
        textAlign: 'center',
    },
    profession:{
        fontSize: 16,
        fontFamily: fonts.primary[600],
        color: colors.text.secondary,
        marginTop: 2,
        textAlign: 'center',
    },
    iconPhoto:{
        position: 'absolute',
         right: 8,
         bottom: 8,
    }
})
