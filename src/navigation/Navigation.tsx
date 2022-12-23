import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useAppSelector} from '../app/rtkHooks';
import Login from '../screens/Login/Login';
import {MyTabs} from './MyTabs';
import About from '../screens/About/About';

export const Navigation = (): JSX.Element => {
  const Stack = createNativeStackNavigator();
  const user = useAppSelector(state => state?.user);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{headerShown: false}}>
        {user.user?.accessToken == null ? (
          <>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{headerShown: false}}
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
