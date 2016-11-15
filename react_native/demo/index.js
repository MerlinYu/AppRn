/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  Animated,
  ListView,
  Button,
  TouchableHighlight,
  TouchableOpacity,
  DrawerLayoutAndroid,
  ProgressBarAndroid,
  Navigator,
  BackAndroid,
  View
} from 'react-native';
import HomePageComponent from './HomePageComponent';
import PageListView from './PageListView';
import PageAnim from './PageAnim';
import PageTab from './CommonComponents/components/PageTab';
import PageSimpleTab from './PageSimpleTab';
var PageTabIndex = require("./CommonComponents/components/PageTabIndex");

// var RefreshableListView = require("./CommonComponents/components/RefreshListView");
var ToolbarAndroid = require('ToolbarAndroid');
// var api = require("../../Network/api.js");
import MyComponent from './MyComponent';

export default class ComponentView extends Component {
  static propTypes = {
    back_index:React.PropTypes.string.isRequired,
    navigator:React.PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {

    };
  }


  componentDidMount() {
    const navigator = this.props.navigator;
    // log("hello");

    BackAndroid.addEventListener('hardwareBackPress', function() {
    if (navigator && navigator.getCurrentRoutes().length >= 1) {
      navigator.pop();
      return true;
    }
    return false;
    });
  }

  componentWillUnmount() {
    BackAndroid.removeEventListener('hardwareBackPress');
  }
  //navigationBar node
  //可选参数，提供一个在场景切换的时候保持的导航栏。
  render() {
    return(
        <Navigator
              initialRoute={{name:"demo", index:0 }}
              configureScene={(route) => {
                    return Navigator.SceneConfigs.FloatFromBottom;
              }}
              renderScene={this.renderScene}
              navigationBar={
              <Navigator.NavigationBar
                 routeMapper={{
                   LeftButton: (route, navigator, index, navState) => {
                     return (
                       <Text style = {styles.nav_bar_text}>back</Text>);
                  },
                   RightButton: (route, navigator, index, navState) => {
                     return (
                       <Text style = {styles.nav_bar_text}>Done</Text>);
                   },
                   Title: (route, navigator, index, navState) => {
                      return (
                        <Text style = {styles.nav_bar_text}>Awesome Nav Bar</Text>);
                    },
                 }}
                 style={styles.nav_bar_container}
               />
              }
          />
    );
  }

  renderScene(route,nav) {

    switch(route.index_id) {
      case 'listview':
        return <PageListView
          navigator = {nav}/>;
      case 'anim':
        return <PageAnim
          navigator = {nav}/>;
      case 'tab':
        return <PageTab
          navigator = {nav}/>
     case 'simpletab':
        return <PageSimpleTab
          navigator = {nav}/>
    // case 'pagetabindex':
     case 'mixins':
        return <MyComponent
          navigator = {nav}/>

      default:
         return <View style={styles.nav_container}>
         <TouchableOpacity
          style={styles.button}
          onPress={() =>
            nav.push(
              {index_id: 'listview'})
            }>
          <Text> listview</Text>
          </TouchableOpacity>

          <TouchableOpacity
           style={styles.button}
           onPress={() =>
             nav.push(
               {index_id: 'anim'})
             }>
           <Text> anim</Text>
           </TouchableOpacity>

           <TouchableOpacity
            style={styles.button}
            onPress={() =>
              nav.push({index_id: 'tab'})
            }>
            <Text> page tab</Text>
            </TouchableOpacity>

            <TouchableOpacity
             style={styles.button}
             onPress={() =>
               nav.push({index_id: 'simpletab'})
             }>
             <Text> page simple tab</Text>
             </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() =>
                nav.push({index_id: 'pagetabindex'})
              }>
              <Text> page index tab</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() =>
                nav.push({index_id: 'mixins'})
              }>
              <Text> enhance </Text>
            </TouchableOpacity>

            </View>;
        }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection:'column',
    backgroundColor: '#fffff0',
  },
  nav_container: {
    flex: 1,
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  nav_bar_container: {
    backgroundColor: '#feecdd',
  },
  nav_bar_text: {
    fontSize:20,
    margin:5
  },
  button: {
    marginTop:20,
  },
  textCenter:{
    textAlign:'center',
    fontSize:20,
    margin:10
  }

});
