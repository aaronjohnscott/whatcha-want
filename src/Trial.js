import React from 'react';
import {  Stack, Box } from '@chakra-ui/react';
import ExampleModal from './Modal';
import { cocktails } from './myCocktailData'
import { useState } from 'react'

const Trial = () => {
  const [list, setList] = React.useState([])
  const [listMixers, setListMixers] = useState([])

    const cocktails = [ 'Vodka','Tequila',   "Whiskey", "Bourbon", "Gin", "Brandy", "Rum", "Scotch", "Cognac"]
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
      const pic = '/' + cocktail + '.png'
      // const pic = "tequila.png"
        return (
            <Box padding="3px" className="cocktailHover" objectFit="cover" width="12%" height="12%" minWidth="120px" maxWidth={250} onClick={liquor}>
                <img  src={pic} alt={cocktail} />
                <p className='overlay'>{cocktail}</p>
            </Box>
        )
    })
    const renderedMixers = mixers.map((cocktail) => {
      // const pic = cocktail + '.png'
      const pic = "vodka.png"
        return (
            <Box padding="3px" className="cocktailHover" width="12%" height="12%" minWidth="120px" maxWidth={250} onClick={(e)=>changeAppearance(e)}>
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
      <div className="col-try">
      <Stack width="40%">
          <Stack mx="auto" direction="row"  alignItems="center" flexWrap="wrap" justifyContent="center">
              <Box>
                <h1 className="title">CHOOSE YOUR LIQUOR</h1>
              </Box>
          </Stack>
          <Stack mx="auto" direction="row"  alignItems="baseline" flexWrap="wrap" justifyContent="space-between">
            { renderedLiquors}
          </Stack>
        </Stack>

        <Stack padding={30}   className='middle'>
            <ExampleModal className='middle' list={list}/>
        </Stack>

        <Stack width="40%">
          <Stack mx="auto" direction="row" alignItems="center" flexWrap="wrap" justifyContent="center">
              <Box>
                <h1 className="title">CHOOSE YOUR MIXERS</h1>
              </Box>
          </Stack>

          <Stack mx="auto" direction="row"  alignItems="baseline" flexWrap="wrap" justifyContent="space-between">
            { renderedMixers}
          </Stack>

        </Stack>
      </div>
      <div className="shaker">

        {/* <div>
          <h1 className="title">Liquor</h1>
          <h1 className="title">+</h1>
          <h1 className="title">Mixers</h1>
        </div> */}
      </div>
      </>

    );
  };

export default Trial