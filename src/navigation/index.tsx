/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {NavigationContainer} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';
import BottomTabNavigator from './BottomTabNavigator';

import CommentsScreen from '../screens/CommentsScreen/CommentsScreen';
import {RootNavigatorParamList} from './types';

const Stack = createStackNavigator<RootNavigatorParamList>(); // { Navigator, Screen }

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: true}}>
        <Stack.Screen
          name="Home"
          component={BottomTabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Comments" component={CommentsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
