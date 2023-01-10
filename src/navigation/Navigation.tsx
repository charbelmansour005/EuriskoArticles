import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {useAppSelector} from '../app/rtkHooks'
import {MyTabs} from './MyTabs'
import {About, Login, LandingScreen} from '../screens/index'
import {Fragment} from 'react'

export const Navigation = (): JSX.Element => {
  const Stack = createNativeStackNavigator()
  const user = useAppSelector(state => state.user)
  // https://stackoverflow.com/questions/45309430/how-can-i-replace-screen-with-react-navigation-for-react-native
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LandingScreen"
        screenOptions={{headerShown: false}}>
        {user.user?.accessToken == null ? (
          <Fragment>
            <Stack.Screen
              name="LandingScreen"
              component={LandingScreen}
              options={{
                headerShown: false,
                gestureDirection: 'horizontal',
              }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{
                title: 'Back',
                headerShown: true,
                gestureDirection: 'horizontal',
                animation: 'slide_from_right',
                headerStyle: {
                  backgroundColor: '#2C3E50',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }}
            />
          </Fragment>
        ) : (
          <Fragment>
            <Stack.Screen name="MyTabs" component={MyTabs} />
            <Stack.Screen
              name="About"
              component={About}
              options={{
                title: 'Back',
                headerShown: true,
                gestureDirection: 'horizontal',
                animation: 'slide_from_bottom',
                headerStyle: {
                  backgroundColor: '#2C3E50',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }}
            />
          </Fragment>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}
