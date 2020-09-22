import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
 AppRegistry,
 Button,
 TextInput,
 Alert
} from 'react-native';



export default function App() {

    const [value, onChangeText] = React.useState('Enter a book or author');
  return (
    <View style={styles.container}>
      <Text>BookMate</Text>
      <Text>Search for a book</Text>
      <TextInput
  style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
  onChangeText={text => onChangeText(text)}
  value={value}
/>
      <Button
        onPress={() => {
          Alert.alert('You tapped the button!');
        }}
        title="Press Me"
      />
      <StatusBar style="auto" />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
