import React, { Component } from 'react';
import './App.css';
// import Counter from './Counter';
var Cookies = require('cookies-js');
let initialSugarValue = Cookies.get('sugar_cookie');
let initialLemonValue = Cookies.get('lemon_cookie');
let initialChocolateValue = Cookies.get('chocolate_cookie');


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chocolate_count: initialChocolateValue,
      lemon_count: initialLemonValue,
      sugar_count: initialSugarValue
    };
    this.sugarCookieCreator = this.sugarCookieCreator.bind(this);
    this.lemonCookieCreator = this.lemonCookieCreator.bind(this);
    this.chocolateCookieCreator = this.chocolateCookieCreator.bind(this);
    this.clearCookies = this.clearCookies.bind(this)
  }

  sugarCookieCreator(e){  
    let newCount = parseInt(this.state.sugar_count, 10) + 1
    Cookies.set('sugar_cookie', `${newCount}`);
    this.setState({
      sugar_count: Cookies.get('sugar_cookie')
    });
  }
  lemonCookieCreator(e){  
    let newCount = parseInt(this.state.lemon_count, 10) + 1
    Cookies.set('lemon_cookie', `${newCount}`);
    this.setState({
      lemon_count: Cookies.get('lemon_cookie')
    });
  }
  chocolateCookieCreator(e){  
    let newCount = parseInt(this.state.chocolate_count, 10) + 1
    Cookies.set('chocolate_cookie', `${newCount}`);
    this.setState({
      chocolate_count: Cookies.get('chocolate_cookie')
    });
  }

  clearCookies(e) { 
    Cookies.set('chocolate_cookie', '0');
    Cookies.set('sugar_cookie', '0');
    Cookies.set('lemon_cookie', '0');
    this.setState({
      lemon_count: Cookies.get('lemon_cookie'),
      sugar_count: Cookies.get('lemon_cookie'),
      chocolate_count: Cookies.get('lemon_cookie')
    })
  }

  render() {
    return (
      <div>
        <h1>WHAT WOULD YOU LIKE TO EAT?</h1>
        <h2>Click on a cookie below</h2>
        <div className="cookie-container">
            <div className="cookie sugar" onClick={this.sugarCookieCreator}>
                <h4>SUGAR COOKIES</h4>
                <img src="https://sweetpeaskitchen.files.wordpress.com/2010/09/dsc_1583.jpg" alt="sugar cookie"></img>
                <p>Cookies eaten: {this.state.sugar_count}</p>
            </div>
            <div className="cookie chocolate" onClick={this.chocolateCookieCreator}>
                <h4>CHOCOLATE COOKIES</h4>
                <img src="http://www.bakenquilt.com/Wordpress/wp-content/uploads/2012/05/momofuku_chocolate.jpg" alt="chocolate cookie"></img>
                <p>Cookies eaten: {this.state.chocolate_count}</p>
            </div>
            <div className="cookie lemon" onClick={this.lemonCookieCreator}>
                <h4>LEMON COOKIES</h4>
                <img src="https://www.modernhoney.com/wp-content/uploads/2016/03/DSC_0212-copy.jpg" alt="lemon cookie"></img>
                <p>Cookies eaten: {this.state.lemon_count}</p>
            </div>
        </div>
        <button className="clear-cookies-button" onClick={this.clearCookies}>Clear your cookies here</button>
    </div>
    );
  }
}

export default App;
