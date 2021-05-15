import React from 'react'

class Burger extends React.Component {
    constructor(){
        super()
        this.state = {
            isToggled: false
        }
    }

    handleClick = () => {
        this.setState(prevState => ({
            isToggled: !prevState.isToggled
        }))
    }

    render() {
        return (
            <div onClick={this.handleClick} className="burger">
                <aside className={'burger__bg' + (this.state.isToggled ?' burger__active' : '')}>
                    <div className="burger__icon">
                        <div className="burger__icon--line"></div>
                        <div className="burger__icon--line"></div>
                        <div className="burger__icon--line"></div>
                    </div>
                    {this.state.isToggled ? 
                     <nav data-aos="fade" data-aos-duration="1000" data-aos-delay="400" className="burger__nav">
                     <a className="burger__nav--item" href="#sobre">Sobre</a>
                     <a className="burger__nav--item" href="#oQueFaco">O que faço</a>
                     <a className="burger__nav--item" href="#experiencia">Experiência</a>
                     <a className="burger__nav--item" href="#projetos">Projetos</a>
                     <a className="burger__nav--item" href="#contato">Contactos</a>
                 </nav> : ''}
                </aside>

            </div>
        )
    }
}

export default Burger
