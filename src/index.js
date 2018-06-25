import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Thunk from 'redux-thunk'
import reducers from './reducers'

import Navbar from './component/Navbar'
import App from './component/App'

const store = createStore(reducers, applyMiddleware(Thunk))

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route path="/" component={Navbar} />
        <Route path="/" component={App} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
)
