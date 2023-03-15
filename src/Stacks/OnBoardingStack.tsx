import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {OnBoardingStackParams} from '../Constants/types';
import OnBoardingScreen from '../Screens/OnBoardingScreen';

const Welcome = createNativeStackNavigator<OnBoardingStackParams>();

const screenOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

const OnBoardingStack = () => {
  return (
    <Welcome.Navigator screenOptions={screenOptions}>
      <Welcome.Screen name="OnBoardingScreen" component={OnBoardingScreen} />
    </Welcome.Navigator>
  );
};

export default OnBoardingStack;
