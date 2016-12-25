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
} from 'react-native';

import {
  Header,
  Button,
} from 'native-base';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {Card} from 'react-native-material-design';
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
  vote: function(){
    Alert.alert("vote");
  },
  comments: function(){
    Alert.alert("comments");
  },
  share: function(){
    Alert.alert("share");
  },


  _openDrawer: function(){
    this.refs["drawer"].openDrawer();
    //if(position === 0){
    //  this.refs["drawer"].openDrawer();
    //}
  },
  render: function(){
    var navigationView = (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        {/*drawer/navigation content*/}

      </View>
    )

    return (
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
          <View style={styles.card}>
            <Image source={require("./app/res/previewImage.jpg")} style={styles.previewImage}/>
            <View>
              <Text style={styles.postTitlePreview}>Picture of a really cute kitty</Text>
            </View>
            <View style={styles.buttonContainer}>
              <View style={styles.voteButtonContainer}>
                <TouchableHighlight style={styles.voteButton} onPress={this.vote}>
                  <Icon name="keyboard-arrow-up" size={30} style={styles.icon}/>
                </TouchableHighlight>
                <Text style={styles.voteCount}>2193</Text>
                <TouchableHighlight style={styles.voteButton} onPress={this.vote}>
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
})

AppRegistry.registerComponent('HotForReddit', () => HotForReddit);
