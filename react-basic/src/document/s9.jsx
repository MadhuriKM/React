import React,{ useState} from 'react'

const Screen8 = function(props) {
const [x,setX] = useState(1)

const addValue = (val) => {
    setX(x + val)
}
console.log('componenr render')
 return (
    <div>
        <h1>States in Const Local function</h1>
        <h2> variable x = { x }</h2>

        <button onClick={() => addValue(1)}>Add+1</button>
    </div>
 )
}

export default Screen8
