import { useState } from 'react'
import './App.css'

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import NewsItem from './components/NewsItem';
import News from './components/News';

export default class App extends Component {

  user = "Vivek";

  render() {
    return (
      <div>
        <Navbar />
        <News />
      </div>
    )
  }
}
