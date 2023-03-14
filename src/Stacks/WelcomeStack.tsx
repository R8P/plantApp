import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import WelcomeScreen from '../Screens/WelcomeScreen';
import {WelcomeStackParams} from '../Constants/types';

const Welcome = createNativeStackNavigator<WelcomeStackParams>();

const screenOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

const WelcomeStack = () => {
  return (
    <Welcome.Navigator screenOptions={screenOptions}>
      <Welcome.Screen name="WelcomeScreen" component={WelcomeScreen} />
    </Welcome.Navigator>
  );
};

export default WelcomeStack;
