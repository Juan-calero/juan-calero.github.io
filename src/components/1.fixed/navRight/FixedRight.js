import React from 'react'
import { cursorHoverBig, cursorHoverSmall } from '../../utils/CursorHoverHandler'

class FixedRight extends React.Component {
    constructor() {
        super()
        this.state = {
            name: 1,
            arr: ['fold', 'sobre', 'oQueFaco', 'experiencia', 'projetos', 'contato']
        }
    }
    handleScroll = _ => {
        this.state.arr.map(e => {
            const section = document.getElementById(e)
            const sectionTop = section.getBoundingClientRect().top
            const dot = document.querySelector(`[dot=${e}]`)
            console.log(e, section.scrollHeight, sectionTop)

            sectionTop < 400 && sectionTop >= 400 - section.scrollHeight ?
                dot.classList.add('active') :
                dot.classList.remove('active')

        })
    }

    render() {
        const mapped = this.state.arr.map(e => {
            return (
                <div
                    dot={e}
                    onClick={() => {
                        this.setState({ name: e })
                        window.location.replace("/#" + e)
                    }}
                    className={"fixed__right--dot" + (this.state.name === e ? ' active' : '')} ></div>
            )
        })
        window.addEventListener('scroll', this.handleScroll)
        return (
            <aside
                className="fixed__right"
                onMouseEnter={cursorHoverBig}
                onMouseLeave={cursorHoverSmall}>
                {mapped}
            </aside>
        )
    }
}

export default FixedRight

///////////REDO THIS IS TOO BIG
///////////////////////