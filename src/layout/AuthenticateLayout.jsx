import React, {memo} from 'react';
import {AppBottomNavigator, DrawerNavigator} from '../navigation/AppNavigation';
import {Text, View} from 'react-native';

const AuthenticateLayout = memo(() => {
  return <DrawerNavigator />;
});

export default AuthenticateLayout;
