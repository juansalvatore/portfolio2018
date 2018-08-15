import React, { Component } from 'react'

export default class Navbar extends Component {
  state = {
    loadedNavbar: false,
  }
  handleNavbarLoaded = () => {
    this.setState({ loadedNavbar: true })
  }

  render() {
    return (
      <div
        className={this.state.loadedNavbar ? 'nav fade_in' : 'hide'}
        onLoad={this.handleNavbarLoaded}
      >
        <div className="container">
          <div className="container_center">
            <h1 className="title">Juan Salvatore</h1>
            <span>
              {/* github */}
              <a
                href="https://github.com/juansalvatore"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="social-link social-github"
                  src="./images/github.svg"
                  alt="github"
                />
              </a>
              {/* twitter */}
              <a
                href="https://twitter.com/jnsalvatore"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="social-link"
                  src="./images/twitter.svg"
                  alt=""
                />
              </a>
              {/* mail */}
              <a
                href="mailto:juansalvatore.ar@gmail.com"
                rel="noopener noreferrer"
              >
                <img
                  className="social-link"
                  src="./images/mail.svg"
                  alt="mail"
                />
              </a>
              {/* medium */}
              <a
                href="https://medium.com/@juansalvatore.ar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="social-link"
                  src="./images/medium.svg"
                  alt="https://medium.com/@juansalvatore.ar"
                />
              </a>
            </span>
          </div>
        </div>
      </div>
    )
  }
}
