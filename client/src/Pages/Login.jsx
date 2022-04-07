import React from 'react'

const Login = ({ formHandler, loading, loginHandler }) => {
    return (
        <div className="col-5 p-3">
            <form className='form card'>
                <h2 className="card-title text-center mt-2" style={{ fontFamily: 'Roboto', fontWeight: '700' }}>LogIn</h2>
                <div className="card-body">
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
                    <button className="btn btn-warning" style={{ width: '100%' }} disabled={loading} onClick={loginHandler}>Log In</button>
                </div>

            </form>
        </div>
    )
}

export default Login