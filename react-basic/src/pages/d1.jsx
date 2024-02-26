import React, { Component } from "react";
import Sub1 from "./sub1";
import Sub2 from "./sub2";

class Doc1 extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div id='test'>
                <h1>Props in Class Component</h1>
                {/* JSX Attributes => props */}
                <Sub1 x={213} y={245}/>
                <Sub2 a={346} b={355}/>
            </div>
        )
    }
}

export default Doc1