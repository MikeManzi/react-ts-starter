import React from 'react'
import './index.scss'

interface HomePageProps{
    title: string,

}
function HomePage({title}: HomePageProps):JSX.Element {
    return (
        <div>
            <h1>{title}</h1>
        </div>
    )
}

export default HomePage

