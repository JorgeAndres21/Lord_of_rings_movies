
import { DivFoto , CardStyle , DivInfo } from './style'

import movieFt from '../../assets/local_movies.svg'
import academy from '../../assets/Academy.svg'

function Card ({movieData}){

    return (
        <CardStyle>
            <DivFoto>
                <img src={movieFt} alt="movieFoto" />
            </DivFoto>
            
            <DivInfo>
                <div>
                    <h2>{movieData.name}</h2>
                    <p>{movieData.runtimeInMinutes}Min</p>
                </div>
                <div className='pfoto'>
                    <p><img src={academy} alt="" />{movieData.academyAwardWins} Wins & {movieData.academyAwardNominations} Nominations</p>
                </div>
                <div className='pflex'>
                    <span>
                        <h3>Budget</h3>
                        <p>${movieData.budgetInMillions}M</p>
                    </span>
                    <span>
                        <h3>revenue</h3>
                        <p>${movieData.boxOfficeRevenueInMillions}M</p>
                    </span>
                </div>
            </DivInfo>
        </CardStyle>
    )
}

export default Card