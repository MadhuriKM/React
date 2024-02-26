import React, {Component} from "react";
class Spage4 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            view : true
        }
    }
    toggle(){
        this.setState({
            view: this.state.view = false
        })
    }
    ontoggle(){
        this.setState({
            view: this.state.view = true
        })
    }
    render(){
        return(
            <div>
                <h1>Modify the view using State</h1>
                {
                    this.state.view ?(
                        <div>
                            <form action="" style={{ display:'flex',flexDirection:'column',alignItems:'center',border:'1px solid', padding:'30px' }} >
                                <label htmlFor="" style={{fontSize:'2rem'}}>Username</label>
                                <input type="text" name="uname" id="uname"  style={{ padding:'10px', width:'50%'}}/><br />
                                <label htmlFor="" style={{fontSize:'2rem'}}>Password</label>
                                <input type="password" name="pass" id="pass"  style={{ padding:'10px', width:'50%'}}/><br />
                                <button /* onClick={ () => this.toggle()} */ style={{backgroundColor:'red',padding:'20px', width:'100px',fontSize:'1.5rem'}}>Login</button>
                                {<h1>Already Logiedin <button onClick={ () => this.toggle()}  href="" style={{textDecoration:'none'}}>Register here...</button></h1>}
                                {/* <h1>Already Logiedin <a onClick={ () => this.toggle()}  href="" style={{textDecoration:'none'}}>Register here...</a></h1> */}
                            </form>
                       </div>
                    ) : (
                        <div>
                            <form action="" style={{ display:'flex',flexDirection:'column',alignItems:'center',border:'1px solid', padding:'30px' }} >
                                <label htmlFor="" style={{fontSize:'2rem'}}>Name</label>
                                <input type="text" name="name" id="name"  style={{ padding:'10px', width:'50%'}}/><br />
                                <label htmlFor="" style={{fontSize:'2rem'}}>Username</label>
                                <input type="text" name="uname" id="uname" style={{ padding:'10px', width:'50%'}} /><br />
                                <label htmlFor="" style={{fontSize:'2rem'}}>Password</label>
                                <input type="password" name="pass" id="pass"  style={{ padding:'10px', width:'50%'}}/><br />
                                <button /* onClick={ () => this.ontoggle()} */ style={{backgroundColor:'red',padding:'20px', width:'150px',fontSize:'1.5rem'}}>Register</button>
                                <h1>Already registered <button onClick={ () => this.ontoggle()} href="" style={{textDecoration:'none'}}>Login here...</button></h1>
                                {/* <h1>Already registered <a onClick={ () => this.ontoggle()} href="" style={{textDecoration:'none'}}>Login here...</a></h1> */}
                               
                            </form>
                        </div>
                    )
                }

                
                
            </div>
            
        )
    }
}
export default Spage4