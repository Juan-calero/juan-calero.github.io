import React from 'react'
import OQueFacoBG from './bg/OQueFacoBG'
import OQueFacoItems from './items/OQueFacoItems'

function OQueFaco() {
    return (
        <section id="oQueFaco" className="oQueFaco">
            <h2 data-aos="fade-right">O Que Faço</h2>
            <OQueFacoItems />
            <OQueFacoBG />
        </section>
    )
}

export default OQueFaco
