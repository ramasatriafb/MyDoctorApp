import React from 'react'
import { StyleSheet, View, Text, ImageBackground } from 'react-native'
import { ILLogo, ILGetStarted } from '../../assets'
import { Button, Gap } from '../../components'

const GetStarted = () => {
    return (
        <ImageBackground source= {ILGetStarted} style= {styles.page}>
            <View>
                <ILLogo />
                <Text style = {styles.title}>Konsultasi dengan dokter jadi lebih mudah & fleksible</Text>
            </View>
            <View>
                <Button title = "Get Started" />
                <Gap height = {16} />
                <Button title = "secondary"  title = "Sign In"/>
            </View>
        </ImageBackground>
    )
}

export default GetStarted;

const styles = StyleSheet.create({
    page: {
        padding: 40,
        justifyContent : 'space-between',
        backgroundColor: 'white',
        flex: 1
    },
    title: {
        fontSize: 28,
        fontFamily: 'Nunito-SemiBold',
        color: 'white',
        marginTop: 91
    }
});
