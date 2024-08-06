import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {FilterSearch, SearchNormal} from 'iconsax-react-native';
import {useNavigation} from '@react-navigation/native';
import {FILTERCHARACTERS, SEARCHCHARACTERS} from '../../utils/routes';

export default function HeaderRight() {
  const navigation = useNavigation();
  return (
    <View style={{flexDirection: 'row', marginRight: 10, gap: 5}}>
      <Pressable onPress={() => navigation.navigate(SEARCHCHARACTERS)}>
        <SearchNormal size="27" color="black" variant="Outline" />
      </Pressable>
      <Pressable onPress={() => navigation.navigate(FILTERCHARACTERS)}>
        <FilterSearch size="27" color="black" variant="Outline" />
      </Pressable>
    </View>
  );
}
