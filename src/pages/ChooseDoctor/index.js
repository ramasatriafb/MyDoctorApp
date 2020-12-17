import React, { useEffect, useState } from 'react'
import { StyleSheet, ScrollView, View } from 'react-native'
import { colors } from '../../utils'
import { Header, List } from '../../components'
import { DummyDoctor1 } from '../../assets'
import { Fire } from '../../config'

const ChooseDoctor = ({navigation, route}) => {
  const itemCategory = route.params;
  const [listDoctor, setListDoctor] = useState([]);
  useEffect(() => {
    callDoctorByCategory(itemCategory.category);
  }, []);

  const callDoctorByCategory = (category) => {
    Fire.database()
    .ref('doctors/')
    .orderByChild('category')
    .equalTo(category)
    .once('value')
    .then(res => {
      if (res.val()) {
        const oldData = res.val();
        const data = [];
        Object.keys(oldData).map(item => {
          data.push({
            id: item,
            data: oldData[item],
          });
        });
        setListDoctor(data);
      }
    });
  };
  return (
    <View style={styles.page}>
      <Header type="dark" title={`Pilih ${itemCategory.category}`} onPress={() => navigation.goBack()}/>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.listWrapper}>
      {listDoctor.map(doctor => {
            return (
                <List
                type="next"
                key={doctor.id}
                profile={{uri: doctor.data.photo}}
                name={doctor.data.fullName}
                desc={doctor.data.gender}
                onPress={() => navigation.navigate('DoctorProfile', doctor)}
                />
            );
        })}
      </ScrollView>
    </View>
  )
}

export default ChooseDoctor;

const styles = StyleSheet.create({
  page:{
    backgroundColor: colors.white,
    flex : 1,
  },
  listWrapper:{
    marginTop: 8,
  }
});
