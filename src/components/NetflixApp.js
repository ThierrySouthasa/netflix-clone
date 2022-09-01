import React from 'react'
import NetflixAppBar from './NetflixAppBar'
import NetflixRow from './NetflixRow'
import NetflixFooter from './NetflixFooter'
import NetflixHeader from './NetflixHeader'
import './netflix.css'


const NetflixApp = () => {
    return (
        <div>
            <NetflixAppBar />
            <NetflixHeader />
            <NetflixRow wideImage={false} title='Films Netflix' />
            <NetflixRow wideImage={true} title='Série Netflix' />
            <NetflixFooter />
        </div>
    )
}

export default NetflixApp;