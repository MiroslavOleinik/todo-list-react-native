import { StyleSheet } from 'react-native';

export const container = StyleSheet.create({
  backgroundColor: '#fff',
  flex: 1,
  padding: 30,
});

export const input = StyleSheet.create({
  flex: 1,
  alignSelf: 'stretch',
  borderColor: '#000',
  borderWidth: 1,
  height: 40,
  padding: 10,
});

export const enterValue = StyleSheet.create({
  alignSelf: 'stretch',
  flexDirection: 'row',
});
  
export const completed = StyleSheet.create({
  color: '#47af7e',
  fontSize: 20,
});

export const uncompleted = StyleSheet.create({
  color: '#000',
  fontSize: 20,
});
