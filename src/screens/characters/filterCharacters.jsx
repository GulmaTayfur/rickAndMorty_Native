import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import screenStyle from '../../styles/screenStyle';
import Colors from '../../theme/colors';
import {genders, status} from '../../utils/constants';
import {useDispatch, useSelector} from 'react-redux';
import {changeParams} from '../../store/actions/charactersActions';
import CustomButton from '../../components/ui/customButton';
import {useNavigation} from '@react-navigation/native';

export default function FilterCharacters() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {params} = useSelector(state => state.characters);

  const filterCharacters = () => {
    navigation.goBack();
  };

  const clearCharacters = () => {
    dispatch(changeParams({gender: null, status: null}));
  };

  return (
    <View style={screenStyle.container}>
      <View style={{flex: 1}}>
        <ScrollView>
          <Text
            style={{
              fontSize: 18,
              color: Colors.BROWN,
              fontWeight: 'bold',
              marginVertical: 10,
            }}>
            Gender
          </Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            {genders.map(item => (
              <TouchableOpacity
                onPress={() => dispatch(changeParams({gender: item.value}))}
                style={{
                  backgroundColor:
                    params.gender == item.value ? Colors.GREEN : Colors.BROWN,
                  padding: 10,
                  margin: 3,
                  borderRadius: 5,
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                key={item.id}>
                <Text style={{color: Colors.WHITE}}>{item.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <Text
            style={{
              fontSize: 18,
              color: Colors.BROWN,
              fontWeight: 'bold',
              marginVertical: 10,
            }}>
            Status
          </Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            {status.map(item => (
              <TouchableOpacity
                onPress={() => dispatch(changeParams({status: item.value}))}
                style={{
                  backgroundColor:
                    params.status == item.value ? Colors.GREEN : Colors.BROWN,
                  padding: 10,
                  margin: 3,
                  borderRadius: 5,
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                key={item.id}>
                <Text style={{color: Colors.WHITE}}>{item.value}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
      <View style={{flexDirection: 'row', paddingBottom: 20}}>
        <CustomButton
          onPress={filterCharacters}
          title="Filter"
          backColor={Colors.GREEN}
          titleColor={Colors.WHITE}
        />
        <CustomButton
          onPress={clearCharacters}
          title="Clear"
          backColor={Colors.BACKTITLECOLOR}
        />
      </View>
    </View>
  );
}
