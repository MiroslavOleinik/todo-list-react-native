import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { store } from './store/store';
import ToDo from './components/ToDo';

const basicStore = createStore(store);

class App extends Component {
  render() {
    return (
      <Provider store={basicStore}>
        <ToDo />
      </Provider>
    )
  }
}

export default App;
