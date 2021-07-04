import React, { Component }  from 'react';
import { Redirect, Link, NavLink } from 'react-router-dom';

export default class navbar extends Component {

    state = {
        navigate: false,
      };
    
      onLogoutHandler = () => {
        localStorage.clear();
        this.setState({
          navigate: true,
        });
      };
    render() {
        const user = JSON.parse(localStorage.getItem("userData"));
        const { navigate } = this.state;
        if (navigate) {
          return <Redirect to="/" push={true} />;
        }

        return (
            
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                <Link to="/home" className="brand-link">
                    <span className="brand-text font-weight-light text-center "><b> <center>ADMIN PAGE</center></b></span>
                </Link>

                <div className="sidebar">
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    
                        <div className="image">
                        <img src="lte/ryan.jpg" className="img-circle elevation-2" alt="User Image" />
                        </div>
                        <div className="info">

                            <a href="#" className="d-block"> Ryan Basadre</a>
                        </div>
                    </div>

                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            <li className="nav-item">
                                <NavLink to="/home" className="nav-link" activeStyle={{fontWeight: "bold", color: "white"}} >
                                <i className="nav-icon fas fa-tachometer-alt"></i>
                                    <p>
                                        Dashboard
                                        <span className="right badge badge-danger"></span>
                                    </p>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink  to="/map" className="nav-link" activeStyle={{fontWeight: "bold", color: "white"}}>
                                <i className="nav-icon fas fa-map-marker"></i>
                                <p>
                                    Google Map
                                    <span className="right badge badge-danger"></span>
                                </p>
                                </NavLink >
                            </li>
                            <li className="nav-item">
                            <a href="#" className="nav-link" data-backdrop="false" data-toggle="modal" data-target="#logout" >
                                &nbsp; <i className="fas fa-sign-out-alt "> </i> 
                                <p> &nbsp; Logout</p>
                            </a>
                            
                            </li>
                            
                        </ul>
                    </nav>
                </div>
                <div className="modal fade" id="logout">
                <div className="modal-dialog modal-sm">
                    <div className="modal-content" >
                    <div className="modal-header pt-1 pb-1"  >
                        <button  className="close text-white" data-dismiss="modal" aria-label="Close" >
                            <span aria-hidden="true" className="text-dark"></span>
                        </button>
                    
                    </div>
                    <div className="modal-body text-center">
                        <div className="col-md-12 ">
                            <p  className="text-muted p-0" >
                            <i className="fa fa-exclamation-circle fa-lg text-warning " > </i> Are you sure you want logout?<br/>
                            </p>
                        </div>
                    
                        <div className="col-md-12 text-right">
                        <button  className="btn btn-success btn-md" onClick={this.onLogoutHandler}>
                            <i className="fas fa-sign-out-alt "> </i> 
                            Yes,Logout
                        </button>
                        <button type="button" className="btn btn-secondary btn-md " data-dismiss="modal"><i className="fas"></i> No, cancel!</button>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </aside>
        );
    };
};
