import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Colors from '../constants/Colors';
import LoginScreen from '../screens/LoginScreen';
import GuideScreen from '../screens/GuideScreen';
import OpenAccScreen from '../screens/OpenAccScreen';
import BranchScreen from '../screens/BranchScreen';
import SecurityScreen from '../screens/SecurityScreen';
import ContactScreen from '../screens/ContactScreen';
import ServiceScreen from '../screens/ServiceScreen';
import StockScreen from '../screens/StockScreen';
import GiftScreen from '../screens/GiftScreen';

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.LightSkyBlue : ''
  },
  headerTitleStyle: {
    fontFamily: 'open-sans-bold',
  },
  headerBackTitleStyle: {
    fontFamily: 'open-sans'
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.LightSkyBlue,
  headerTitle: 'Default Screen',
  headerTitleAlign: 'center'
};

const LoginNavigator = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        title: 'Login',
        headerShown: false
      },
    },
    Guide: {
      screen: GuideScreen
    },
    Account: {
        screen: OpenAccScreen
    },
    Branch: {
      screen: BranchScreen
    },
    Security: {
      screen: SecurityScreen
    },
    Gift: {
      screen: GiftScreen
    },
    Contact: {
      screen: ContactScreen
    },
    Service: {
      screen: ServiceScreen
    },
    Stock: {
      screen: StockScreen
    }
  },
  {
    initialRouteName: 'Login',
    defaultNavigationOptions: defaultStackNavOptions
  }
);

export default createAppContainer(LoginNavigator);
