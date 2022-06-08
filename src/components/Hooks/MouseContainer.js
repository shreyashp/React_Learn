import React, { useState } from 'react'
import HooksMouseHandler from './HooksMouseHandler'

function MouseContainer() {

    const[enable, setEnable] = useState(true)

    return (
        <div>
            <button onClick={() => {setEnable(!enable)}}>Toggle Mouse Move</button>
            {enable && <HooksMouseHandler/>}
        </div>
    )
}

export default MouseContainer
