import React, { Component } from 'react';
import './App.css';
import Cookies from 'cookies-js';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chocolateCount: this.getCount('chocolate'),
      lemonCount: this.getCount('lemon'),
      sugarCount: this.getCount('sugar')
    };
    this.setSugarCookie = this.setSugarCookie.bind(this);
    this.setChocolateCookie = this.setChocolateCookie.bind(this);
    this.setLemonCookie = this.setLemonCookie.bind(this);
    this.clearCookies = this.clearCookies.bind(this);
  }
    
  getCount(cookie) {
    return parseInt(Cookies.get(cookie)) || 0;
  }
    
  setSugarCookie() {
    const currentCount = this.getCount('sugar');
    Cookies.set('sugar', currentCount + 1);
    this.setState({
      sugarCount: currentCount + 1
    });
  }
    
  setChocolateCookie() {
    const currentCount = this.getCount('chocolate');
    Cookies.set('chocolate', currentCount + 1);
    this.setState({
      chocolateCount: currentCount + 1
    });
  }
    
  setLemonCookie() {
    let currentCount = this.getCount('lemon');
    Cookies.set('lemon', currentCount + 1);
    this.setState({
        lemonCount: currentCount + 1
      });
  }
    
  clearCookies() {
    function expireCookie (cookie) {
      Cookies.expire(cookie);
    }
    expireCookie('sugar');
    expireCookie('chocolate');
    expireCookie('lemon');
    this.setState({
      chocolateCount: 0,
      sugarCount: 0,
      lemonCount: 0
    })
  }

  render() {
    return (
      <div>
        <h1>WHAT WOULD YOU LIKE TO EAT?</h1>
        <h2>Click on a cookie below</h2>
        <div className="cookie-container">
            <div id="surgaCount" className="cookie sugar" onClick={this.setSugarCookie}>
                <h4>SUGAR COOKIES</h4>
                <img src="https://sweetpeaskitchen.files.wordpress.com/2010/09/dsc_1583.jpg" alt="sugar cookie"></img>
                <p>Cookies eaten: {this.state.sugarCount}</p>
            </div>
            <div id="chocolateCount" className="cookie chocolate" onClick={this.setChocolateCookie}>
                <h4>CHOCOLATE COOKIES</h4>
                <img src="http://www.bakenquilt.com/Wordpress/wp-content/uploads/2012/05/momofuku_chocolate.jpg" alt="chocolate cookie"></img>
                <p>Cookies eaten: {this.state.chocolateCount}</p>
            </div>
            <div id="lemonCount" className="cookie lemon" onClick={this.setLemonCookie}>
                <h4>LEMON COOKIES</h4>
                <img src="https://www.modernhoney.com/wp-content/uploads/2016/03/DSC_0212-copy.jpg" alt="lemon cookie"></img>
                <p>Cookies eaten: {this.state.lemonCount}</p>
            </div>
        </div>
        <button className="clear-cookies-button" onClick={this.clearCookies}>Clear your cookies here</button>
    </div>
    );
  }
}

export default App;