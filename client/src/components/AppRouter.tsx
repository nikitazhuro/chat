import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { privateRouter, publicRouter } from "../router";


const AppRouter = () => {
    const isLogin = false
    return(
        isLogin 
            ? <Routes>
                {privateRouter.map(route => 
                    <Route
                    key={route.path}
                    path={route.path}
                    element={<route.element/>}
                    />
                )}
              </Routes>
            : <Routes>
                {publicRouter.map(route => 
                    <Route 
                    key={route.path} 
                    path={route.path} 
                    element={<route.element/>}
                    />
                )}
              </Routes>
    )
}

export default AppRouter;