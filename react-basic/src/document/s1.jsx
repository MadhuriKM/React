import React, { Component } from 'react'

class Spage1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            a: 12,
            b: 145.564,
            isView: true,
            users: ['John', 'Micheal', 'David', 'Tom'],
            course: {
                id: 1,
                title: "React",
                duration: "1.5 month"
            }
        }
    }

    render() {
        return (
            <div>
                <h1>States in Class COmponent</h1>
                <h2> a = { this.state.a} </h2>
                <h2> b = { this.state.b}</h2>
                <h2> { this.state.isView ? "Say Hi" : "Sorry, Bye"}</h2>
                <hr />
                <h2 title= { this.state.course.title}></h2>
                <hr />
                <ol>
                    {
                        this.state.users.map((item,index)=>{
                            return (
                                <li key={index}>{item}</li>
                            )
                        })
                    }
                </ol>
            </div>
        )
    }
}

export default Spage1