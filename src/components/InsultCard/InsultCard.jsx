import React from 'react'
import './insultCard.css'
import useInsultsStore from '../../store/useInsultsStore'

function InsultCard({ id, insult, play }) {
const removeInsult = useInsultsStore((state) => state.removeInsult)


  return (
    <>
      <section className='insultcard'>
        <p> Insult: {insult}</p>
        <p> Play: {play}</p>
        <button className="remove-insult" onClick={() => removeInsult(id)}>Remove insult</button>
      </section>
    </>
  )
}

export default InsultCard