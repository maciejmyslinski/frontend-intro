import Reveal from "reveal.js";
import React, { Component } from "react";
import { render } from "react-dom";
import { injectGlobal } from "styled-components";
import "reveal.js/css/reveal.css";
import "./css/theme/netguru.scss";

injectGlobal`
  #root {
    height: 100vh;
  }
`;

class App extends Component {
  componentDidMount() {
    Reveal.initialize();
  }

  render() {
    return (
      <div className="reveal">
        <div className="slides">
          <section>abcd</section>
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
