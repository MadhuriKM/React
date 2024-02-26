import React,{ Component } from "react";

class Sub1 extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h1>Sub Component 1</h1>
                <h3> x = { this.props.x}</h3>
                <h3> y = { this.props.y}</h3>
            </div>
        )
    }
}

export default Sub1