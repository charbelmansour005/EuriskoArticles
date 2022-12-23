import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useAppSelector} from '../app/rtkHooks';
import {MyTabs} from './MyTabs';
import {About, Login, LandingScreen} from '../screens/index';

export const Navigation = (): JSX.Element => {
  const Stack = createNativeStackNavigator();
  const user = useAppSelector(state => state?.user);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LandingScreen"
        screenOptions={{headerShown: false}}>
        {user.user?.accessToken == null ? (
          <>
            <Stack.Screen
              name="LandingScreen"
              component={LandingScreen}
              options={{headerShown: false, gestureDirection: 'horizontal'}}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{
                headerShown: false,
                gestureDirection: 'horizontal',
                animation: 'slide_from_right',
              }}
            />
          </>
        ) : (
          <>
            <Stack.Screen name="MyTabs" component={MyTabs} />
            <Stack.Screen name="About" component={About} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
