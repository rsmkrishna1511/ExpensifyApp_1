import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpExpensePage from '../components/HelpExpensePage';
import NoFoundPage from '../components/NoFoundPage';
import Header from '../components/Header';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/"  component={ExpenseDashboardPage} exact={true}/>
                <Route path="/create"  component={AddExpensePage} />
                <Route path="/edit/:id"  component={EditExpensePage} />
                <Route path="/help"  component={HelpExpensePage} />
                <Route component={NoFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;