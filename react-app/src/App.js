import './App.css';
import Feed from './Feed';
import Sidebar from './Sidebar';
import Widgets from './Widgets';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Login';

function setToken(token) {
    sessionStorage.setItem('token', JSON.stringify(token));
}

function getToken() {
    const tokenString = sessionStorage.getItem('token');
    return JSON.parse(tokenString);
}

function App() {
    const token = getToken();
    if (!token) {
        return <Login setToken={setToken} />
    }
    return (
        <div className="app">
            <BrowserRouter>
                <Switch>
                    <Route path="/">
                        <Sidebar />
                        <Feed />
                        <Widgets />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
