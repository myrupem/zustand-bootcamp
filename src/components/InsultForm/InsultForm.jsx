import { useState } from 'react'
import './InsultForm.css'
import useInsultsStore from '../../store/useInsultsStore'

function InsultForm() {
    const addNewInsult = useInsultsStore((state) => state.addNewInsult)
    const insults = useInsultsStore((state) => state.insults)
    const [insultInput, setInsultInput] = useState("")
    const [playInput, setPlayInput] = useState("")

    function handleSubmit(e) {
      e.preventDefault()

      const newInsult = {
        id: insults.length + 1,
        insult: insultInput,
        play : playInput     
    };

    addNewInsult(newInsult)
    setInsultInput("")
    setPlayInput("")
  }

  return (
    <form action="" className="insult-form" onSubmit={handleSubmit}>
        <label htmlFor="input"> Add your own insult: </label>
        <input type="text" 
        id='insult'
        value={insultInput}
        onChange={(e) => setInsultInput(e.target.value)}
        />
        <label htmlFor="play"> Fill in the play: </label>
        <input type="text" 
        id='play'
        value={playInput}
        onChange={(e) => setPlayInput(e.target.value)}/>
        <button type="submit" className="form-sub">Submit</button>
    </form>
  )
}

export default InsultForm