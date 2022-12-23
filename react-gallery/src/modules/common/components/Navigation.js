import React from 'react'
import NavigationItem from './NavigationItem'
import './Navigation.css'

function Navigation({page, navigate }) {
    return (
        <div className= 'navigation'>
            <NavigationItem path='albums' label='Gallery' currentPath={page} navigate={navigate} />
            <NavigationItem path='photos' label='Photos' currentPath={page} navigate={ navigate} />
        </div>
    )
}

export default Navigation