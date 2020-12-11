import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { DummyUser, IconRemovePhoto, IconMale, IconFemale } from '../../../assets'
import { colors, fonts } from '../../../utils'

const Profile = ({name, desc, sex, isRemove}) => {
    // const Icon =() =>{
    //     if(sex === 'male'){
    //         return <IconMale style={styles.iconPhoto}/>;
    //     }
    //     if(sex === 'female'){
    //         return <IconFemale style={styles.iconPhoto}/>;
    //     }
    //     return <IconRemovePhoto style={styles.iconPhoto}/>;
    // }
    return (
        <View style={styles.container}>
            <View style={styles.borderProfile}>
            <Image source={DummyUser} style={styles.avatar}/>
            {isRemove &&  <IconRemovePhoto style={styles.iconPhoto}/>}
            {/* <Icon/> */}
            </View>
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
