import React from 'react'
import { useParams } from 'react-router-dom'
import { cocktails } from './myCocktailData'


const Drink = () => {
    const x = useParams()
    console.log(x.drink)
    const yum = cocktails.filter(cocktail=>cocktail.id == x.drink)
    const cocktail = yum[0]

  return (
    <div>
        <img src={cocktail.image} />
        <h1>{cocktail.name}</h1>
        <p>{cocktail.instructions}</p>
        <h4>Ingredients</h4>
        {cocktail.ingredients.map(x=>{
          return <p>{x}</p>
        })}
    </div>
  )
}

export default Drink