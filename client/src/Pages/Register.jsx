import React from 'react'

const Register = ({ formHandler, loading, registrationHandler }) => {
    return (
        <div className="col-5 p-2">

            <form className=" card">
                <h2 className="card-title text-center mt-2" style={{ fontFamily: 'Roboto', fontWeight: '700' }}>Register</h2>
                <div className="card-body">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Enter your name" name="name"
                            onChange={formHandler} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter email" name="email"
                            onChange={formHandler} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Enter password"
                            name="password"
                            onChange={formHandler} />
                    </div>
                    <button className="btn btn-warning" style={{ width: '100%' }} disabled={loading} onClick={registrationHandler}>Sign up</button>
                </div>

            </form>
        </div>
    )
}

export default Register