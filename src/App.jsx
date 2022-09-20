import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import QuoteBox from './assets/components/QuoteBox'
import quotes from './assets/json/quotes.json'
import color from './assets/utils/color'
import Boton from './assets/components/Boton'

function App() {




  const getIndexRandom = arr => Math.floor(Math.random() * arr.length) 

  const firstElement = quotes[getIndexRandom(quotes)]
  const firstColor = color[getIndexRandom(color)]
  const secondColor = color[getIndexRandom(color)]

  const [randomQuote, setRandomQuote] = useState(firstElement)
  const [randomColor, setRandomColor] = useState(firstColor)
  const [randomSecondColor, setRandomSecondColor] = useState(secondColor)

  const backgroundObject = {
    backgroundColor: randomColor,
  }
  
  const getRandom = () => {
    setRandomQuote(quotes[getIndexRandom(quotes)])
    setRandomColor(color[getIndexRandom(color)])
    setRandomSecondColor(color[getIndexRandom(color)])
  }

  return (
    <div style={backgroundObject} className="App">
     
     <QuoteBox randomQuote={randomQuote} randomColor={randomColor} getRandom={getRandom} randomSecondColor={randomSecondColor}/>
    

    </div>
  )
}

export default App
