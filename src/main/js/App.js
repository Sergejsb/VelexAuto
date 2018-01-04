import React, { Component } from 'react';
import {
    Link,
    Route,
    BrowserRouter
} from 'react-router-dom';
import {
    Container,
    Button,
    Icon
} from 'semantic-ui-react';
import EmployeeListPage from './pages/EmployeeListPage';
import EmployeeFormPage from './pages/EmployeeFormPage';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import JobPage from './pages/JobPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';


class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/about' component={AboutPage} />
                    <Route path='/job' component={JobPage} />
                    <Route path='/contacts' component={ContactPage} />
                    <Route path='/login' component={LoginPage} />
                    <Route exact path='/employees' component={EmployeeListPage} />
                    <Route path='/employees/add' component={EmployeeFormPage} />
                    <Route path='/employees/edit/:id' component={EmployeeFormPage} />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;