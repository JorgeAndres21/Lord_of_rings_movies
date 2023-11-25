import { useEffect, useState } from 'react'
import api from '../services/api.js'

import Header from '../components/Header'
import Card from '../components/Card/index.jsx';
import { Body, Main } from './style.js'

function App() {

  const[movies, setMovies] = useState()
  const[filterMovies, setFilterMovies] = useState()

  useEffect(() => {

    

    async function loadData() {
      const { data: { docs } } = await api.get('movie')

      setMovies(docs)
      setFilterMovies(docs)
      console.log(docs)
    }

    loadData()

  }, [])

  return (
    <Body>
      <Header movies={movies} setFilterMovies={setFilterMovies}/>
      <Main>

        {filterMovies && filterMovies.map(movie => <Card movieData={movie} key={movie._id} />)}

      </Main>
    </Body>
  )

}

export default App;