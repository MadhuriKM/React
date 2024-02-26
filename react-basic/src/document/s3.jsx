import React, { Component } from "react";

class Spage3 extends Component {
    constructor(props){
        super(props)
        this.state = {
            qty: 1
        }
    }

    inc(){
        this.setState({
            qty: this.state.qty + 1
        })
    }

    dec(){
        if(this.state.qty<=1){
            this.setState({
                qty:1
            })
        }else {
            this.setState({
                qty: this.state.qty - 1
            })
        }
    }

    render() {
        console.log('component rendered')
        return(
            <div>
               <h1>React States</h1>
                <hr />
                <button onClick={() => this.inc(1)}> +1 </button>
                <h2>Quantity = {this.state.qty}</h2>
                <button onClick={() => this.dec(1)}> -1 </button>
            </div>
        )
    }

}

export default Spage3