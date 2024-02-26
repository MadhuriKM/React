import React from 'react'
import Calculator from './Screens/Calculator'
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='container'>
        <Calculator/>
      </div>
    )
  }
}

export default App