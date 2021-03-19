import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import Nav from './Nav';
import Routes from './Routes';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Nav/>
    <Routes/>
  </React.StrictMode>,
      <Router>
      <div className="App">
          <Nav/>
          <Routes />
      </div>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import './App.css';
// //import imagesrc from './images/logo.png';
// import Register from './Register';
// import Login from './Login';
// import Contact from './Contact';
// //import Footer from './Footer';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   BrowserRouter
// } from "react-router-dom";

// const routing=(
//   <Router>
// <div>
//       <header>
//       {/* <img  src={imagesrc} alt="" style={{float:'left'}}/>
//       <form class="example" >
//         <input type="text" placeholder="Search Book By Name,Author" name="search"/>
//         <button type="submit" ><i class="fa fa-search"></i></button>
//       </form>
//      </header>
//      <article className="topnav">
//        <ul>
//          <li><Link to="/"><i class="fa fa-fw fa-home"></i>Home</Link></li> 
//            <li className="nav-item-dropdown">
//              <Link className="nav-link dropdown-toggle" data-toggle="dropdown" id="navbarDropdownMenuLink"
//              role="button" area-aria-haspopup="true" area-aria-expanded="false"><i class="glyphicon glyphicon-picture"></i>Gallery
//              </Link>
//              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
//                <li><Link className="dropdown-item" to="/English">English</Link></li>
//                <li><Link className="dropdown-item" to="/Hindi">Hindi</Link></li>
//                <li><Link className="dropdown-item" to="/Marathi">Marathi</Link></li>
//                </ul>
//              </li> */}
//          {/* <li><Link to="/Register"><i class="fa fa-fw fa-user"></i>Register</Link></li>
//          <li><a href="/Login"><i class="fa fa-fw fa-user"></i>Login</a></li>
//          <li><a href="/Contact"><i class="fa fa-fw fa-envelope"></i>Contact Us</a></li> */}
//          {/*</header><li><a href="/Wishlist"><i class="fa fa-shopping-cart"></i>Cart</a></li>*/}
//          </header>

// {/* <br/><br/> */}

// <Switch>
// <Route exact path="/" component={App}/>
// <Route exact path="/Register" component={Register}/>
// {/* <Route exact path="/Gallery" component={Gallery}/>
// <Route exact path="/English" component={English}/>
// <Route exact path="/Hindi" component={Hindi}/>
// <Route exact path="/Marathi" component={Marathi}/> */}
// <Route exact path="/Login" component={Login}/>
// <Route exact path="/Contact" component={Contact}/>

// </Switch>
// </div>

// </Router>
// )
// ReactDOM.render(
//   routing,
//    document.getElementById('root')
//  );
// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// //reportWebVitals();