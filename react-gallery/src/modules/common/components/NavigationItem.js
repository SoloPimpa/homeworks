import React from 'react'

function NavigationItem({ path, navigate, label, currentPath}) {
    return (
        <div
            className={'one column  navigation-link' + (currentPath === path ? 'active' : '')}
            onClick={() => navigate(path)}> { label}</div>
    )
}
export default NavigationItem