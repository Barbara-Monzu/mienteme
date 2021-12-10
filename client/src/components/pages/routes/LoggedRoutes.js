import { Switch, Route, Redirect } from 'react-router-dom';
import React, { useState, useEffect } from 'react'
import FooterNav from "../footerNav/FooterNav";
import AllRoutes from "./AllRoutes"
import HeaderNav from "../headerNav/HeaderNav";


const LoggedRoutes = () => {

    return (
        <>
         
                <HeaderNav/>
                <AllRoutes />
                <FooterNav />
         
        </>
    )

}

export default LoggedRoutes