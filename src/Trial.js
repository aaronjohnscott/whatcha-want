import React from 'react';
import {  Stack, Box } from '@chakra-ui/react';

const Trial = () => {
    const cocktails = [ 'rum', 'tequila', 'vodka', 'rum', 'tequila', 'vodka' ]
    const mixers = [ 'rum', 'tequila', 'vodka', 'rum', 'tequila', 'vodka', 'rum', 'tequila', 'vodka', 'rum', 'tequila', 'vodka']
    const renderedLiquors = cocktails.map((cocktail) => {
      const pic = cocktail + '.png'
        return (
            <Box className="cocktailHover" width="18%" height="18%" minWidth="150px" maxWidth={250} onClick={(e)=>changeAppearance(e)}>
                <img  src={pic} alt={cocktail} />
                <p className='overlay'>{cocktail}</p>
            </Box>
        )
    })
    const renderedMixers = mixers.map((cocktail) => {
      const pic = cocktail + '.png'
        return (
            <Box className="cocktailHover" width="20%" height="20%" minWidth="100px" maxWidth={250} onClick={(e)=>changeAppearance(e)}>
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
      <h1 className="title">Liquor</h1>
      <h1 className="title">+</h1>
      <h1 className="title">Mixers</h1>
      <Stack mx="auto" direction="row" width='75%' alignItems="center" flexWrap="wrap" justifyContent="center">
        { renderedMixers}
      </Stack>
      </>

    );
  };

export default Trial