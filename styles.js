import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#cdd6dd',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#3f6f79',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  logoutButton: {
    marginRight: 20, // Add margin to right side of the button
    backgroundColor: '#007BFF',
    padding: 5,
    borderRadius: 5,
  },
  logoutIcon: {
    marginRight: 15, // Adjust the margin for the icon positioning
  },
  title: {
    fontSize: 24,  // Increased font size
    fontWeight: 'bold',
    textAlign: 'center', // Center align text
    marginBottom: 20,
    padding: 20
  },
  detailsContainer: {
    flexDirection: 'row', // Align label and value in the same row
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
    width: 100, // Fixed width to align values properly
  },
  value: {
    fontSize: 16,
    flex: 1, // Ensure text aligns consistently
  },
  dashboardItems: {
    fontSize: 16,
    padding: 5
  },
  errorText: {
    color: 'red', // Error message in red
    marginBottom: 10,
    fontSize: 14,
  },

});
