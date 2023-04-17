import {  Box } from '@chakra-ui/react';

export const renderCocktail = (picx, name, onClick) => {
    const pic = '/static/img/' + picx.toLowerCase() + '.png';
    return (
      <Box
        padding="3px"
        className="cocktailHover"
        width="12%"
        height="12%"
        minWidth="120px"
        maxWidth={250}
        onClick={onClick}
      >
        <img src={pic} alt={name} />
        <p className="overlay">{name}</p>
      </Box>
    );
  };