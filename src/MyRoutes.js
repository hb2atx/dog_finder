import React from 'react';
import { Navigate, Route, Routes } from "react-router-dom";
import DogList from './DogList';
import FilterDogDetails from './FilterDogDetails';

function MyRoutes({dogs}) {
    return (
        <Routes>
            <Route exact path="/dogs">
                <DogList dogs={dogs} />
            </Route>
            <Route>
                <FilterDogDetails dogs={dogs} />
            </Route> 
            <Navigate to="/dogs" />         
        </Routes>
    )
}

export default MyRoutes;