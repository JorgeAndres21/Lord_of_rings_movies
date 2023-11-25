import { useEffect, useRef, useState } from 'react';

import { HeaderLogo , HeaderText , DivInput } from './style';

import img from '../../assets/convincely.svg'



function Header ({movies , setFilterMovies}){
    
    const filterMovies = useRef()

    const[aveMovie, setAveMovie] = useState({})

    function ave (movies){
        
        const runtime = movies.reduce( (acc,cur) => 
            cur.runtimeInMinutes + acc,0) / movies.length

        const budget = movies.reduce( (acc,cur) => 
            cur.budgetInMillions + acc,0) / movies.length

        setAveMovie({
            runtime,
            budget
        })
    }

    useEffect( () => {
        if(movies && movies.length > 0){
            ave(movies)
        }
    },[movies])

    function findMovie(){
        const newMovies = movies.filter(movie => movie.name.toLowerCase().includes(filterMovies.current.value.toLowerCase()))

        ave(newMovies)
        setFilterMovies(newMovies)
    }

    

    return (
        <>
            <HeaderLogo>
                <img src={img} alt="logo_header" />
                <h3>Senior FrontEnd test</h3>
            </HeaderLogo>
            <HeaderText>
                <div>
                    <h1>Lord of Rings movies</h1>
                    <p>Ave. movie runtime:{aveMovie.runtime} min</p>
                    <p>Ave. budget: ${aveMovie.budget}M</p>
                </div>
                <DivInput>
                    <input placeholder='Finter movies by name' ref={filterMovies} onChange={findMovie}/>
                    <input type="text" />
                </DivInput>
            </HeaderText>
        </>
    )
}

export default Header;