import React, { Component } from "react";
import { render } from "react-dom";
import styled, { injectGlobal } from "styled-components";
import ngLogo from "./img/netguru-logo-full.svg";
import "reveal.js/css/reveal.css";
import "./fonts/fonts.scss";
import "./css/theme/netguru.scss";

injectGlobal`
  #root {
    height: 100vh;
    position: relative;
  }
`;

const Logo = styled.img`
  && {
    position: absolute;
    top: 0;
    right: 0;
    height: 30px;
    margin: 20px;
  }
`;

class Counter extends Component {
  state = {
    disabled: false
  };

  handleClick = () => this.setState({ disabled: true });

  render() {
    return (
      <button onClick={this.handleClick} disabled={this.state.disabled}>
        hello
      </button>
    );
  }
}

class App extends Component {
  componentDidMount() {
    Reveal.initialize({
      controls: false,
      dependencies: [
        {
          src: "reveal.js/plugin/markdown/marked.js",
          condition: function() {
            return !!document.querySelector("[data-markdown]");
          }
        },
        {
          src: "reveal.js/plugin/markdown/markdown.js",
          condition: function() {
            return !!document.querySelector("[data-markdown]");
          }
        },

        // Syntax highlight for <code> elements
        {
          src: "reveal.js/plugin/highlight/highlight.js",
          async: true,
          callback: function() {
            hljs.initHighlightingOnLoad();
          }
        },

        // Zoom in and out with Alt+click
        { src: "reveal.js/plugin/zoom-js/zoom.js", async: true },

        // Speaker notes
        { src: "reveal.js/plugin/notes/notes.js", async: true }
      ]
    });
  }

  render() {
    return (
      <div className="reveal">
        <Logo src={ngLogo} />
        <div className="slides">
          <section>
            <h1>What the Front-end</h1>
          </section>
          <section>Slide 2</section>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));

if (module.hot) {
  module.hot.dispose(() => {
    window.location.reload();
  });
}
