import React from 'react'
import useInsultsStore from '../../store/useInsultsStore'
import "./randomInsultBtn.css"

function RandomInsultBtn() {
    const setRandomInsult = useInsultsStore((state) => state.setRandomInsult)


  return (
    <button className="randomBtn" onClick={ setRandomInsult }>Get a random insult!</button>
  )
}

export default RandomInsultBtn