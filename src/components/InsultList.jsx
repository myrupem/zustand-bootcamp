import InsultCard from './InsultCard/InsultCard.jsx'
import useInsultsStore from '../store/useInsultsStore.js'

function InsultList() {
  const insults = useInsultsStore((state) => state.insults)

  return (
    <section className='insultList'>
       {insults.map(({ insult, id, play }) => (
        <InsultCard
          key={id}
          id={id}
          insult={insult}
          play={play}
          />
       ))}
    </section>
  )
}

export default InsultList