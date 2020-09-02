import React from 'react';

import { bugAdded, bugRemoved, bugResolved } from './actions';
import store from './store';
import './App.css';


function App() {

  const unsubscribe = store.subscribe(() => {
    console.log("Store changed!", store.getState());
  });


  store.dispatch(bugAdded("Bug 1"));

  store.dispatch(bugResolved(1));

  unsubscribe();

  store.dispatch(bugRemoved(1));


  console.log(store.getState());

  return (
    <div className="App">
      <h1>Hello Redux!</h1>
    </div>
  );
}

export default App;