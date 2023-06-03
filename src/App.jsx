import { useState } from 'react'
import './App.css'
import QuoteBox from './assets/components/QuoteBox'
import quotes from './assets/json/quotes.json'
import color from './assets/utils/color'
import colortext from './assets/utils/colortext'


function App() {




  const getIndexRandom = arr => Math.floor(Math.random() * arr.length)

  const firstElement = quotes[getIndexRandom(quotes)]
  const firstColor = color[getIndexRandom(color)]
  const secondColor = colortext[getIndexRandom(colortext)]

  const [randomQuote, setRandomQuote] = useState(firstElement)
  const [randomColor, setRandomColor] = useState(firstColor)
  const [randomSecondColor, setRandomSecondColor] = useState(secondColor)

  const backgroundObject = {
    backgroundColor: randomColor,
  }

  const getRandom = () => {
    setRandomQuote(quotes[getIndexRandom(quotes)])
    setRandomColor(color[getIndexRandom(color)])
    setRandomSecondColor(colortext[getIndexRandom(colortext)])
  }

  return (
    <div style={backgroundObject} className="App">
      <div className='app_border'></div>
      <div className='app_border_int'></div>
      <QuoteBox randomQuote={randomQuote} randomColor={randomColor} getRandom={getRandom} randomSecondColor={randomSecondColor} />

    </div>
  )
}

export default App
