import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import AdminDashboard from '../../pages/AdminDashboard';
import UserDashboard from '../../pages/UserDashboard';
import LoginPage from '../../pages/LoginPage';
import NotFoundPage from '../../pages/NotFoundPage';

const App = () => {
    // Bu yerda autentifikatsiya holatini va foydalanuvchi rolini tekshirish kerak bo'ladi
    const isAuthenticated = true; // Misol uchun
    const userRole = 'admin'; // Misol uchun

    return (
        <Router>
            <Switch>
                <Route path="/login" component={LoginPage} />
                <PrivateRoute path="/admin" component={AdminDashboard} isAuthenticated={isAuthenticated} role={userRole} requiredRole="admin" />
                <PrivateRoute path="/user" component={UserDashboard} isAuthenticated={isAuthenticated} role={userRole} requiredRole="user" />
                <Route path="/" exact>
                    <Redirect to="/login" />
                </Route>
                <Route component={NotFoundPage} />
            </Switch>
        </Router>
    );
};

// PrivateRoute komponentini yaratamiz
const PrivateRoute = ({ component: Component, isAuthenticated, role, requiredRole, ...rest }) => (
    <Route
        {...rest}
        render={(props) =>
            isAuthenticated && role === requiredRole ? (
                <Component {...props} />
            ) : (
                <Redirect to="/login" />
            )
        }
    />
);

export default App;