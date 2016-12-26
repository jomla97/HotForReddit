import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  DrawerLayoutAndroid,
  TouchableHighlight,
  ToolbarAndroid,
  StatusBar,
  Image,
  Alert,
  Navigator,
  WebView
} from 'react-native';

import {
  Header,
  Button,
} from 'native-base';

import {
  Card,
  Divider
} from 'react-native-material-design';

import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './app/components/styles.js';
import GLOBALS from './app/components/globals.js';

var HotForReddit = React.createClass({

	/*
  static childContextTypes = {
		drawer: React.PropTypes.object,
		navigator: React.PropTypes.object
	};
  */

  /*
	constructor: function(props) {
		//super(props);
		this.state = {
			drawer: null,
			navigator: null
		};
	},
  */
  //REDDIT API
  get_top_posts: function(){
    fetch("https://www.reddit.com/r/todayilearned/top.json?count=N&after=t3_XXXXX")
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson;
    })
    .done();
  },
  vote: function(vote){
    Alert.alert(vote + "vote");
  },
  comments: function(){
    Alert.alert("comments");
  },
  share: function(){
    Alert.alert("share");
  },


  _openDrawer: function(){
    this.refs["nav"].refs["drawer"].openDrawer();
  },
  _closeDrawer: function(){
    this.refs["nav"].refs["drawer"].closeDrawer();
  },

  render: function(){
    var navigationView = (
      <View style={styles.drawer}>
        {/*drawer/navigation content*/}
        <TouchableHighlight onPress={() => {
          this.refs["nav"].push({id: "login"});
          this._closeDrawer();
        }}>
          <View>
            <Text style={styles.drawerButtonText}>Log in</Text>
            <Divider/>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => {
          this.refs["nav"].push({id: "settings"});
          this._closeDrawer();
        }}>
          <View>
            <Text style={styles.drawerButtonText}>Settings & customization</Text>
            <Divider/>
          </View>
        </TouchableHighlight>
      </View>
    )

    return (
      <Navigator
        ref="nav"
        initialRoute={{id: "browse"}}
        renderScene={(route, navigator) => {
          if(route.id === "browse"){
            return(
              <DrawerLayoutAndroid
                drawerWidth={300}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={() => navigationView}
                ref="drawer"
              >
                <StatusBar
                  backgroundColor={GLOBALS.primaryColorDark}
                  barStyle="light-content"
                />
                <Icon.ToolbarAndroid
                  //logo={require('./app_logo.png')}
                  //title="Hot for Reddit"
                  //actions={[{title: 'Drawer', name: require("./app/res/menu.png"), show: 'always'}]}
                  //onActionSelected={this.onActionSelected}
                  navIconName="menu"
                  onIconClicked={this._openDrawer}
                  iconColor="#FFFFFF"
                  style={styles.toolbar}
                />
                <ScrollView style={styles.contentContainer}>
                  {/*main content*/}
                  <View style={styles.cardPost}>
                    <Image source={require("./app/res/previewImage.jpg")} style={styles.previewImage}/>
                    <View>
                      <Text style={styles.postTitlePreview}>Picture of a really cute kitty</Text>
                    </View>
                    <View style={styles.buttonContainer}>
                      <View style={styles.voteButtonContainer}>
                        <TouchableHighlight style={styles.voteButton} onPress={() => this.vote("up")}>
                          <Icon name="keyboard-arrow-up" size={30} style={styles.icon}/>
                        </TouchableHighlight>
                        <Text style={styles.voteCount}>2193</Text>
                        <TouchableHighlight style={styles.voteButton} onPress={() => this.vote("down")}>
                          <Icon name="keyboard-arrow-down" size={30} style={styles.icon}/>
                        </TouchableHighlight>
                      </View>

                      <View style={styles.otherButtonContainer}>
                        <TouchableHighlight style={styles.otherButton} onPress={this.share}>
                          <Icon name="share" size={20} style={styles.icon}/>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.otherButton} onPress={this.comments}>
                          <Icon name="comment" size={20} style={styles.icon}/>
                        </TouchableHighlight>
                      </View>
                    </View>
                  </View>
                </ScrollView>
              </DrawerLayoutAndroid>
            );
          }
          else if(route.id === "login"){
            return(
              <DrawerLayoutAndroid
                drawerWidth={300}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={() => navigationView}
                ref="drawer"
              >
                <StatusBar
                  backgroundColor={GLOBALS.primaryColorDark}
                  barStyle="light-content"
                />
                <Icon.ToolbarAndroid
                  //logo={require('./app_logo.png')}
                  //title="Hot for Reddit"
                  //actions={[{title: 'Drawer', name: require("./app/res/menu.png"), show: 'always'}]}
                  //onActionSelected={this.onActionSelected}
                  navIconName="arrow-back"
                  onIconClicked={() => {this.refs["nav"].pop()}}
                  iconColor="#FFFFFF"
                  style={styles.toolbar}
                />
                <WebView
                  source={{uri: "https://www.reddit.com/api/v1/authorize.compact?client_id=A5PAdJPqXozcTQ&response_type=code&state=test&redirect_uri=https://github.com/jomla97/HotForReddit&duration=permanent&scope=identity edit flair history modconfig modflair modlog modposts modwiki mysubreddits privatemessages read report save submit subscribe vote wikiedit wikiread"}}
                />
              </DrawerLayoutAndroid>
            );
          }
          else if(route.id === "settings"){
            return(
              <DrawerLayoutAndroid
                drawerWidth={300}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={() => navigationView}
                ref="drawer"
              >
                <StatusBar
                  backgroundColor={GLOBALS.primaryColorDark}
                  barStyle="light-content"
                />
                <Icon.ToolbarAndroid
                  //logo={require('./app_logo.png')}
                  //title="Hot for Reddit"
                  //actions={[{title: 'Drawer', name: require("./app/res/menu.png"), show: 'always'}]}
                  //onActionSelected={this.onActionSelected}
                  navIconName="arrow-back"
                  onIconClicked={() => {this.refs["nav"].pop()}}
                  iconColor="#FFFFFF"
                  style={styles.toolbar}
                />
                <ScrollView style={styles.contentContainer}>
                  <View style={styles.cardSettings}>
                    <Text style={styles.header}>General</Text>
                    <View style={styles.settingsRow}>
                      <Text>Some option</Text>
                    </View>
                  </View>
                </ScrollView>
              </DrawerLayoutAndroid>
            );
          }
        }}
      />
    );
  }
})

AppRegistry.registerComponent('HotForReddit', () => HotForReddit);
