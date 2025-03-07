import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles';

const TransactionDetailsScreen = ({ route }) => {
  const { transaction } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>💰 Transaction Details 💰</Text>
      <View style={styles.detailsContainer}>
        <Text style={styles.label}>Description:</Text>
        <Text style={styles.value}>{transaction.description}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.label}>Amount:</Text>
        <Text style={styles.value}>{transaction.amount}💲</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.label}>Date:</Text>
        <Text style={styles.value}>{transaction.date}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.label}>Location:</Text>
        <Text style={styles.value}>{transaction.location}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.label}>Type:</Text>
        <Text style={styles.value}>{transaction.type}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.label}>Category:</Text>
        <Text style={styles.value}>{transaction.category}</Text>
      </View>
    </View>
  );
};

export default TransactionDetailsScreen;
