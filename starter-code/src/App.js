import React, {
  Component
} from "react";
// import ReactComponent as IGLogo from '../images/ironhack-logo.svg'
// import mySvg from '../images/ironhack-logo.svg';

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">

        <div class="intro-container">
          <header>
            <img className="ironhack-logo" src="../images/ironhack-logo.svg" type="image/svg" />
            <img className="menu-top" src="../images/menu-top.svg" type="image/svg" />
          </header>
          <h1>Say hello to <br />ReactJS</h1>
          <p>You will learn a frontend<br /> framework from scratch to <br />become a ninja developer</p>
          <button className="awesome-button">Awesome!</button>
        </div>

        <div className="icons">
          <div className="icon-details">
            <img src="../images/icon1.png" />
            <h3>Declarative</h3>
            <p>React makes it painless to create interactive UIs.</p>
          </div>
          <div className="icon-details">
            <img src="../images/icon2.png" />
            <h3>Components</h3>
            <p>React makes it painless to create interactive UIs.</p>
          </div>
          <div className="icon-details">
            <img src="../images/icon3.png" />
            <h3>Single-Way</h3>
            <p>React makes it painless to create interactive UIs.</p>
          </div>
          <div className="icon-details">
            <img src="../images/icon4.png" />
            <h3>JSX</h3>
            <p>React makes it painless to create interactive UIs.</p>
          </div>

        </div>
      </div>
    );
  }
}

export default App;