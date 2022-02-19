import React from "react";
import { Route, Routes } from "react-router-dom";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { privateRouter, publicRouter } from "../router";


const AppRouter = () => {
    const {isAuth} = useTypedSelector(state => state.authUser)
    return(
        isAuth 
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