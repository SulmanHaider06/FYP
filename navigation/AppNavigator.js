import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/shared/LoginScreen'; // Correct path
import HomeScreen from '../screens/shared/HomeScreen'; // Correct path
import SignupScreen from '../screens/shared/SignupScreen'; // Correct path

const Stack = createStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator initialRouteName="Login">
    <Stack.Screen name="Login" component={LoginScreen}  options={{ headerShown: false }}  />
    <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
    <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }} />
  </Stack.Navigator>
);

export default AppNavigator;
