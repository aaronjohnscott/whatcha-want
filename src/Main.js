import React from 'react';
import {  Stack, Box } from '@chakra-ui/react';
import ExampleModal from './Modal';
import { useState } from 'react'
import { toggleItem } from './functions/toggleItem';
import { cocktails, mixers } from './data/arrays';
import { renderCocktail } from './functions/renderCocktail';

const Trial = () => {
  const [list, setList] = React.useState([])
  const [listMixers, setListMixers] = useState([])

  const liquor = (e) => {
    const liquor = e.target.innerText;
    toggleItem(liquor, list, setList, e);

  };
  
  const mixerX = (e) => {
    const mixer = e.target.innerText;
    toggleItem(mixer, listMixers, setListMixers, e);
  };

  const renderedLiquors = cocktails.map((cocktail) =>
    renderCocktail(cocktail, cocktail, liquor)
  );

  const renderedMixers = mixers.map((mixer) =>
    //when you fix the images, change the name of vodka to mixer
    renderCocktail("vodka", mixer, mixerX)
  );

    return (
      <>
      <div className="col-try">
        <Stack width="44%">
          <Stack mx="auto" direction="row"  alignItems="center" flexWrap="wrap" justifyContent="center">
              <Box>
                <h1 className="title">CHOOSE YOUR LIQUOR</h1>
              </Box>
          </Stack>
          <Stack mx="auto" direction="row"  alignItems="baseline" flexWrap="wrap" justifyContent="space-between">
            { renderedLiquors }
          </Stack>
        </Stack>

        <Stack padding={30}   className='middle'>
            <ExampleModal className='middle' mixers={listMixers} list={list}/>
        </Stack>

        <Stack width="44%">
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