import './App.css';
import Feed from './Feed';
import Sidebar from './Sidebar';
import Widgets from './Widgets';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Login';
import useToken from './useToken';

function App() {
    const { token, setToken } = useToken();
    if (!token) {
        return (
            <div className="app">
                <Login setToken={setToken} />
            </div>
        );
    }
    return (
        <div className="app">
            <BrowserRouter>
                <Switch>
                    <Route path="/">
                        <Sidebar setToken={setToken}/>
                        <Feed />
                        <Widgets />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
