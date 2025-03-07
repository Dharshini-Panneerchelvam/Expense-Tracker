import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles';

const TransactionItem = ({ transaction, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.item}>
      <View>
        <Text>{transaction.description} - ${transaction.amount}</Text>
        <Text>Type: {transaction.type}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TransactionItem;
