'use strict';

import React from 'react-native';
import Main from './main';

let {
  AppRegistry,
  NavigatorIOS,
  View
} = React;

let ReactNativeBabel = React.createClass({
  render() {
    return (
      <NavigatorIOS
        style={{flex: 1}}
        initialRoute={{
          component: Main,
          title: 'React Native Starter'
        }}
      />
    );
  }
});

AppRegistry.registerComponent('NativeStarter', () => ReactNativeBabel);
