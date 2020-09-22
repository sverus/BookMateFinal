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

  var baseUrl = "https://www.googleapis.com/books/v1/volumes?q=";

  var key = "&key=AIzaSyD4GijWnTEom_CThw6R6deoZiI7h6n3UWM";
  //building API URL


    const [value, onChangeText] = React.useState('Enter a book or author');
    const userInput = onChangeText;
  return (
    <View style={styles.container}>
      <Text>BookMate</Text>
      <Text>Search for a book</Text>
      <TextInput
  style={styles.input}
  onChangeText={text => onChangeText(text)}
  value={value}
/>
<Text>Repeated</Text>
<div id="content"></div>

      <Button
        onPress={() => {
          console.log('IT was clicked');
          console.log(value);
          var url = baseUrl + value + key;
          //replace spaces with + for API call
          url = url.replace(/ /g, "+");
          console.log(url);
          console.log("The next thing logged will be JSON data from fetch");
          fetch(url)
            .then(response => response.json())
            .then(data => {
              //loop through search results and display them
                      for (var i = 0; i < data.items.length; i++) {
                        var item = data.items[i];
                        document.getElementById("content").innerHTML += "<div class="+"book-container>"+"<h3>"+ item.volumeInfo.title+
                        "</h3> <p>Author: "+ item.volumeInfo.authors+ "</p>"+
                         "<p><img src="+ item.volumeInfo.imageLinks.thumbnail + "></p>"+
                        "</p> <p>Category: "+ item.volumeInfo.categories+ "</p>"
                        +"</div>"
            }
    });


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
  input: {
    backgroundColor: '#AAA',
    height: 80,
  }
});
