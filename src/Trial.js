import React from 'react';
import {  Stack, Box } from '@chakra-ui/react';

const Trial = () => {
    const changeAppearance = (e) => {
        const element = e.target;
        element.classList.toggle("clicked")
    }
    return (
      <>
      <h1>Liquor</h1>
      <Stack direction="row" alignItems="center" flexWrap="wrap" justifyContent="center">
        <Box className="cocktailHover" width="200px" height="200px"  onClick={(e)=>changeAppearance(e)} >
          <img src="/rum.png"  alt='vodka bottle'/>
          <p className='overlay'>Rum</p>
        </Box>

        <Box   className="cocktailHover" width="200px" height="200px" onClick={(e)=>changeAppearance(e)}>
        <img  src="/tequila.png"  alt='vodka bottle'/>
        <p className='overlay'>Tequila</p>
        </Box>
        <Box  className="cocktailHover" width="200px" height="200px" onClick={(e)=>changeAppearance(e)}>
          <img src="/vodka.png"  alt='vodka bottle'/>
          <p className='overlay'>Vodka</p>
        </Box>
        
      </Stack>
      <Stack direction="row" alignItems="center" flexWrap="wrap" justifyContent="center">
        <Box className="cocktailHover" width="200px" height="200px" onClick={(e)=>changeAppearance(e)}>
        <img src="/rum.png"  alt='vodka bottle'/>
        <p className='overlay'>Rum</p>
        </Box>

        <Box   className="cocktailHover" width="200px" height="200px" onClick={(e)=>changeAppearance(e)}>
        <img  src="/tequila.png"  alt='vodka bottle'/>
        <p className='overlay'>Tequila</p>
        </Box>
        <Box  className="cocktailHover" width="200px" height="200px" onClick={(e)=>changeAppearance(e)}>
          <img src="/vodka.png"  alt='vodka bottle'/>
          <p className='overlay'>Vodka</p>
        </Box>
        
      </Stack>
      <Stack direction="row" alignItems="center" flexWrap="wrap" justifyContent="center">
        <Box className="cocktailHover" width="200px" height="200px" onClick={(e)=>changeAppearance(e)}>
        <img src="/rum.png"  alt='vodka bottle'/>
        <p className='overlay'>Rum</p>
        </Box>

        <Box   className="cocktailHover" width="200px" height="200px" onClick={(e)=>changeAppearance(e)}>
        <img  src="/tequila.png"  alt='vodka bottle'/>
        <p className='overlay'>Tequila</p>
        </Box>
        <Box  className="cocktailHover" width="200px" height="200px" onClick={(e)=>changeAppearance(e)} >
          <img src="/vodka.png"  alt='vodka bottle'/>
          <p className='overlay'>Vodka</p>
        </Box>
        
      </Stack>
      </>

    );
  };

export default Trial