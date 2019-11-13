import React from 'react';
import TabNavigator from './config/TabNavigator';
//import { createAppContainer } from 'react-navigation';
//const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return (
      <TabNavigator />
      );
  }
}
