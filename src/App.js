import React from 'react';

// class App extends React.Component {
//   render() {
//     return (
//       <React.Fragment>
//         <label htmlFor="bar">bar</label>
//         <input type='text' onChange = {()=> {console.log('I am xxx')}} />
//       </React.Fragment>
//     )
//   }
// }

const App = ()=> {
  return (
  <div>
    <Cat />
    <Cat />
    <Cat />
    <Cat />
  </div>
  )
}
const Cat = ()=> {
  return <div>Meow!</div>
}

export default App;
