import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Projects extends Component {
  renderList() {
    return this.props.projects.map(project => {
      const { title, color, description, img, github, link } = project
      return (
        <li className="project_container" key={title}>
          <div className="project_text">
            <h4 id={color} className="project_title">
              {title.toUpperCase()}
            </h4>
            <div className="project_description">
              <p>{description}</p>
              <div className="links">
                {github == '' ? (
                  ''
                ) : (
                  <a href={github} target="_blank">
                    GitHub
                  </a>
                )}
                <a href={link} target="_blank">
                  Website
                </a>
              </div>
            </div>
          </div>

          <div className="black_background" />

          <img src={img} alt={title} />
        </li>
      )
    })
  }

  render() {
    return (
      <div className="ul_container">
        <ul>{this.renderList()}</ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  projects: state.projects,
})

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Projects)
