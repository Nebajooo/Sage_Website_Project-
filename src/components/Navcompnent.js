import React, { Component } from 'react';
import LOGO from './img/logo.png';
class Navcompnent extends Component {
 
  render() {
      return (
          <div>
<header class="header" data-header>
      <div class="container">
        <h1 >
          <img src={LOGO} alt="" class="logo"/>
          <a href="#" class="logo">Sage</a>
        </h1> 

        <nav class="navbar" data-navbar>
         {/* <div class="navbar-top">
        
            <a href="#" class="logo">Sage</a>

            <button
              class="nav-close-btn"
              aria-label="Close menu"
              data-nav-toggler>
              <ion-icon name="close-outline"></ion-icon>
            </button>
          </div> */}
          
          <ul class="navbar-list">
            <li class="navbar-item">
              <a href="index" class="navbar-link" data-nav-toggler>Home</a>
            </li>

            <li class="navbar-item">
              <a href="#about" class="navbar-link" data-nav-toggler>About</a>
            </li>

            <li class="navbar-item">
              <a href="#courses" class="navbar-link" data-nav-toggler>Latest</a>
            </li>

            <li class="navbar-item">
              <a href="#event" class="navbar-link" data-nav-toggler>Academic</a>
            </li>

            <li class="navbar-item">
              <a href="blog" class="navbar-link" data-nav-toggler>Service</a>
            </li>

            <li class="navbar-item">
              <a href="#contact" class="navbar-link" data-nav-toggler>Library</a>
            </li>
            <li class="navbar-item">
              <a href="#contact" class="navbar-link" data-nav-toggler>For Traineer's</a>
            </li>
            <li class="navbar-item">
              <a href="#contact" class="navbar-link" data-nav-toggler>Research</a>
            </li>
          </ul>
        </nav>

        <div class="header-actions" >
          <button
            class="header-action-btn"
            aria-label="Open search"
            data-search-toggler>
            <ion-icon name="search-outline"></ion-icon>
          </button>

          <a href="login" class="header-action-btn login-btn" style={{background:`#f76d02`}}>
            <ion-icon name="person-outline" aria-hidden="true"></ion-icon>

            <span class="span" >Login / Register</span>
          </a>

          <button
            class="header-action-btn nav-open-btn"
            aria-label="Open menu"
            data-nav-toggler>
            <ion-icon name="menu-outline"></ion-icon>
          </button>
        </div>

        <div class="overlay" data-nav-toggler data-overlay></div>
      </div>
    </header>


    <div class="search-container" data-search-box>
      <div class="container">
        <button
          class="search-close-btn"
          aria-label="Close search"
          data-search-toggler>
          <ion-icon name="close-outline"></ion-icon>
        </button>

        <div class="search-wrapper">
          <input
            type="search"
            name="search"
            placeholder="Search Here..."
            aria-label="Search"
            class="search-field"
          />

          <button class="search-submit" aria-label="Submit" data-search-toggler>
            <ion-icon name="search-outline"></ion-icon>
          </button>
        </div>
      </div>
    </div>

    
    
</div>

      );
  }
}

export default Navcompnent;