//Demo of invoking the child functional component ref directly from the class component 
import React, { Component } from 'react'
import ForwRefInput from './ForwRefInput'

class ForwRefParentInput extends Component {

    constructor(props) {
        super(props) 

        this.parentRef = React.createRef()
    }

    clickHandler = () => {
        //here using parent ref itself to directly access the child component input feild focus
        this.parentRef.current.focus()
    }

    render() {
        return (
            <div>
                <ForwRefInput ref={this.parentRef}/>
                <button onClick={this.clickHandler}>Focus Input</button>
            </div>
        )
    }
}

export default ForwRefParentInput
