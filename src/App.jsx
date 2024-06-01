import { useState } from 'react'
// import {Header,Footer} from './components'
import  Header  from './components/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <h1 className="text-center text-4xl">React Router</h1>
       */}
       <Header/>
       {/* <Footer/> */}
    </>
  )
}

export default App
