import React from 'react';
import NavBar from '../components/NavBar';
import { Outlet } from 'react-router';
import CustomCursor from '../components/CustomCursor';

const Root = () => {
    return (
        <div>
            <CustomCursor />
            <NavBar />
            <Outlet />
        </div>
    );
};

export default Root;