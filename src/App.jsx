import { RouterProvider } from "react-router-dom"
import router from "./router"
import axios from "axios"
import useInsultsStore from "./store/useInsultsStore"
import { useEffect } from "react"


function App() {
    const setInsults = useInsultsStore(state => state.setInsults)
    const url = "https://santosnr6.github.io/Data/insults.json"
    

useEffect(() => {
  axios.get(url)
    .then(response => setInsults([...response.data]))
    .catch(error => console.log(error));
  }, [])

  return (
    <>
        <RouterProvider router={ router } />
    </>
  )
}

export default App
