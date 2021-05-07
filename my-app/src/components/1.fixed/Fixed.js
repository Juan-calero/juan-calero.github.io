import React from 'react'
import FixedRight from './navRight/FixedRight'
import FixedLeft from './socialLeft/FixedLeft'

function Fixed() {
    return (
        <div className="fixed">
            <FixedLeft />
            <FixedRight />
        </div>
    )
}

export default Fixed
