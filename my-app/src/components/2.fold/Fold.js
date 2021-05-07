import React from 'react';
import Center from './center/Center';
import NavBar from './navBar/NavBar';


function Fold(){
    return (
        <section className="fold">
            <NavBar />
            <Center />
        </section>
    )
}

export default Fold;