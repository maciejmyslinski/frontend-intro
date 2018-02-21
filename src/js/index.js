import Reveal from "reveal.js";
import React, { Component } from "react";
import { render } from "react-dom";
import { injectGlobal } from 'styled-components';
import "reveal.js/css/reveal.css";
import "reveal.js/css/theme/solarized.css";

injectGlobal`
  #root {
    height: 100vh;
  }
`

class App extends Component {
  componentDidMount() {
    Reveal.initialize({ dependencies: [] });
  }

  render() {
    return (
      <div className="reveal">
        <div className="slides">
          <section>Slide 1</section>
          <section>Slide 2</section>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
