import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <div class="nav">
        <div class="container">
          <div class="container_center">
            <h1 class="title">Juan Salvatore </h1>
            <span>
              {/* github */}
              <a
                href="https://github.com/juansalvatore"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  class="social-link"
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
                <img class="social-link" src="./images/twitter.svg" alt="" />
              </a>
              {/* mail */}
              <a
                href="mailto:juansalvatore.ar@gmail.com"
                rel="noopener noreferrer"
              >
                <img class="social-link" src="./images/mail.svg" alt="mail" />
              </a>
              {/* medium */}
              <a
                href="https://medium.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img class="social-link" src="./images/medium.svg" alt="" />
              </a>
            </span>
          </div>
        </div>
      </div>
    )
  }
}
