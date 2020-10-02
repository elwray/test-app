import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import {AppView} from './containers/AppView/AppView';
import {AppContextProvider} from './contexts/AppContextProvider';

function App() {
  return (
    <AppContextProvider>
      <AppView/>
    </AppContextProvider>
  );
}

export default App;