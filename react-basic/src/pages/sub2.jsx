import React, { Component} from "react";

class Sub2 extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h1>Sub2 Components</h1>
                <h2> product ( a*b )= { this.props.a * this.props.b }</h2>
                {/* <h3>a = { this.props.a}</h3>
                <h3>b = { this.props.b}</h3> */}
            </div>
        )
    }
}
export default Sub2