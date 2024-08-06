import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import Colors from '../../theme/colors';

const CustomButton = props => {
  const {backColor, title, titleColor = Colors.BLACK} = props;
  return (
    <TouchableOpacity
      {...props}
      style={[styles.container, {backgroundColor: backColor}]}>
      <Text style={[styles.title, {color: titleColor}]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.GREEN,
    padding: 8,
    borderRadius: 5,
    margin: 5,
    flex: 1,
  },
  title: {
    fontSize: 18,
    color: Colors.WHITE,
  },
});

export default CustomButton;
