import React, { Component } from "react"

// variables
let x = 12
let y = 394.45
const status = true

const str = "welcome to react"

let colors = ['red', 'orange', 'blue', 'green', 'gold']

const user = {
    name: "john",
    email: "john@gmail.com",
    age: 23,
    isAdmin: false
}

class Page1 extends Component {
    constructor(props) {
        super(props)
    } 
    render() {
        return (
            <div>
                <h3>Variables in class Component</h3>
                <h1> x = { x } </h1>
                <h1> y = { y }</h1>
                <h1> product = { x * y }</h1>
                <hr/>

                <h1> { str }</h1>
                <hr />

                <h1> Boolean = { status ? "Say True": "Say False" }</h1>
                <hr />

                <h1>User name = { user.name }</h1>
                <h1>User email = { user['email']} </h1>3

                <ol>
                    {
                        colors.map(function(item,index){
                            return (
                                <li key={index}> { item }</li>
                            )
                        })
                    }
                </ol>
            </div>
        )
    }
}

export default Page1