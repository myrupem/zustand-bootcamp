import Header from '../components/Header'
import InsultCard from '../components/InsultCard/InsultCard'
import useInsultsStore from '../store/useInsultsStore'
import RandomInsultBtn from '../components/randomButton/randomInsultBtn'
import { useEffect } from 'react'

function RandomInsultPage() {
  const randomInsult = useInsultsStore(state => state.randomInsult)
  const insults = useInsultsStore(state => state.insults);
  const setRandomInsult = useInsultsStore(state => state.setRandomInsult);

useEffect(() => {
  if (insults.length > 0) {
    setRandomInsult(); 
  }
}, [insults]);

  return (
    <main className='randomInsultPage'>
        <Header />
        <section className='randomInsult-wrapper'>
            { randomInsult ? ( 
            <InsultCard 
            insult={randomInsult.insult}
            id={randomInsult.id}
            play={randomInsult.play}
            />
          ) : (
            <p>Loading insult...</p> )} 
        </section>
        <RandomInsultBtn />
    </main>
  )
}

export default RandomInsultPage