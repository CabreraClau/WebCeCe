
import './App.css'
import { useState } from 'react'
import { useEffect } from 'react'

const CAT_ENDPOINT_RANDOM_URL= "https://carfact.ninja/fact"
const CAT_PREFIX_IMAGE_URL = "https://cataas.com"
export function App() {
  const[fact,setFact] = useState()
  const[imageUrl, setImageUrl] = useState()
  useEffect(() =>{
    fetch(CAT_ENDPOINT_RANDOM_URL)
    .then(res => res.json())
    .then(data =>{
      const {fact} = data
      setFact(fact)

      const threeFirtstWords = fact.split(" ",3).join(" ")
      console.log(firstWord)

      fetch("https://cataas.com/cat/says/${threeFirstWords}?size=50&color-red&json=true")
      .then(res => res.json())
      .then(response =>{
        const {url} = response
        setImageUrl("https://cataas.com${url}")
      })
  })
  }, [])
  return(
    <main>
      <h1>App de Gatos</h1>
      {fact &&<p> {fact} </p>}
      {imageUrl && <img src={imageUrl}  alt='cat for ${fact}'/>}

    </main>
  )

}


