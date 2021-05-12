import React from 'react'
import ProjetoItem from './ProjetoItem'
import projetosData from '../../utils/projetosData'


function ProjetoItems() {
    const projetoComponents = projetosData.map(projeto => {
        return <ProjetoItem
            id={projeto.id}
            img={projeto.img}
            title={projeto.title}
            content={projeto.content}
            tech={projeto.techUsed}
            github={projeto.gitHubURL}
            site={projeto.webPageURL}
            mockup={projeto.mockupURL} />

    })
    return (
        <div className="projetos__items">
            {projetoComponents}
        </div>
    )
}

export default ProjetoItems
