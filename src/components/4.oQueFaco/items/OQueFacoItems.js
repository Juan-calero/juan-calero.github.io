import React from 'react'
import oQueFacoData from '../../utils/oQueFacoData'
import OQueFacoItem from './OQueFacoItem'

function OQueFacoItems() {
    const OQueFacoComponents = oQueFacoData.map(item => {
        return <OQueFacoItem
            id={item.id}
            src={item.src}
            title={item.title}
            content={item.content}
        />
    })
    return (
        <div className="oQueFaco__items">
            {OQueFacoComponents}
        </div>
    )
}

export default OQueFacoItems
