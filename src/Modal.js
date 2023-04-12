import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, useDisclosure, filter } from '@chakra-ui/react'
import React from 'react'
import { Box } from '@chakra-ui/react'
import myCocktailData from './myCocktailData'
import { useState } from 'react'

function ExampleModal({list}) {
  const { isOpen: isOpenOuter, onOpen: onOpenOuter, onClose: onCloseOuter } = useDisclosure()
  const { isOpen: isOpenInner, onOpen: onOpenInner, onClose: onCloseInner } = useDisclosure()
  const [filteredDrinks, setFilteredDrinks] = useState([])
  const [innerDrink, setInnerDrink] = useState({})

  const filterDrinkList = () => {
    const {cocktails} = myCocktailData
    const arrayList = []
    cocktails.map((drink) => {
        list.map((liquor) => { 
            if(drink.ingredients.includes(liquor)) {
                arrayList.push(drink)
            }
        })
    }) 
    setFilteredDrinks([...new Set(arrayList)])
    console.log(arrayList)
    }

    const renderedCocktails = filteredDrinks.map((cocktail) => {  
        return (<div>
             <img onClick={()=>{
                onOpenInner();
                setInnerDrink(cocktail)
             }} alt={cocktail.name} src={cocktail.image}/>
        </div>
        )
    })
                
  return (
    <>
      <Button colorScheme='green' size="lg"
      onClick={()=>{
        onOpenOuter()
        filterDrinkList()
      }} 
      >Search</Button>

      <Modal isOpen={isOpenOuter} onClose={onCloseOuter} size="4xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Outer Modal Title</ModalHeader>
          <ModalBody>
                <div className="inner-modal-flex">
                        {renderedCocktails}
                </div>
            {/* <Button onClick={onOpenInner}>Open Inner Modal</Button> */}

            <Modal isOpen={isOpenInner} onClose={onCloseInner}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>{innerDrink.name}</ModalHeader>
                <ModalBody>
                    <img src={innerDrink.image} alt={innerDrink.name}/>
                </ModalBody>

                <ModalFooter>
                  <Button variant="ghost" mr={3} onClick={onCloseInner}>
                    Close
                  </Button>
                  {/* <Button colorScheme="blue">Save</Button> */}
                </ModalFooter>
              </ModalContent>
            </Modal>
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onCloseOuter}>
              Close
            </Button>
            <Button colorScheme="blue">Save</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
export default ExampleModal