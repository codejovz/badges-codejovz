import React from 'react';
import {Sidebar} from  './Sidebar.jsx'
import {Landing} from './Landing.jsx'
import {NavLink} from 'react-router-dom';

export function Centro() {
    return(
        <div class="centro">
            <Sidebar />
            <Landing />
        </div>
    );
}