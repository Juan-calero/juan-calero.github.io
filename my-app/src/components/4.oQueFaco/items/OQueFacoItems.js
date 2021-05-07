import React from 'react'
import OQueFacoItem from './OQueFacoItem'
import Gears from "../../../icons/gears_icon.png"
import Design from "../../../icons/design_icon.png"
import Hands from "../../../icons/envolvimento_icon.png"

function OQueFacoItems() {
    return (
        <div className="oQueFaco__items">
            <OQueFacoItem
                src={Gears}
                title="Desenvolvimento"
                content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus ut dolor iste dignissimos?"
            />
            <OQueFacoItem
                src={Design}
                title="Design"
                content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus ut dolor iste dignissimos?"
            />
            <OQueFacoItem
                src={Hands}
                title="Pro-atividade"
                content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus ut dolor iste dignissimos?"
            />
        </div>
    )
}

export default OQueFacoItems
