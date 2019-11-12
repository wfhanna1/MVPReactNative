import React from 'react';
import { createAppContainer } from 'react-navigation';
import RootStack from './config/rootStack';

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
