import { useState } from 'react'
import './App.css'

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import secrets from "../../.secrets.json";
import Footer from './components/Footer';

export default class App extends Component {

  user = "Vivek";

  render() {
    return (
      <div>
        <Navbar />
        <News secrets={secrets}/>
        <Footer />
      </div>
    )
  }
}
