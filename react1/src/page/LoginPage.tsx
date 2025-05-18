import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from "react";
import * as React from "react";
import {adminData} from "./AdminData.ts";
import { useNavigate } from 'react-router-dom';




export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();


    function handleLogin(e: React.FormEvent) {
        e.preventDefault();
        console.log("Login page");

        const admin = adminData.find(admin => admin.email === email);
        if (admin?.email === email) {
            if (admin.password === password) {
                console.log("Login success")
                console.log(email,password)
                navigate("/home")
            }else{
                console.log("Login fail password incorrect")
            }
        }else{
            console.log("Login fail email is incorrect")
        }


    }
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-4">
                    <div className="card shadow">
                        <div className="card-body">
                            <h2 className="text-center mb-4">Login</h2>
                            <form onSubmit={handleLogin}>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email address</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email"
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Enter your password"
                                        required
                                    />
                                </div>
                                <div className="mb-3 form-check">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="rememberMe"
                                    />
                                    <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                                </div>
                                <button type="submit" className="btn btn-primary w-100">Login</button>
                            </form>
                            <div className="mt-3 text-center">
                                <a href="#forgot-password">Forgot password?</a>
                            </div>
                            <div className="mt-2 text-center">
                                <span>Don't have an account? </span>
                                <a href="#signup">Sign up</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}