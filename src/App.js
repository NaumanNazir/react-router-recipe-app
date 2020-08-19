import React, { Component } from 'react';
import Form from './components/Form'

import './App.css';

const APP_ID = "e8aa04e7"
const API_KEY = "ffa69918f480729b56adb7b4fa299969"

class App extends Component {
  getRecipe = async (e) => {
    const recipeName = e.target.elements.recipeName.value
    e.preventDefault()
    const api_call = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${API_KEY}`)
    const data = await api_call.json()
    console.log(data.hits[0].recipe.label)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title"> Recipe Search </h1>
          <Form getRecipe={this.getRecipe} />
        </header>
      </div>
    );
  }
}

export default App;
