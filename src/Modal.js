import { Button, Modal, Text, Image, Flex, Box, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import cocktailList from './data/myCocktailData'
import { useState } from 'react'


const ExampleModal = ({list, mixers}) => {
  const { isOpen: isOpenOuter, onOpen: onOpenOuter, onClose: onCloseOuter } = useDisclosure()
  const { isOpen: isOpenInner, onOpen: onOpenInner, onClose: onCloseInner } = useDisclosure()
  const [filteredDrinks, setFilteredDrinks] = useState([])
  const [innerDrink, setInnerDrink] = useState({ingredients: [], amounts: []})
  const ingredients = innerDrink.ingredients.map((ingredient) => {
      ingredient = ingredient.toUpperCase()
      if(ingredient.includes('JUICE')) ingredient = ingredient.replace('JUICE - ', '') + ' JUICE'
      if(ingredient.includes('PEEL')) ingredient = ingredient.replace('PEEL - ', '') + ' PEEL'
      return <Text margin="0" fontSize="xs">{ingredient}</Text>
    })
  const amounts = innerDrink.amounts.map((amount) => {
      return <Text margin="0" fontSize="xs">{amount} -</Text>
    })

  const filterDrinkList = () => {
      const firstArray = list
      const cocktails = cocktailList
      const arrayList = []
      cocktails.map((drink) => {
        const secondArray = drink.ingredients
        for (let s1 of firstArray) {
          for (let s2 of secondArray) {
            if (s2.includes(s1)) {
              arrayList.push(drink)
            }
          }
        }
        return null
      }) 
      const filteredMixers = []
      mixers.map((mixer)=>{
        if(mixer.includes('Juice')) {
          filteredMixers.push(('Juice - ' + mixer.replace(' Juice', '')).toUpperCase())
        } else if(mixer.includes('Water')) {
          filteredMixers.push(('Water - ' + mixer.replace(' Water', '')).toUpperCase())
        } else {
          filteredMixers.push(mixer.toUpperCase())
        }
        return null
      })
      console.log(filteredMixers)
      const finalList = []
      arrayList.map((drink) => {
        const secondArray = drink.ingredients
        for(let i = 0; i < secondArray.length; i++) {
          for(let j = 0; j < filteredMixers.length; j++) {
            if(secondArray[i].toUpperCase().includes(filteredMixers[j])) {
              finalList.push(drink)
            }
          }
        }


        return null
      })
      if(finalList.length === 0) { setFilteredDrinks([...new Set(arrayList)]) } else {
        setFilteredDrinks([...new Set(finalList)])
      }
    }

    const renderedCocktails = filteredDrinks.map((cocktail) => {  
      return (
          <div>
              <img onClick={()=>{
                  onOpenInner();
                  setInnerDrink(cocktail)
              }} alt={cocktail.name} src={cocktail.image}/>
          </div>
          )
      })



  return (
    <>
      {/* Search Button */}
      <Button 
        colorScheme='green' 
        size="lg"
        onClick={()=>{
          onOpenOuter()
          filterDrinkList()
        }} 
        >
        Search
      </Button>
      {/* FIRST MODAL */}
      <Modal isOpen={isOpenOuter} onClose={onCloseOuter} size="4xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center" textTransform="uppercase" fontSize="4xl" fontWeight="bold"  fontFamily="gruppo" letterSpacing="2px" >
            Drinks
          </ModalHeader>
          <ModalBody> 

            {/* FIRST MODAL BODY */}
            <div className="inner-modal-flex">
                    {renderedCocktails}
            </div>

            {/* SECOND MODAL  - MODAL WITHIN A MODAL  */}
            <Modal isOpen={isOpenInner} onClose={onCloseInner} size="3xl">
              <ModalOverlay />
              <ModalContent>
                <ModalHeader textAlign="center" textTransform="uppercase">{innerDrink.name}</ModalHeader>
                <ModalBody>
                    {/* <img src={innerDrink.image} alt={innerDrink.name}/> */}
              <Flex alignItems="center">
              <Image
                boxShadow="0 0 10px 0 rgba(0,0,0,0.5)"
                border="2px solid black"
                borderRadius="10px"
                src={innerDrink.image}
                alt={innerDrink.name}
                width="50%"
                height="auto"
                objectFit="cover"
              />
              <Text pl={4} width="50%">
                {innerDrink.instructions}
              </Text>
            </Flex>
            <Box mt={4}>
              <Text fontWeight="bold" margin="0" textTransform="uppercase" textAlign="center">Ingredients</Text>
              <Flex>
                <Box width="50%" textAlign="right" paddingRight="4px" >
                {amounts}
                </Box>

                <Box width="50%" textAlign="left">
                {ingredients}
                </Box>
              </Flex>

            </Box>
                </ModalBody>

                <ModalFooter>
                  <Button variant="ghost" mr={3} onClick={onCloseInner}>
                    Close
                  </Button>
                  {/* <Button colorScheme="blue">Save</Button> */}
                </ModalFooter>
              </ModalContent> 
              {/* END OF SECOND MODAL */}
            </Modal>

          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onCloseOuter}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
  </>
  )
}

export default ExampleModal