import React, {Component} from 'react';
import xoomImg from '../img/motorola-xoom-with-wi-fi.0.jpg';

class Book extends Component {

  render() {

    return (

      <li className="thumbnail phone-listing">
  
          <a href="#/phones/motorola-xoom-with-wi-fi" className="thumb">
            <img src={xoomImg} />
          </a>

          <a href="#/phones/motorola-xoom-with-wi-fi" >Motorola XOOM™ with Wi-Fi</a>

        <p>The Next, Next Generation

          Experience the future with Motorola XOOM with Wi-Fi, the worlds first tablet powered by Android 3.0 (Honeycomb).
        </p>
        
      </li>

    )

  }

}

export default Book;