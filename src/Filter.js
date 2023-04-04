import { Stack, Box, Flex } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import Bottle from './Bottle'
import { cocktails } from './myCocktailData'


const Filter = () => {
    const [list, setList] = React.useState([])
    const [listMixers, setListMixers] = useState([])
    const [display, setDisplay] = useState('')


    const trial = (x) => {
        setList(list=> {
          const index = list.indexOf(x);
          const newList = [...list]
          if (index > -1) {
            newList.splice(index, 1);
            return newList
          } else { return [...list, x]}
        })
      }

      const trialMixers = (x) => {
        setListMixers(y=> {
          const index = y.indexOf(x);
          const newList = [...y]
          if (index > -1) {
            newList.splice(index, 1);
            return newList
          } else { return [...y, x]}
        })
        console.log(listMixers)
      }

    const searchLiquor = (liquorArr) => {
      const hasIngredients = liquorArr.reduce((prev, curr) => {
        const has = cocktails.filter(drink=>{
          if (drink.ingredients.find(ingredient=> {
            let trueIngredient = ingredient.split(' - ')[0]
            return trueIngredient.toLowerCase() == curr 
          })) { return drink }
        })
        return [...prev, ...has]
      }, [])
      const newArray = hasIngredients.map((m) => [m.name, m]);
      const newMap = new Map(newArray);
      const iterator = newMap.values();
      const noRepeats = [...iterator];
      // array of drinks in objects, to then go through mixers
      // there should already be no repeats, so no need to repeat in mixers... 
      return noRepeats
    }

    const searchMixers = (mixersArr) => {
      const liquorArray = searchLiquor(list)
      if(mixersArr.length === 0) return liquorArray

      const hasIngredients = mixersArr.reduce((prev, curr) => {
        const has = liquorArray.filter(drink=>{
          if (drink.ingredients.find(ingredient=> {
            let trueIngredient = ingredient.split(' ').join('')
            return trueIngredient.toLowerCase() == curr.toLowerCase()
          })) { return drink }
        })
        return [...prev, ...has]
      }, [])
      console.log(hasIngredients)
      return hasIngredients
    }


  
  const drinks = () => {
    const drinkArray = searchMixers(listMixers)
    
    let otherThing = drinkArray.map((cocktail)=>{
      const path = `/filter/${cocktail.id}`
          return (
            <div className="cocktail" key={cocktail.name}>
              <a href={path} >
                      <img className="single-drink" src={cocktail.image} />
                      <h4 className="drinkHeader">{cocktail.name}</h4>
              </a>
            </div>

          )
        })
        setDisplay(otherThing)
      }

  return (
    <>
    <div className="filter">

    <Flex direction="column" align="center" justify="center">

    
      <Bottle 
        doThis={()=>trial("vodka")}
        imgSource="/vodka.png" 
        altText="vodka bottle" 
        name="vodka"/>
      <Bottle 
        imgSource="/rum.png" 
        doThis={()=>trial("rum")} 
        altText="rum bottle" 
        name="rum" />
                <Bottle 
        imgSource="/vodkaIcon2.png" 
        doThis={()=>trial("brandy")} 
        altText="brandy bottle" 
        name="brandy" />
                <Bottle 
        imgSource="/vodkaIcon2.png" 
        doThis={()=>trial("bourbon")} 
        altText="bourbon bottle" 
        name="bourbon" />
        <Bottle 
        imgSource="/vodkaIcon2.png" 
        doThis={()=>trial("whiskey")} 
        altText="whiskey bottle" 
        name="whiskey" />
        <Bottle 
        imgSource="/tequila.png" 
        doThis={()=>trial("tequila")} 
        altText="tequila bottle" 
        name="tequila" />
        <Bottle 
        imgSource="/vodkaIcon2.png" 
        doThis={()=>trial("scotch")} 
        altText="scotch bottle" 
        name="scotch" />
        <Bottle 
        imgSource="/vodkaIcon2.png" 
        doThis={()=>trial("gin")} 
        altText="gin bottle" 
        name="gin" />

    </Flex>
      <h3>BASE LIQUORS</h3>
      <div className="mixers">
        <Bottle 
          imgSource="/vodkaIcon2.png" 
          doThis={()=>trialMixers("bitters")} 
          altText="whiskey bottle" 
          name="bitters" />
                  <Bottle 
          imgSource="/vodkaIcon2.png" 
          doThis={()=>trialMixers("grenadine")} 
          altText="grenadine bottle" 
          name="grenadine" />
                  <Bottle 
          imgSource="/vodkaIcon2.png" 
          doThis={()=>trialMixers("coffee")} 
          altText="coffee bottle" 
          name="coffee" />
                  <Bottle 
          imgSource="/vodkaIcon2.png" 
          doThis={()=>trialMixers("juice-lime")} 
          altText="lime juice bottle" 
          name="lime juice" />
                  <Bottle 
          imgSource="/vodkaIcon2.png" 
          doThis={()=>trialMixers("cream")} 
          altText="cream bottle" 
          name="cream" />
          <Bottle 
          imgSource="/vodkaIcon2.png" 
          doThis={()=>trialMixers("kahlua")} 
          altText="kahlua bottle" 
          name="kahlua" />
          <Bottle 
          imgSource="/vodkaIcon2.png" 
          doThis={()=>trialMixers("triplesec")} 
          altText="triple sec bottle" 
          name="triple sec" />
          <Bottle 
          imgSource="/vodkaIcon2.png" 
          doThis={()=>trialMixers("juice-orange")} 
          altText="triple sec bottle" 
          name="OJ" />
        </div>

        <h3>MIXERS</h3>


    </div>
    <button onClick={drinks}>Discover</button>
    <div className="drink-holder">
    { display }
    </div>
    </>
  )
}

export default Filter