import React from 'react'
import JCLogo from './components/JCLogo'
import Lines from './components/Lines'
import Social from './components/Social'

function FixedLeft() {
    return (
        <div className="fixed__left">
            <JCLogo />
            <div className="fixed__social">
                <Social />
                <Lines />
            </div>
        </div>
    )
}

export default FixedLeft
