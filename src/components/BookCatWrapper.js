import React, { Component } from 'react';
import BookCat from './BookCat.js';
import './phone-cat-wrapper.css';
import phoneImage from '../img/motorola-xoom-with-wi-fi.0.jpg';

class BootCatWrapper extends Component {
  render() {
    return (
      // <div>Hello World</div>
      /*<div className="row phone-cat-wrapper">
        <div className="col-md-2">
          Search:
          <input type="text"/>
          Sort by:
          <select >
            <option value="name">Alphabetical</option>
            <option value="age">Newest</option>
          </select>
        </div>
        <div className="col-md-10">
          <ul className="phones">
          
          <li className="thumbnail phone-listing">
            <a href="#/phones/motorola-xoom-with-wi-fi" className="thumb">
            <img src={phoneImage} /></a>
            <a href="#/phones/motorola-xoom-with-wi-fi" >Motorola XOOM™ with Wi-Fi</a>
            <p>The Next, Next Generation

              Experience the future with Motorola dsf XOOM with Wi-Fi, the worlds first tablet powered by Android 3.0 (Honeycomb).
            </p>
          </li>

          <li className="thumbnail phone-listing">
            <a href="#/phones/motorola-xoom-with-wi-fi" className="thumb">
            <img src={phoneImage} /></a>
            <a href="#/phones/motorola-xoom-with-wi-fi" >Motorola XOOM™ with Wi-Fi</a>
            <p>The Next, Next Generation

              Experience the future with Motorola dsf XOOM with Wi-Fi, the worlds first tablet powered by Android 3.0 (Honeycomb).
            </p>
          </li>

          <li className="thumbnail phone-listing">
            <a href="#/phones/motorola-xoom-with-wi-fi" className="thumb">
            <img src={phoneImage} /></a>
            <a href="#/phones/motorola-xoom-with-wi-fi" >Motorola XOOM™ with Wi-Fi</a>
            <p>The Next, Next Generation

              Experience the future with Motorola dsf XOOM with Wi-Fi, the worlds first tablet powered by Android 3.0 (Honeycomb).
            </p>
          </li>

        </ul>
        </div>
      </div>*/
      <BookCat />
    );
  }
}

export default BootCatWrapper;



