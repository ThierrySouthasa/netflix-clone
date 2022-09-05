import React from 'react'
import NetflixAppBar from './NetflixAppBar'
import NetflixRow from './NetflixRow'
import NetflixFooter from './NetflixFooter'
import NetflixHeader from './NetflixHeader'
import { getRandomType, getRandomId } from '../utils/helper'
import { clientApi } from '../utils/clientApi'
import './netflix.css'


const NetflixApp = () => {
    const [headerMovie, setHeaderMovie] = React.useState()
    const [type] = React.useState(getRandomType())
    const defaultMovieId = getRandomId(type)

    React.useEffect(() => {
        clientApi(`${type}/${defaultMovieId}`)
            .then(response => {
                setHeaderMovie(response)
            })
            .catch(error => console.error(error))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div>
            <NetflixAppBar />
            <NetflixHeader movie={headerMovie?.data} type={type} />
            <NetflixRow wideImage={false} title="Films Netflix" />
            <NetflixRow wideImage={true} title="Série Netflix" />
            <NetflixFooter />
        </div>
    )
}

export default NetflixApp;