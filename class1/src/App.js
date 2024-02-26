import React  from "react";
import "./App.css"
import Home  from './component/Home'
import Contact from './component/contact'

// component body ( jsx)
function App(props) {
  return (
    <div>
      <h1 className="title">React Functional Component</h1>
      <Home/>
      <Contact/>
    </div>
  )
}


// default & const
export default App;