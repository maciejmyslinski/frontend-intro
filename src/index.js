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
            <h1>What the Front-end 🤔</h1>
            <aside className="notes">
              <p>
                Kto robił kiedykolwiek cokolwiek związanego z frontend
                developmentem?
              </p>
              <p>
                Powiem wam o frontend developmencie wszystko, co 5 lat temu
                chciałbym, żeby ktoś powiedział mi.
              </p>
            </aside>
          </section>
          <section>
            <h2>Frontend ⚡️ Backend</h2>
            <aside className="notes">
              front to wszystko, z czym użytkownik wchodzi w bezpośrednią
              interakcję
            </aside>
          </section>
          <section>
            <h2>Why Frontend is hard 🤯</h2>
            <aside className="notes">
              <ul>
                <li>
                  Różnice pomiędzy przeglądarkami (<a
                    href="https://caniuse.com"
                    taget="_blank"
                  >
                    canIuse
                  </a>)
                </li>
                <li> szybko ewoluuje - wydawanie książek</li>
                <li>
                  stare przeglądarki wciąż w użyciu, stare strony Internetowe
                </li>
              </ul>
            </aside>
          </section>
          <section>
            <img src="http://ww3.sinaimg.cn/large/7f184da9jw1ezcb2r8fkyj20o00b40u2.jpg" />
            <h3 className="fragment">Jeff Atwood</h3>
            <blockquote className="fragment">
              „Any application that can be written in JavaScript, will
              eventually be written in JavaScript.”
            </blockquote>
            <aside className="notes">któremu zawdzięczamy Stack Overflow</aside>
          </section>
          <section>
            <img src="https://10clouds.com/wp-content/uploads/2017/06/javascript-everywhere.jpg" />
            <aside className="notes">
              <ul>
                <li>strony i aplikacje internetowe</li>
                <li>aplikacje mobilne</li>
                <li>PWA</li>
                <li>aplikacje desktopowe (electron)</li>
                <li>serwery (node.js)</li>
                <li>
                  gry <a href="https://phaser.io/">phaser</a>
                </li>
                <li>grafika 3d (three.js)</li>
                <li>IoT, drony</li>
              </ul>
            </aside>
          </section>
          <section>
            <h1>HTML 📝</h1>
            <small>HyperText Markup Language</small>
            <aside className="notes">
              <p>p, image, input, label, select, button</p>
              <p>języki komplilowane do html (haml, slim, erb)</p>
            </aside>
          </section>
          <section>
            <h1>CSS 💅</h1>
            <small>Cascading Style Sheets</small>
            <aside className="notes">
              <p>sass, less</p>
            </aside>
          </section>
          <section>
            <h1>JS 😱</h1>
            <small>JavaScript</small>
            <aside className="notes">
              <p>Powstał w 10 dni</p>
              <p>Na początku był zabawką</p>
              <p>ES6</p>
              <p>typescript</p>
              <p>jQuery</p>
            </aside>
          </section>
          <section>
            Q{"&"}A
            <aside className="notes">abc</aside>
          </section>
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
