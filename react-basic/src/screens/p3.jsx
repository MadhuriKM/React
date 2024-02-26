import React from "react"

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


 const Page3 = () => {
    return (
        <div>
            <h1>Variables in arrow functional component</h1>
            <h3> x = { x }</h3>
            <h3> y = { y }</h3>
            <h3> { status ? "Hi welcome,": "Bye,."}</h3>
            <h3> { str }</h3>
            <hr />
            <ol>
                {
                    colors.map(function(item,index){
                        return (
                            <li key ={index}>{ item }</li>
                        )
                    })
                }
            </ol>
            <hr />
            <h1> name= { user.name } & email = { user.email } & age = {user.age }</h1>
        </div>
    )
}

export default Page3