import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { colors, fonts } from '../../utils'
import { Header, ChatItem, InputChat} from '../../components'

const Chatting = ({navigation}) => {
    return (
      <View style={styles.page}>
        <Header type="dark-profile" title="Alexandra Michelle" onPress={() => navigation.goBack()}/>
        <View style={styles.content}>
            <Text style={styles.chatDate}>Senin, 21 Maret , 2020</Text>
            <ChatItem isMe/>
            <ChatItem/>
            <ChatItem isMe/>
        </View>
        <InputChat/>
      </View>
    )
}

export default Chatting;

const styles = StyleSheet.create({
  page:{
    backgroundColor: colors.white,
    flex : 1,
  },
  content:{
      flex: 1,
  },
  chatDate:{
      fontSize: 11,
      fontFamily: fonts.primary.normal,
      color: colors.text.secondary,
      marginVertical: 20,
      textAlign: 'center',
  }
});
