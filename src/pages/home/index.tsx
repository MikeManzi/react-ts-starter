import React from 'react'
import { HomePageProps } from '../../models/types'
import './index.scss'


function HomePage({title}: HomePageProps):JSX.Element {
    return (
        <div>
            <h1>{title}</h1>
        </div>
    )
}

export default HomePage

