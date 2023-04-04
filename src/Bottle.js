import React from 'react'

const Bottle = (props) => {
   const [color, setColor] = React.useState('black')
   const allOfIt = () => {
    props.doThis()
    setColor(color=>color==='black'?'red':'black')
   }
  return (
    <div className="bottle" style={{color:color}} onClick={allOfIt} >
        <img  src={props.imgSource} alt={props.altText} />
        {props.name}
    </div>
  )
}

export default Bottle
