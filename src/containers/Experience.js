import React, { Component } from 'react'
import { connect } from 'react-redux'

class Experience extends Component {
  displayExperience() {
    return this.props.experience.map(item => {
      return (
        <div className="experience_container" key={item.title}>
          <span className="experience_description">
            I'm a JavaScript developer based in Buenos Aires working with
            React/Redux, D3 and Cartojs at the
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://datos.gob.ar/"
            >
              {' '}
              Ministry of Modernization of Argentina
            </a>
            .<br />
            My{' '}
            <a
              rel="stylesheet"
              target="_blank"
              href="./images/juansalvatore_cv_en.pdf"
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
      <div className="container">
        <div className="container_center experience">
          <div>
            <div className="section_title">about me</div>
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

export default connect(mapStateToProps)(Experience)
