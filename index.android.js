import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  DrawerLayoutAndroid,
  TouchableHighlight,
  ToolbarAndroid,
  StatusBar,
} from 'react-native';

import {
  Header,
  Button,
} from 'native-base';

import Icon from 'react-native-vector-icons';
import {Card} from 'react-native-material-design';
import styles from './app/components/styles.js';
import GLOBALS from './app/components/globals.js';

class HotForReddit extends Component {

	static childContextTypes = {
		drawer: React.PropTypes.object,
		navigator: React.PropTypes.object
	};

	constructor(props) {
		super(props);
		this.state = {
			drawer: null,
			navigator: null
		};
	}

  get_top_posts(){
    fetch("https://www.reddit.com/r/todayilearned/top.json?count=N&after=t3_XXXXX")
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson;
    })
    .done();
  };

  onActionSelected(position){
    if (position === 0) { // index of 'drawer'
      this.drawer.openDrawer();
    }
  }

  render(){
    var navigationView = (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        {/*drawer/navigation content*/}

      </View>
    );

    return (
      <DrawerLayoutAndroid
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => navigationView}>
        <StatusBar
          backgroundColor={GLOBALS.primaryColorDark}
          barStyle="light-content"
        />
        <ToolbarAndroid
          //logo={require('./app_logo.png')}
          //title="Hot for Reddit"
          actions={[{title: 'Drawer', icon: require("./app/res/menu.png"), show: 'always'}]}
          onActionSelected={this.onActionSelected}
          style={styles.toolbar}
        />
        <View style={{flex: 1, alignItems: 'center'}}>
          {/*main content*/}
          <Text>Some text..</Text>
        </View>
      </DrawerLayoutAndroid>
    );
  }
}

AppRegistry.registerComponent('HotForReddit', () => HotForReddit);
