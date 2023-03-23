import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { Home } from './src/pages/Home';

export default function App(): JSX.Element {
 
  return (
        <>
        <StatusBar
        barStyle='light-content'
        translucent
        backgroundColor='transparent'
        />
          <Home/>
        </>
  );
}

