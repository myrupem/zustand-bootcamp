import { useEffect } from 'react'
import Header from '../components/Header'
import InsultList from '../components/InsultList'

function InsultPage() {
  return (
    <main className='insultPage'>
        <Header />
        <InsultList />
    </main>
  )
}

export default InsultPage