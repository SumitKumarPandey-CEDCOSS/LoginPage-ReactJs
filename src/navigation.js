import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Dashboard from './dashboard.js';
import Setting from './setting.js';
import About from './about.js';

class Navigation extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/setting">Setting</Link>
                        </li>
                    </ul>
                    <Route exact path="/" component={Dashboard} />
                    <Route path="/about" component={About} />
                    <Route path="/setting" component={Setting} />
                </div>
            </Router>
        );
    }
}
export default Navigation  