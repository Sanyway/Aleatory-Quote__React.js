import React from 'react'
import Boton from './Boton'


const QuoteBox = ({randomQuote, randomColor, getRandom, randomSecondColor}) => {

  const colorObj = {
    color: randomSecondColor
  
  }

  const backgroundObj = {
    backgroundColor: randomColor,
    
  }

  
  return (
    <artile style={colorObj} className='card'>
     <div className='text'>
    <p className="card_quote">{randomQuote.quote}</p>
    <h1 className="card_author">{randomQuote.author}</h1>
    </div>
    <div className='card_btn-container'>
    <Boton getRandom={getRandom} randomSecondColor={randomSecondColor}/>
    </div>


    </artile>
  )
}

export default QuoteBox