import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Wines from './components/Wines';

function Routes() {
    return (
        <Router>
            <Route path="/" component={Wines} />
        </Router>
    );
}

export default Routes;
