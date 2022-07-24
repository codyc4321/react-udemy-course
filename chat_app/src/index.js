// import libraries
import React from 'react';
import ReactDOM from 'react-dom/client';

// get a reference to the div with ID root
const el = document.getElementById('root');

// tell react to take control of that element
const root = ReactDOM.createRoot(el);

// create a component
function App() {

  return <input placeholder="hi there" />;
}


// function App() {
//   let message = 'Bye'
//   if (Math.random() > 0.5) {
//     message = 'Hello there';
//   }
//   return <h1>{message}</h1>;
// }

//show the component on the screen
root.render(<App/>);
