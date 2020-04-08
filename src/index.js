// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


class MyType {}

class ObjectManager {
  static #privateField = 2;
  static x = 2;
  static getInstance(Type) {
    console.log(ObjectManager.#privateField);
    return new Type();
  }
}

const instance = ObjectManager.getInstance(MyType);
console.log(instance);

