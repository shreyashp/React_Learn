import React, { Component } from 'react'

class HoverCounterTwo extends Component {
    render() {
        const {count, incrementCounter} = this.props
        return (
            <div>
                <h2 onMouseOver={incrementCounter}>Hovered {count} Times</h2>
            </div>
        )
    }
}

export default HoverCounterTwo
