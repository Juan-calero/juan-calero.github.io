import React from 'react'
import desenvolvimentoData from '../../utils/SkillsData/desenvolvimentoData';

function Ferramentas() {
    const something = desenvolvimentoData.map(e => {
        return(
            <svg skills={e.skill} key={e.id} xmlns={e.xmlns} width={e.width} height={e.height} viewBox={e.viewBox} >
                <path d={e.d}/>
            </svg>
        )
    })
    return (
        <div className="skills__navbar--ferramentas">
            {something}
        </div>
    )
}

export default Ferramentas
