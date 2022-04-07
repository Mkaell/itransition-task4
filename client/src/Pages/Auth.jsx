import React, { useContext, useState } from "react";
import 'react-bootstrap'
import useHttp from "../Hooks/httpHook";
import { Context } from "../context/Context";
import Login from "./Login";
import Register from "./Register";

export default function Auth() {

    const auth = useContext(Context)

    const [open, setOpen] = useState(true)
    const { loading, request } = useHttp()
    const [form, setForm] = useState({
        email: '', password: '', name: ''
    })

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
                            <Login formHandler={formHandler} loading={loading} loginHandler={loginHandler} />
                            :
                            <Register formHandler={formHandler} loading={loading} registrationHandler={registrationHandler} />

                    }

                </div>
            </div>
        </>
    )
}
