import React from 'react'

function Person(props) {
    const {person} = props
    return (
        <div>
            I am {person.name}. I am {person.age} years Old. I know {person.skill}.
        </div>
    )
}

export default Person
 