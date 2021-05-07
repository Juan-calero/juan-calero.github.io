import React from 'react'
import ProjetoItem from './ProjetoItem'
import PrintMusicaEmSi from '../../../img/musicaemsiprint.png'
import PrintWashome from '../../../img/washome screenshot.png'
import Github from '../../../icons/github.png'


function ProjetoItems() {
    return (
        <div className="projetos__items">
            <ProjetoItem
                img={PrintMusicaEmSi}
                title="MÚSICA EM SI"
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quasi est veritatis. A sapiente, odio eum atque illum esse sit."
                tech="WIX CORVID"
                github={Github}
                site={Github}
                mockup={Github}

            />
            <ProjetoItem
                img={PrintWashome}
                title="WASHOME"
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quasi est veritatis. A sapiente, odio eum atque illum esse sit."
                tech="HTML SASS JAVASCRIPT ADOBE XD ADOBE DIMENSION"
                github={Github}
                site={Github}
                mockup={Github}

            />
            <ProjetoItem
                img={PrintMusicaEmSi}
                title="PORTFOLIO V1"
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quasi est veritatis. A sapiente, odio eum atque illum esse sit."
                tech="REACT"
                github={Github}
                site={Github}
                mockup={Github}

            />
        </div>
    )
}

export default ProjetoItems
