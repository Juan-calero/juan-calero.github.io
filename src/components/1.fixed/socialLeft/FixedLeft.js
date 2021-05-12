import React from 'react'
import { cursorHoverBig, cursorHoverSmall } from '../../utils/CursorHoverHandler'
import JCLogo from './components/JCLogo'
import Lines from './components/Lines'
import Social from './components/Social'

function FixedLeft() {
    return (
        <div className="fixed__left">
            <JCLogo />
            <div
                onMouseEnter={cursorHoverBig}
                onMouseLeave={cursorHoverSmall}
                className="fixed__social">
                <Social />
                <Lines />
            </div>
        </div>
    )
}

export default FixedLeft
