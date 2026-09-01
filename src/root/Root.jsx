import React from 'react';
import NavBar from '../components/NavBar';
import { Outlet } from 'react-router';
import CustomCursor from '../components/CustomCursor';

const Root = () => {
    return (
        <div className="dark min-h-screen bg-[#050505] text-white [--color-primary:#10b981]">
            <CustomCursor />
            <NavBar />
            <Outlet />
        </div>
    );
};

export default Root;
