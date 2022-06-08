import React, { Component } from 'react'

class ChildRefComp extends Component {
    constructor(props){
        super(props)

        this.refForChildInput = React.createRef()
    }

    childRefInvoke = () => {
        //This function is triggered by parent class function call using parent class ref
        this.refForChildInput.current.focus()
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.refForChildInput}></input>
            </div>
        )
    }
}

export default ChildRefComp
