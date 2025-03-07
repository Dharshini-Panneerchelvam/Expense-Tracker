import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthProvider } from './context/AuthContext';
import { TransactionProvider } from './context/TransactionContext';
import LoginScreen from './screens/LoginScreen';
import DashboardScreen from './screens/DashboardScreen';
import AddTransactionScreen from './screens/AddTransactionScreen';
import TransactionDetailsScreen from './screens/TransactionDetailsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <AuthProvider>
      <TransactionProvider>
        <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#3f6f79',
            },
            headerTintColor: '#fff',
          }}
        >
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Dashboard" component={DashboardScreen} />
            <Stack.Screen name="AddTransaction" component={AddTransactionScreen} />
            <Stack.Screen name="TransactionDetails" component={TransactionDetailsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </TransactionProvider>
    </AuthProvider>
  );
}
