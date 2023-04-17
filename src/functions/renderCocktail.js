import {  Box } from '@chakra-ui/react';

export const renderCocktail = (picx, name, onClick) => {
    const pic = '/static/img/' + picx.toLowerCase() + '-min.png';
    return (
      <Box
      padding="3px"
      className="cocktailHover"
      width="20%"
      height="20%"
      minWidth="100px"
      maxWidth={250}
      onClick={onClick}
      >
        <img src={pic} alt={name} />
        <p className="overlay">{name}</p>
      </Box>
    );
  };

  export const renderMixer = (picx, name, onClick) => {
    const pic = '/static/img/mixers/' + picx.toLowerCase() + '-min.png';
    return (
      <Box
        padding="3px"
        className="cocktailHover"
        width="20%"
        height="20%"
        minWidth="100px"
        maxWidth={250}
        onClick={onClick}
      >
        <img src={pic} alt={name} />
        <p className="overlay">{name}</p>
      </Box>
    );
  };