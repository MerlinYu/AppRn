'use strict';

import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableOpacity
} from 'react-native';
import RnDemo from './react_native/demo/index'

class MyAwesomeApp extends React.Component {
  render() {
    return (
       <View style={styles.container}>
        <Navigator
          initialRoute={{title:'react-native',index:0}}
          renderScene={this.renderScene} />
      </View>
    )
  }

  renderScene(route,nav) {
    console.log("renderScene");

    switch (route.index_id) {
      case "react-native-world":
        return (
          <RnDemo
          navigator = {nav}
          />
        );
      default:
      return (
        <View style={styles.nav_container}>
        <TouchableOpacity
         onPress={() =>
           nav.push({
           index_id: 'react-native-world',
           params:{
             back_index:'react-native-world',
           }
         })}
         >
         <Text> React Native World!</Text>
         </TouchableOpacity>
         </View>
      );
    }
  }

}
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  nav_container: {
    flex: 1,
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  textCenter:{
    textAlign:'center',
    fontSize:20,
    margin:10
  }

});

AppRegistry.registerComponent('MyAwesomeApp', () => MyAwesomeApp);
