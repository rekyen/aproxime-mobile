import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { PostIcon, PostIconActive } from './styles';

export default function NewPostButton({ color, focused }) {
  return !focused ? (
    <Icon name="add" size={25} color={'rgba(0, 240, 255, 0.5)'} />
  ) : (
    <PostIconActive color={color}>
      <Icon name="add" size={25} color={'#3d3d3d'} />
    </PostIconActive>
  );
}
