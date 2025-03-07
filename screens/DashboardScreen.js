import React, { useContext, useLayoutEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { TransactionContext } from '../context/TransactionContext';
import { styles } from '../styles';
import Icon from 'react-native-vector-icons/FontAwesome'; 

const DashboardScreen = ({ navigation }) => {
  const { logout } = useContext(AuthContext);
  const { transactions } = useContext(TransactionContext);


  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Dashboard',
      headerRight: () => (
        <TouchableOpacity 
          style={styles.logoutIcon} 
          onPress={() => { logout(); navigation.replace('Login'); }}
        >
          <Icon name="sign-out" size={25} color="#fff" /> 
        </TouchableOpacity>
      ),
    });
  }, [navigation, logout]);

  return (
    <View style={styles.container}>
      <FlatList
        data={transactions}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('TransactionDetails', { transaction: item })}>
            <Text style={styles.dashboardItems}>🔹 {item.description} - ${item.amount}</Text>
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AddTransaction')}>
        <Text style={styles.buttonText}>Add Transaction</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DashboardScreen;
