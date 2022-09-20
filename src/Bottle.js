import React from 'react'

const Bottle = (props) => {
   const [color, setColor] = React.useState('white')
   const allOfIt = () => {
    props.doThis()
    setColor(color=>color==='white'?'red':'white')
   }
  return (
    <div className="bottle" style={{color:color}} onClick={allOfIt} >
        <img  src={props.imgSource} alt={props.altText} />
        {props.name}
    </div>
  )
}

export default Bottle

// ()=>{setColor(color=>{
//     return color === 'red' ? 'black' : 'red'
// })
// }