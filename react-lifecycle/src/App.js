import React,{ Component } from 'react'
import ReactDOM  from 'react-dom'
import Counter  from './component/counter'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
  }

  // mounting component
  mount() {
    ReactDOM.render(
      <React.StrictMode>
        <Counter num={0}/>
      </React.StrictMode>,
      document.getElementById('block')
    )
  }

  // unmounting component
  remove() {
    ReactDOM.unmountComponentAtNode(document.getElementById('block'))
    console.log(`component unmounted`)
  }

  render() {
    return (
      <div className='container'>
        <h1>React Lifecycle</h1>
        <div className='buttons'>
            <button onClick={() => this.mount()} className='btn-success'>Mount</button>
            <button onClick={() => this.remove()} className='btn-warning'>UnMount</button>
        </div>

        <section id="block"></section>
      </div>
    )
  }
}

export default App