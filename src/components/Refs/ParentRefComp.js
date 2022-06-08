//This Demo is for illustration that Invoking refs in child component from Parent is possible

import React, { Component } from 'react'
import ChildRefComp from './ChildRefComp'

class ParentRefComp extends Component {

    constructor(props){
        super(props)

        this.parentRef = React.createRef()
    }

    onClickHandler = () => {
        //Invoking Child class focus Input method using parent class ref current object
        this.parentRef.current.childRefInvoke()
    }

    render() {
        return (
            <div>
                <ChildRefComp ref={this.parentRef}/>
                <button onClick={this.onClickHandler}>Focus Input</button>
            </div>
        )
    }
}

export default ParentRefComp
