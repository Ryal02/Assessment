import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../api';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function login() {
    toast.configure();
    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const [required, setRequired] = useState('form-control');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    if(localStorage.getItem('userAuth')) {
        history.push('/dashboard')
    }

    const loginUser = async () => {
        setLoading(true);
        try {
            await api.login({
                email, password
            }).then(response => {
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
                    setRequired('form-control is-invalid')
                    setPassword('');
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
                }
                if(response.data.success) {
                    localStorage.setItem('userAuth', response.data.token);
                    history.push('/dashboard');
                    toast.success(response.data.message, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }
            })
        } catch {
            console.log('ERROR')
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="hold-transition login-page bg-white">
          <div className="login-box ">
            <div className="card">
              <div className="card-body login-card-body bg-dark">
                <form>
                  <p class="login-box-msg">Sign in to start your session</p>
                  <div className="form-group">
                      <label>Email</label>
                      <input 
                          type="email" 
                          className={required} 
                          placeholder="Enter Email"
                          value={email}
                          onChange={e => {setEmail(e.target.value);setRequired('form-control')}}
                          required
                      />
                      
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                      <input 
                        type="password" 
                        class={required} 
                        placeholder="Enter Password"
                        value={password}
                        onChange={e => {setPassword(e.target.value);setRequired('form-control')}}
                        required
                    />
                  </div>
                  <div className="form-group">
                    
                    <button 
                        type="submit" 
                        class="btn btn-success btn-lg btn-block"
                        onClick={loginUser}
                        disabled={loading}
                    >{loading ? 'Signing In...' : 'Login'}</button>
                
                  </div>
                </form>
                  <p className="forgot-password text-center">
                      <Link to="/register">Create Account</Link>
                  </p>
              </div>
            </div>
          </div>
        </div>
    );
};

export default login;

