import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import RootComponent from '~RootComponent';

const App = () => {
  return (
    // SafeArea TODO
    <SafeAreaProvider>
      <RootComponent />
    </SafeAreaProvider>
  );
};

export default App;
