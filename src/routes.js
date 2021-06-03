import React from 'react';
//import { Router } from 'react-router';
import { createBrowserHistory } from 'history';
import Jobs from './components/Jobs';
import JobInfo from './components/JobInfo';
import { Router, Route, Switch } from 'react-router-dom';

const history = createBrowserHistory();

function Routes() {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path="/">
                    <Jobs />
                </Route>
                <Route exact path="/job/:id">
                    <JobInfo />
                </Route>
            </Switch>
        </Router>
    );
}

export default Routes;
