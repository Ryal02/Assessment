import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../AdminDashboard/navbar';


const dashboard = () => {
    

    return (

        <div className="hold-transition sidebar-mini layout-fixed">
            <div className="wrapper">
                <Navbar />
                
            </div>
        </div>
    );
};


export default dashboard;

