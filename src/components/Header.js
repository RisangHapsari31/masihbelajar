import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <div>

      <header className="header_area">
        <div className="main_menu" id="mainNav">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container box_1620">
              {/* Brand and toggle get grouped for better mobile display */}
              <a className="navbar-brand logo_h" href="index.html"><img src="img/favicon.png" alt /></a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              {/* Collect the nav links, forms, and other content for toggling */}
              <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
                <ul className="nav navbar-nav menu_nav ml-auto">
                <Link className="nav-item nav-link" to="/home"/> 
                  <li className="nav-item active"><a className="nav-link" href="index.html">Home</a></li> 
                  <Link className="nav-item nav-link" to="/about"/> 
                  <li className="nav-item"><a className="nav-link">About</a></li> 
                  <li className="nav-item"><a className="nav-link" href="services.html">Services</a>
                  </li><li className="nav-item submenu dropdown">
                    <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Pages</a>
                    <ul className="dropdown-menu">
                      <li className="nav-item"><a className="nav-link" href="portfolio.html">Portfolio</a></li>
                      <li className="nav-item"><a className="nav-link" href="portfolio-details.html">Project Details</a></li>
                      <li className="nav-item"><a className="nav-link" href="elements.html">Elements</a></li>
                    </ul>
                  </li> 
                  <li className="nav-item submenu dropdown">
                    <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Blog</a>
                    <ul className="dropdown-menu">
                      <li className="nav-item"><a className="nav-link" href="blog.html">Blog</a></li>
                      <li className="nav-item"><a className="nav-link" href="single-blog.html">Blog Details</a></li>
                    </ul>
                  </li> 
                  <Link className="nav-item active nav-link" to="/contact"/>
                  <li className="nav-item"><a className="nav-link" href="contact.html">Contact</a></li>
                </ul>
              </div> 
            </div>
          </nav>
        </div>
      </header>
      </div>
    )
  }
}
