import React from "react"
import "./App.css"
import Home from "./componet/Home.jsx"
import {Provider} from 'react-redux'
import store from './Store'

class App extends React.Component{
  render(){
  return(
    <div style={{backgroundColor: "green"}}>
      <Provider store={store}>
      <Home />
      </Provider>
    </div>
  )
}
}

export default App