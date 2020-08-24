import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const APP_ID = "e8aa04e7"
const API_KEY = "ffa69918f480729b56adb7b4fa299969"

class Recipe extends Component {
  state = {
    activeRecipe: []
  }

  componentDidMount = async () => {
    const title = this.props.location.state.recipe
    const req = await fetch(`https://api.edamam.com/search?q=${title}&app_id=${APP_ID}&app_key=${API_KEY}`)
    const res = await req.json()

    this.setState({
      activeRecipe: res.hits[0].recipe
    })

    console.log(this.state.activeRecipe)
  }

  render() {
    // console.log(this.props)
    const recipe = this.state.activeRecipe
    return (
      <div className="continer">
        {
          (recipe.length !== 0) &&
          <div className="active-recipe">
            <img className="active-recipe__img" src={recipe.image} alt={recipe.label} />
            <h3 className="active-recipe__title"> {recipe.label} </h3>
            <h4 className="active-recipe__publisher">
              Publisher:
                <span>
                {recipe.source}
              </span>
            </h4>
            <p className="active-recipe__website">
              Website:
                <span>
                <a href={recipe.url}>
                  {recipe.url}
                </a>
              </span>
            </p>
            <button className="active-recipe__button">
              <Link to="/"> Go To Home </Link>
            </button>
          </div>
        }
      </div>
    )
  }
}

export default Recipe
