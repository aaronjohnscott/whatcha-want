import './App.css';
import { cocktails } from './myCocktailData'
import Header from "./Header"
import Random from './Random';
import Filter from './Filter';

const search = (x) => {
    const y = x.toLowerCase()
    const has = cocktails.filter(drink=>{
      // should i just do a for loop, for x, which is an array of ingredients... 
      /// for lenggth of x... if x[i] sub for y... should work
      if (drink.ingredients.find(ingredient=> {
        let trueIngredient = ingredient.split(' - ')[0]
        return trueIngredient.toLowerCase() == y 
      })
        ) {
        return drink
      }
    })
    return has
}



const drinks = () => {
  let thing = search("vodka")
  let otherThing = thing.map((cocktail)=>{
    return (
      <div>
                <h1>{cocktail.name}</h1>
                <img src={cocktail.image} />
                <p>{cocktail.instructions}</p>
      </div>

    )
  })
  return otherThing
}

const randomCocktail = () => {
  return cocktails[Math.floor(Math.random()*440)]
}

console.log(randomCocktail())

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Filter></Filter>
      <Random cocktail={randomCocktail()}></Random>

    </div>
  );
}

export default App;


console.log(cocktails.length)


// const changeData = () => {
//   // go throught entire array (map, reduce, filter)
//   const newArray = cocktails.map(cocktail => {
//     const cocktailIngredients = []
//     const cocktailIngredientsAmounts = []
//     for(let i = 1; i <= 9; i++){
//       if(cocktail[`strIngredient${i}`].length > 2) cocktailIngredients.push(cocktail[`strIngredient${i}`])
//       if(cocktail[`strMeasure${i}`].length > 2) cocktailIngredientsAmounts.push(cocktail[`strMeasure${i}`])
//     }
//     return {
//       id: cocktail.id,
//       name: cocktail.name,
//       type: cocktail.type,
//       image: cocktail.image,
//       glass: cocktail.glass,
//       instructions: cocktail.instructions,
//       ingredients: cocktailIngredients,
//       amounts: cocktailIngredientsAmounts

//     }
//   })
//   console.log(newArray)
// }

// changeData()
