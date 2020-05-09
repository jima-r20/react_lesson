import React from 'react';
import PropTypes from 'prop-types';

const App = ()=> {
  const proFiles = [
    {name: 'Taro', age: 10},
    {name: 'Hanako', age: 12},
    {name: 'NoName', age: 3}
  ]
  return (
  <div>
    {
      proFiles.map((profile, index)=> {
        return <User name={profile.name} age={profile.age} key={index}/>
      })
    }
  </div>
  )
}
const User = (props)=> {
return <div>Hi, I am {props.name}, and {props.age} years old!</div>
}

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

export default App;
