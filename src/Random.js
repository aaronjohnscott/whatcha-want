import React from 'react'

const Random = (props) => {
    const cocktail = props.cocktail
  return (
    <div>
        <h1>{cocktail.name}</h1>
        <img src={cocktail.image} />
        <p>{cocktail.instructions}</p>
    </div>
      )
}

export default Random
