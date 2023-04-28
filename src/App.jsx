import { useState } from 'react'
import './App.css'
import QuoteBox from './assets/components/QuoteBox'
import quotes from './assets/json/quotes.json'
import color from './assets/utils/color'

function App() {




  const getIndexRandom = arr => Math.floor(Math.random() * arr.length) 

  const [randomQuote, setRandomQuote] = useState(getIndexRandom(quotes))
  const [randomColor, setRandomColor] = useState(getIndexRandom(color))
  const [randomSecondColor, setRandomSecondColor] = useState(getIndexRandom(color))

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
