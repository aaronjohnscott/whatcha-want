import React from 'react'

const Random = (props) => {
    const cocktail = props.cocktail
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

export default Random
