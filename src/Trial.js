import React from 'react';
import {  Stack, Box } from '@chakra-ui/react';
import ExampleModal from './Modal';
import { cocktails } from './myCocktailData'
import { useState } from 'react'

const Trial = () => {
  const [list, setList] = React.useState([])
  const [listMixers, setListMixers] = useState([])
  const [display, setDisplay] = useState('')

    const cocktails = [ 'Rum', 'Tequila', 'Vodka', "Gin", "Whiskey", "Brandy", "Bourbon", "Scotch", "Mezcal", "Cognac"]
    const mixers = [ "grenadine", "lemon juice", "simple syrup", "soda water", "tonic water", "ginger ale", 
    "club soda", "cranberry juice", "orange juice", "pineapple juice"]

    const liquor = (e) => {
        const liquor = e.target.innerText;
        if(list.includes(liquor)) {
            setList(list.filter((item) => item !== liquor))
        } else {  
            setList([...list, liquor])
        }
        console.log(liquor)
        changeAppearance(e)
    }
    const renderedLiquors = cocktails.map((cocktail) => {
      // const pic = cocktail + '.png'
      const pic = "vodka.png"
        return (
            <Box className="cocktailHover" width="18%" height="18%" minWidth="150px" maxWidth={250} onClick={liquor}>
                <img  src={pic} alt={cocktail} />
                <p className='overlay'>{cocktail}</p>
            </Box>
        )
    })
    const renderedMixers = mixers.map((cocktail) => {
      // const pic = cocktail + '.png'
      const pic = "vodka.png"
        return (
            <Box marginTop={3} className="cocktailHover" width="20%" height="20%" minWidth="100px" maxWidth={250} onClick={(e)=>changeAppearance(e)}>
                <img  src={pic} alt={cocktail} />
                <p className='overlay'>{cocktail}</p>
            </Box>
        )
    })
    const changeAppearance = (e) => {
        const element = e.target;
        element.classList.toggle("clicked")
    }
    return (
      <>
      <div className="top"></div>
      <Stack mx="auto" direction="row" width='80%' alignItems="center" flexWrap="wrap" justifyContent="center">
        { renderedLiquors}
      </Stack>
      <div className="shaker">
        <div>

          <ExampleModal list={list}/>
        </div>
        <div>
          <h1 className="title">Liquor</h1>
          <h1 className="title">+</h1>
          <h1 className="title">Mixers</h1>
        </div>
      </div>
      <Stack mx="auto" direction="row" width='75%' alignItems="center" flexWrap="wrap" justifyContent="center">
        { renderedMixers}
      </Stack>
      </>

    );
  };

export default Trial