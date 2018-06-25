import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Projects extends Component {
  renderList() {
    return this.props.projects.map(project => {
      return (
        <li class="project_container" key={project.title}>
          <div class="project_text">
            <h4 id={project.color} class="project_title">
              {project.title.toUpperCase()}
            </h4>
            <div class="project_description">
              <p>{project.description}</p>
            </div>
          </div>
          <div class="black_background" />
          <img src={project.img} alt={project.title} />
        </li>
      )
    })
  }

  render() {
    return (
      <div class="ul_container">
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
