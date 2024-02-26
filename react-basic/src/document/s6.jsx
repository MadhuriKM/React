import React, { useState} from 'react'

function Screen5(props) {
    // const [state,handler] = useState(value)

    const [num,setNum] = useState(1)
    const [title,setTitle] = useState('react js')

    const addVal = (val) => {
        setNum(num + val)
    }

    return (
        <div>
            <h1>States in functional Component</h1>
            <h1> Number = { num }</h1>
            <h1> { title }</h1>

            <br />

            <button onClick={() => addVal(10)}>Add + 10</button>
            <button onClick={() => addVal(20)}>Add + 20</button>
            <button onClick={() => addVal(40)}>Add + 40</button>
            <button onClick={() => addVal(100)}>Add + 100</button>
        </div>
    )
}

export default Screen5