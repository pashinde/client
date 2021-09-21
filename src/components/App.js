import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const PageOne = () => {
    return (
        <div>
            PageOne
            <br />
            <Link to="/pagetwo">Page Two</Link>
        </div>
    );
};

const PageTwo = () => {
    return (
        <div>
            PageTwo
            <br />
            <Link to="/">Page One</Link>
        </div>
    );
};

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Route path="/" exact component={PageOne} />
                <Route path="/pagetwo" component={PageTwo} />
            </BrowserRouter>
        </div>
    );
};

export default App;