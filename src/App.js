import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <header className="head">
          <div className="constrain">
            <h1>Responsive</h1>

            <nav className="menu">
              <a href="#" className="menu-toggle">
                <span className="trigger">&#9776;</span>
                <ul>
                  <li>Home</li>
                  <li>About Us</li>
                  <li>Articles</li>
                </ul>
              </a>
            </nav>
          </div>
        </header>
        
        <section className="main">  
          <div className="constrain">
            <div className="image">
              <img src="http://lorempixel.com/500/250" alt="" className="banner"/>
                <h3>Text over banner</h3>
            </div>
            <div className="tiles-container">
              <div className="tile">
                <img src="http://lorempixel.com/200/100" alt="Tile img 1" className="tile-img"/>
                <p>Text for tile 1</p>
              </div>
              <div className="tile">
                <img src="http://lorempixel.com/g/200/100" alt="Tile img 2" className="tile-img"/>
                <p>Text for tile 2</p>
              </div>
              <div className="tile">
                <img src="http://lorempixel.com/200/100/animals" alt="Tile img 3" className="tile-img"/>
                <p>Text for tile 3</p>
              </div>
            </div>
            <p>Lorem ipsum dolor sit amet, 
            consectetur adipisicing elit. 
            Eveniet at recusandae voluptate fugiat 
            asperiores magni eius voluptatibus corporis 
            autem totam, aliquam unde beatae, 
            quibusdam accusantium sint natus sit suscipit fuga.
            </p>
          </div>
        </section>

        <footer className="footer">
          <div className="constrain">
            <ul>
              <li>Legalese</li>
              <li>Need a job?</li>
              <li><a href="https://www.youtube.com/watch?v=fLi0OX_Ttt8">Is that my briefcase?</a></li>
          </ul>
          </div>
        </footer>

      </div>
    );
  }
}

export default App;
