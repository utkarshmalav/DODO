import './firebaseConfig'; // 👈 This must come BEFORE using any Firebase
import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';

const App = () => {
  return <AppNavigator />;
};

export default App;