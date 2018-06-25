import React, { Component } from 'react'
import Projects from '../containers/Projects'
import '../styles/main.min.css'

import Experience from '../containers/Experience'

class App extends Component {
  render() {
    return (
      <div>
        <Experience />
        <Projects />
      </div>
    )
  }
}

export default App
