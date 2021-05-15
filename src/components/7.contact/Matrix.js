import React from 'react'

class Matrix extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 'a',
            arr: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P']
        }
    }
    componentDidMount() {
        this.interval = setInterval(() => {
            const arr2 = Array.from(Array(5 + Math.floor(Math.random() * 3)).keys())
            this.mapped = arr2.map(() => {
                this.setState(
                    {
                        count: this.state.arr[Math.floor(Math.random() * this.state.arr.length)]
                    })
                return (
                    <p>{this.state.count}</p>
                )
            })
        }, 350)
    }

    render() {
        return (
                <div className="matrix__line">
                    {this.mapped}
                </div>
        )
        }
        componentWillUnmount(){
            clearInterval(this.interval)
        }
}

export default Matrix
