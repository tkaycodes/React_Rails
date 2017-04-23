import React, { Component } from 'react';
import BookCatWithSearch from './BookCatWithSearch.js';
import './phone-cat-wrapper.css';
import xoomWithWifi from '../img/motorola-xoom-with-wi-fi.0.jpg';
import xoom from '../img/motorola-xoom.0.jpg';
import atrix from '../img/motorola-atrix-4g.0.jpg';
import streak from '../img/dell-streak-7.0.jpg';

// TODO:
// IMPORT FROM JSON FILE
var BOOKS = [
    {
        "age": 0,
        "id": "motorola-xoom-with-wi-fi",
        "imageUrl": xoomWithWifi,
        "name": "Motorola XOOM\u2122 with Wi-Fi",
        "snippet": "The Next, Next Generation\r\n\r\nExperience the future with Motorola XOOM with Wi-Fi, the world's first tablet powered by Android 3.0 (Honeycomb)."
    },
    {
        "age": 1,
        "id": "motorola-xoom",
        "imageUrl": xoom,
        "name": "MOTOROLA XOOM\u2122",
        "snippet": "The Next, Next Generation\n\nExperience the future with MOTOROLA XOOM, the world's first tablet powered by Android 3.0 (Honeycomb)."
    },
    {
        "age": 2,
        "carrier": "AT&T",
        "id": "motorola-atrix-4g",
        "imageUrl": atrix,
        "name": "MOTOROLA ATRIX\u2122 4G",
        "snippet": "MOTOROLA ATRIX 4G the world's most powerful smartphone."
    },
    {
        "age": 3,
        "id": "dell-streak-7",
        "imageUrl": streak,
        "name": "Dell Streak 7",
        "snippet": "Introducing Dell\u2122 Streak 7. Share photos, videos and movies together. It\u2019s small enough to carry around, big enough to gather around."
    }
]

class _BootCatWrapperAPI extends Component {
  render() {
    return (

      <BookCatWithSearch books={BOOKS} />
      
    );
  }
}

export default _BootCatWrapperAPI;



