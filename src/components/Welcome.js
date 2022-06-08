//class component example

import React , {Component} from 'react';

class Welcome extends Component {
    render() {
        //example of destructuring the props
        const {name, aka} = this.props
        return(
            <div>
                {/* This is a class Component */}
                Hello {name} a.k.a. {aka}
            </div>
        )
    }
}

export default Welcome;