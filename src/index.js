import React, { Component } from "react";
import { render } from "react-dom";
import { injectGlobal } from "styled-components";
import "reveal.js/css/reveal.css";
import './fonts/fonts.scss';
import "./css/theme/netguru.scss";

injectGlobal`
  #root {
    height: 100vh;
  }
`;

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
        <div className="slides">
          <section>hello!</section>
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
