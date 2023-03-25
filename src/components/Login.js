import React, { Component } from 'react'

export class Login extends Component {
  render() {
    return (
      <div>
        <div className='cantainer'>

          <form style={{ marginTop: 20 }}>
            <div className='mb-3'>
              <lable>User name:</lable>
              <input type="email" className="form control" id="exampleInputEmail" style={{ marginRight: 20 }} />
            </div>

            <div className='mb-3'>
              <lable>Password:</lable>
              <input type="password" className="form control" id="exampleInputPass" style={{ marginRight: 20 }} />
            </div>

            <div className="mb-3">
              <button type="submit" className="btn btn-primary" style={{ marginRight: 40 }}>Login</button>
              <button type="submit" className="btn btn-primary" >SignUP</button>
            </div>

          </form>
        </div>
      </div>
    )
  }
}

export default Login
