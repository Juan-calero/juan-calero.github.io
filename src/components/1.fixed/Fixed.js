import React from 'react'
import FixedBg from './bg/FixedBg'
import FixedRight from './navRight/FixedRight'
import FixedLeft from './socialLeft/FixedLeft'

function Fixed() {
    return (
        <div className="fixed">
            <FixedBg />
            <FixedLeft />
            <FixedRight />
        </div>
    )
}

export default Fixed
