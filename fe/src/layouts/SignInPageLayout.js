import React from 'react';
import TopHeader from '../components/HeadingLine';
import { Outlet } from "react-router-dom";

const SignInPageLayout = () => {
    return (
        <>
            <TopHeader />
            <Outlet />
        </>
    );
}

export default SignInPageLayout;