import React, { useState, useContext, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { TransactionContext } from '../context/TransactionContext';
import { styles } from '../styles';
import { Picker } from '@react-native-picker/picker';

const AddTransactionScreen = ({ navigation }) => {
  const { addTransaction } = useContext(TransactionContext);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [type, setType] = useState('Transaction Type');
  const [category, setCategory] = useState('Category');
  const [error, setError] = useState('');
  
  console.log(" setCategory:", category);
  const handleAddTransaction = () => {
    console.log("Final Category before submit:", category);
    // Validate all fields
    if (!description || !amount || !date || !location || type === 'Transaction Type' || category === 'Category') {
      setError('Please fill in all fields.');
      return;
    }

    // Validate amount to ensure it's a number with optional decimal
    const amountRegex = /^\d*\.?\d{0,2}$/; // Allow digits with an optional decimal point and max two decimals
    if (!amountRegex.test(amount)) {
      setError('Please enter a valid amount (e.g., 10.50).');
      return;
    }

    addTransaction({
      description,
      amount: parseFloat(amount),
      date,
      location,
      type,
      category,
    });
    navigation.goBack(); // Go back to the dashboard
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Transaction</Text>
      
      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      <TextInput 
        style={styles.input} 
        placeholder="Description" 
        value={description} 
        onChangeText={setDescription} 
      />
      <TextInput 
        style={styles.input} 
        placeholder="Amount" 
        keyboardType="numeric" 
        value={amount} 
        onChangeText={(text) => {
          // Only allow numbers and decimal point
          if (/^\d*\.?\d{0,2}$/.test(text)) {
            setAmount(text);
          }
        }} 
      />
      <TextInput 
        style={styles.input} 
        placeholder="Date (YYYY-MM-DD)" 
        value={date} 
        onChangeText={setDate} 
      />
      <TextInput 
        style={styles.input} 
        placeholder="Location" 
        value={location} 
        onChangeText={setLocation} 
      />

      {/* Transaction Type Dropdown */}
      <Picker
        selectedValue={type}
        style={styles.dropdown}
        onValueChange={(itemValue) => setType(itemValue)}
      >
        <Picker.Item label="Transaction Type" value="Transaction Type" />
        <Picker.Item label="Credit" value="Credit" />
        <Picker.Item label="Debit" value="Debit" />
        <Picker.Item label="Refund" value="Refund" />
      </Picker>

      {/* Category Dropdown */}
      <Picker
        selectedValue={category} 
        style={styles.dropdown}
        onValueChange={(itemValue) => {
          console.log("Selected Category:", itemValue); // Debugging
          setCategory(itemValue)}}
      >
        <Picker.Item label="Category" value="Category" />
        <Picker.Item label="Shopping" value="Shopping" />
        <Picker.Item label="Travel" value="Travel" />
        <Picker.Item label="Utility" value="Utility" />
        <Picker.Item label="Food" value="Food" />
        <Picker.Item label="Entertainment" value="Entertainment" />
        <Picker.Item label="Groceries" value="Groceries" />
        <Picker.Item label="Petrol" value="Petrol" />
        <Picker.Item label="Parlour" value="Parlour" />
        <Picker.Item label="Medical" value="Medical" />
        <Picker.Item label="Trip" value="Trip" />
      </Picker>

      <TouchableOpacity style={styles.button} onPress={handleAddTransaction}>
        <Text style={styles.buttonText}>Add Transaction</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddTransactionScreen;
