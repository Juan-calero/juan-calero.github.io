import React from 'react'

class FixedRight extends React.Component {
    constructor() {
        super()
        this.state = {
            name: 1
        }
    }

    render() {
        const arr = ['fold', 'sobre', 'oQueFaco', 'experiencia', 'projetos', 'contato']
        const mapped = arr.map(e => {
            return (
                <div
                    onClick={() => {
                        this.setState({ name: e })
                        window.location.replace("/#" + e)
                    }}
                    className={"fixed__right--dot" + (this.state.name === e ? ' active' : '')}></div>
            )
        })

        return (
            <aside className="fixed__right">
                {mapped}
            </aside>
        )
    }
}

export default FixedRight
