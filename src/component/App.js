import React, { Component } from 'react'
import Projects from '../containers/Projects'
import '../styles/main.min.css'

import Experience from '../containers/Experience'

class App extends Component {
  state = {
    loadedExperience: false,
  }
  handleExperienceLoad = () => {
    this.setState({ loadedExperience: true })
  }

  render() {
    return (
      <div
        className={this.state.loadedExperience ? 'fade_in' : 'hide'}
        onLoad={this.handleExperienceLoad}
      >
        <Experience />
        <Projects />
      </div>
    )
  }
}

export default App
