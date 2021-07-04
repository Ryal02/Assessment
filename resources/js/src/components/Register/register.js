import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../api';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function register() {
    toast.configure();
    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const [required, setRequired] = useState('form-control');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatpwd, setRepeatpwd] = useState('');


    const registrationUser = async () => {
        setLoading(true);
        const formdata = new FormData();
        formdata.append('name', name);
        formdata.append('email', email);
        formdata.append('password', password);
        formdata.append('repeatpwd', repeatpwd);
        try {
            await api.registerUser(formdata).then(response => {
                if(response.data.success) {
                    console.log(response.data.success)
                    history.push('/');
                    toast.success(response.data.success, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        
                    });
                }
              
                if(response.data.error) {
                    toast.error(response.data.error, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    setRequired('form-control is-invalid');
                    setPassword('');
                    setRepeatpwd('');
                }
                if(response.data.failed) {
                    toast.error(response.data.failed, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    setPassword('');
                    setRepeatpwd('');
                }
            })
        } catch {
            alert('ERROR');
        } finally {
            setLoading(false);
        }
    }

    

    return (
        <div className="hold-transition login-page bg-white">
            <div className="login-box ">
            
                <div className="card">
                    <div className="card-body login-card-body bg-dark">
                        <p className="login-box-msg"><strong>Register</strong></p>
                        <form>
                            <div className="form-group">
                                <input 
                                    type="text"
                                    className={required} 
                                    placeholder="Name"
                                    value={name}
                                    onChange={e => {setName(e.target.value);setRequired('form-control')}}
                                    required
                                />
                               
                            </div>
                            <div className="form-group">
                                <input 
                                    type="email" 
                                    className={required} 
                                    placeholder="Email"
                                    value={email}
                                    onChange={e => {setEmail(e.target.value);setRequired('form-control')}}
                                    required
                                />
                               
                            </div>
                            <div className="form-group">
                                <input 
                                    type="password" 
                                    className={required} 
                                    placeholder="Password"
                                    value={password}
                                    onChange={e => {setPassword(e.target.value);setRequired('form-control')}}
                                    required
                                />
                               
                            </div>
                            <div className="form-group">
                                <input 
                                    type="password" 
                                    className={required}
                                    placeholder="Retype password" 
                                    value={repeatpwd}
                                    onChange={e => {setRepeatpwd(e.target.value);setRequired('form-control')}}
                                    required
                                />
                               
                            </div>
                            <div className="form-group">
                               
                                <button 
                                    type="submit" 
                                    className="btn btn-success btn-lg btn-block"
                                    onClick={registrationUser}
                                    disabled={loading}
                                >{loading ? 'Loading...' : 'Register'}</button>
                            
                            </div>
                           
                            <p className="forgot-password text-center">
                                Already registered <Link to="/">log in?</Link>
                            </p>
                        </form>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default register;

