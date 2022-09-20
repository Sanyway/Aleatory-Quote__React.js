import React from 'react'

const Boton = ({getRandom, randomSecondColor}) => {


    const backgroundObj = {
        backgroundColor: randomSecondColor
      }

  return (
    
    <button onClick={getRandom} className='card_btn' style={backgroundObj}>&#62;</button>
    
  )
}

export default Boton