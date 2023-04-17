import {  Box } from '@chakra-ui/react';

export const renderCocktail = (picx, name, onClick) => {
    const pic = '/static/img/' + picx.toLowerCase() + '-min.png';
    return (
      <Box
        padding="3px"
        className="cocktailHover"
        width="8%"
        height="16%"
        minWidth="100px"
        maxWidth={250}
        onClick={onClick}
      >
        <img src={pic} alt={name} />
        <p className="overlay">{name}</p>
      </Box>
    );
  };