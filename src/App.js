import React from "react"
import "./App.css"
import Home from "./componet/Home.jsx"
import { Provider } from 'react-redux'
import { store, persistor } from './Store'
import { PersistGate } from "redux-persist/integration/react"

class App extends React.Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <Home />
          </PersistGate>
        </Provider>
      </div>
    )
  }
}

export default App