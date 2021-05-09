import React from 'react'

class FixedRight extends React.Component {
    constructor(){
        super()
        this.state = {
            isActive: false
        }
    }
    handleClick(){

    }

    render() {
        return (
            <aside className="fixed__right">
                <div onClick={() => this.setState({isActive: !this.state.isActive})} className={"fixed__right--dot" + (this.state.isActive ? ' active' :'')}></div>
                <div onClick={() => this.setState({isActive: !this.state.isActive})} className={"fixed__right--dot" + (this.state.isActive ? ' active' :'')}></div>
                <div className="fixed__right--dot"></div>
                <div className="fixed__right--dot"></div>
                <div className="fixed__right--dot"></div>
                <div className="fixed__right--dot"></div>
            </aside>
        )
    }
}

export default FixedRight
