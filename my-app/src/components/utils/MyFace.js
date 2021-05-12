import React, { Component } from 'react'
import JCFace from '../../img/jcface.jpg'

export default class MyFace extends Component {
    render() {
        return (
            <div>
                <img id="myface" src={JCFace} alt="" />
            </div>
        )
    }
}
