import React, { useContext, useState } from "react";
import 'react-bootstrap'
import useHttp from "../Hooks/httpHook";
import { Context } from "../context/Context";


export default function Auth() {

    const auth = useContext(Context)
    const [open, setOpen] = useState(true)
    const { loading, request } = useHttp()
    const [form, setForm] = useState({
        email: '', password: '', name: ''
    })
    console.log(auth)
    const formHandler = (event) => {

        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const registrationHandler = async () => {
        try {
            const { email, password, name } = { ...form }
            const data = await request('/api/auth/register', 'POST', { email, password, name }, {})

            if (data.message === 'User created') {

                auth.login(data.token, data.userId, data.isBanned, data.userEmail)
            }
        } catch (e) {
            alert(e.message);
        }
    }

    const loginHandler = async () => {

        try {
            const { email, password } = { ...form };
            const data = await request('/api/auth/login', 'POST', { email, password }, {});
            auth.login(data.token, data.userId, data.isBanned, data.userEmail)
            // eslint-disable-next-line no-restricted-globals
            location.reload()
        } catch (e) {
            alert(e.message);
        }
    }

    return (
        <>
            <div className="bg-dark" style={{ display: 'flex', justifyContent: 'flex-end', padding: '10px' }}>
                <button className="btn btn-warning" onClick={() => setOpen(!open)}>
                    {
                        open ? 'Sign up' : "Log in"
                    }
                </button>
            </div>
            <div style={{ marginTop: '100px' }}>
                <div className="container d-flex justify-content-around" >
                    {
                        open ?
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
                                        <button className="btn btn-warning" style={{ width: '100%' }} disabled={loading} onClick={() => loginHandler()}>Log In</button>
                                    </div>

                                </form>
                            </div>
                            :
                            <div className="col-5 p-2">

                                <form className=" card">
                                    <h2 className="card-title text-center mt-2" style={{ fontFamily: 'Roboto', fontWeight: '700' }}>Register</h2>
                                    <div className="card-body">
                                        <div className="form-group">
                                            <label htmlFor="name">Name</label>
                                            <input type="text" className="form-control" id="name" placeholder="Enter your name" name="name"
                                                value={form.name}
                                                onChange={formHandler} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">Email</label>
                                            <input type="email" className="form-control" id="email" placeholder="Enter email" name="email"
                                                value={form.email}
                                                onChange={formHandler} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="password">Password</label>
                                            <input
                                                type="password"
                                                className="form-control" i
                                                d="password"
                                                value={form.password}
                                                placeholder="Enter password"
                                                name="password"
                                                onChange={formHandler} />
                                        </div>
                                        <button className="btn btn-warning" style={{ width: '100%' }} disabled={loading} onClick={registrationHandler}>Sign up</button>
                                    </div>

                                </form>
                            </div>
                    }

                </div>
            </div>
        </>
    )
}
