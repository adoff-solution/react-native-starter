import {NavigationContainer} from '@react-navigation/native';
import Root from '../Root';
import {createStackNavigator} from './../../node_modules/@react-navigation/native/lib/module/__stubs__/createStackNavigator';
import Login from '../screens/auth/Login';
import Register from '../screens/auth/Register';
import Welcome from '../screens/auth/Welcome';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../screens/authenticated/Home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Dashboard from '../screens/authenticated/Dashboard';
import SecondBottomTab from '../screens/authenticated/SecondBottomTab';
import ThirdBottomTab from '../screens/authenticated/ThirdBottomTab';
import FourBottomTab from '../screens/authenticated/FourBottomTab';
import CustomDrawer from '../components/Drawer/CustomDrawer';

// vector icons
import Icon from 'react-native-vector-icons/MaterialIcons';
import FeatherIcon from 'react-native-vector-icons/Feather'; // Import Feather icons
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome icons
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'; // Import FontAwesome icons
import { StyleSheet, TouchableOpacity, View } from 'react-native';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

// ************ ✅ Fixed Custom Plus Button ****************
const CustomAddButton = ({ children, onPress }) => {
    return ( // Add return statement here
      <TouchableOpacity
        style={styles.plusButtonContainer}
        onPress={onPress}
        activeOpacity={0.8}
      >
        <View style={styles.plusButton}>{children}</View>
      </TouchableOpacity>
    );
  };

// Auth Navigator
export const AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="WELCOME"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="WELCOME" component={Welcome} />
      <Stack.Screen name="LOGIN" component={Login} />
      <Stack.Screen name="REGISTER" component={Register} />
    </Stack.Navigator>
  );
};

// Drawer Navigator
export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{headerShown: false}} // Hide header for all screens
    >
      <Drawer.Screen name="HOME" component={Home} />
    </Drawer.Navigator>
  );
};

// Bottom Navigation
export const AppBottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false, // Hide text labels
        tabBarActiveTintColor: '#e91e63',
        tabBarInactiveTintColor: 'blue',
        tabBarStyle: {
          position: 'absolute',
          height: 70, // Adjust the height if needed
          backgroundColor: '#2F3650',
          borderTopWidth: 0,
          elevation: 5,
          justifyContent: 'center', // Ensure vertical centering
          alignItems: 'center', // Horizontal centering
          paddingBottom: 20, // Padding to improve vertical alignment
          paddingTop: 10,
        },
      }}>
      <Tab.Screen
        name="DASHBOARD"
        component={Dashboard}
        options={{
          tabBarIcon: ({color, size}) => (
            <FeatherIcon name="copy" size={size} color={color} /> // Feather "copy" icon
          ),
        }}
      />
      <Tab.Screen
        name="SECOND_BOTTOM"
        component={SecondBottomTab}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <FontAwesomeIcon name="bar-chart" size={size} color={color} /> // FontAwesome "bar-chart" icon
          ),
        }}
      />

      {/* Floating + Icon */}
      <Tab.Screen
        name="ADD"
        component={Home} // Use any screen or a placeholder
        options={{
          tabBarIcon: ({ color }) => <Icon name="add" size={30} color={"#43484E"} />, // Icon size adjusted
          tabBarButton: (props) => <CustomAddButton {...props} />,
        }}
      />


      <Tab.Screen
        name="THIRD_BOTTOM"
        component={ThirdBottomTab}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <FontAwesomeIcon name="bar-chart" size={size} color={color} /> // FontAwesome "bar-chart" icon
          ),
        }}
      />
      <Tab.Screen
        name="FOUR_BOTTOM"
        component={FourBottomTab}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <FontAwesome5Icon name="ticket-alt" size={size} color={color} /> // FontAwesome "bar-chart" icon
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Root />
    </NavigationContainer>
  );
};

export default AppNavigation;



// Styles for Custom Button
const styles = StyleSheet.create({
    plusButtonContainer: {
      position: "absolute",
      top: -45, // Move the button higher
      left: "40%",
      transform: [{ translateX: -30 }], // Center horizontally
      justifyContent: "center",
      alignItems: "center",
      borderWidth: 10,
      borderRadius: "50%",
      borderColor: "#202536",
    },
    plusButton: {
      width: 50,
      height: 50,
      borderRadius: 30,
      backgroundColor: "#1ACB41",
      justifyContent: "center",  // Ensures that content is centered vertically
      alignItems: "center",      // Ensures that content is centered horizontally
      // shadowColor: "#000",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 3,
      elevation: 5,
    },
  });
