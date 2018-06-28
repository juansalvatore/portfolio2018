import React, { Component } from 'react'
import { connect } from 'react-redux'

class Experience extends Component {
  displayExperience() {
    return this.props.experience.map(item => {
      return (
        <div class="experience_container">
          <span class="experience_description">
            I'm a JavaScript developer based in Buenos Aires working with
            React/Redux, D3 and Cartojs at the
            <a
              rel="stylesheet"
              target="_blank"
              rel="noopener noreferrer"
              href="http://datos.gob.ar/"
            >
              {' '}
              Ministry of Modernization of Argentina
            </a>.
            <br />
            My{' '}
            <a
              rel="stylesheet"
              target="_blank"
              href="./images/juan_salvatore_cv.pdf"
            >
              CV
            </a>{' '}
            offers some additional background.
          </span>
        </div>
      )
    })
  }

  render() {
    return (
      <div class="container ">
        <div class="container_center experience">
          <div>
            <div class="section_title">about me</div>
            <div>{this.displayExperience()}</div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  experience: state.experience,
})

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Experience)
