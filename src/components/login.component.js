import React, { Component } from 'react'

export default class Login extends Component {
  render() {
    return (
      <form>
        <h3>Login</h3>

        <div className="mb-3">
          
          <input
            type="email"
            className="form-control"
            placeholder="User Name"
          />
        </div>

        <div className="mb-3">
          
          <input
            type="password"
            className="form-control"
            placeholder="Password"
          />
        </div>

        

        <div className="r-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          <a href="#">Forgot password?</a>
        </p>
      </form>
    )
  }
}
