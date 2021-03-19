  import ReactDOM from 'react-dom';
  import React, { Component } from 'react';

  import { MenuItems } from "./MenuItems"
  import { Button } from "./Button"
  import './Nav.css'
  
  class Nav extends Component {
      state = { clicked: false }
  
      handleClick = () => {
          this.setState({ clicked: !this.state.clicked })
      }
  
      render() {
          return(
              <nav className="NavbarItems">
                  <h4 className="navbar-logo">Hostel Management</h4>
                  {/* <div className="menu-icon" onClick={this.handleClick}>
                      <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                  </div> */}
                  <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                      {MenuItems.map((item, index) => {
                          return (
                              <li key={index}>
                                  <a className={item.cName} href={item.url}>
                                  {item.title}
                                  </a>
                              </li>
                          )
                      })}
                  </ul>
                  <Button>Sign Up</Button>
                  
              </nav>
          )
      }
  }
  
  export default Nav;








































//  import mobiscroll from '@mobiscroll/react-lite';
//  import "@mobiscroll/react/dist/css/mobiscroll.react.min.css";

//  class Nav extends React.Component {
//      render() {
//          return (
//              <div className="mbsc-padding">
//                  <mobiscroll.HamburgerNav
//                      theme="ios" 
//                      themeVariant="light"
//                      type="hamburger"
//                     responsive={{
//                         medium: {
//                              type: 'tab'
//                          }
//                      }}
//                  >
//                      <mobiscroll.NavItem>Login</mobiscroll.NavItem>
//                      <mobiscroll.NavItem>Registration</mobiscroll.NavItem>
//                      <mobiscroll.NavItem>Contact Us</mobiscroll.NavItem>
//                      <mobiscroll.NavItem>Help</mobiscroll.NavItem>
//                  </mobiscroll.HamburgerNav>
//              </div>
//          );
//      }    
//  }
// export default Nav;


