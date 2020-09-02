import React from 'react';

import store from './store';
import './App.css';


function App() {

  const unsubscribe = store.subscribe(() => {
    console.log("Store changed!", store.getState());
  });


  store.dispatch({
    type: "bugAdded",
    payload: {
      description: "Bug1"
    }
  });

  unsubscribe();

  store.dispatch({
    type: "bugRemoved",
    payload: {
      id: 1
    }
  })


  console.log(store.getState());

  return (
    <div className="App">
      <h1>Hello Redux!</h1>
    </div>
  );
}

export default App;