import React, { Component } from 'react'
import JCLogo from './components/JCLogo'
import Social from './components/Social'

export class FixedLeft extends Component {
    render() {
        return (
            <div>
                <JCLogo />
                <Social />
            </div>
        )
    }
}

export default FixedLeft
