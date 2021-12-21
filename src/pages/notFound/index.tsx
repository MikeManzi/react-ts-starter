import React from 'react'
import { Link } from 'react-router-dom'
import './styles.scss'
interface Props {

}

const NotFound = (props: Props) => {
    return (
        <div>
            <h1>Error 404</h1>
            <p>That page doesn&apos;t exist.</p>
            <Link to="/">
                <h4>Back to Home</h4>
            </Link>
        </div>
    )
}

export default NotFound
