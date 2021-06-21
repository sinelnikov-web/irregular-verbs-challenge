import './App.css';
import {HashRouter, Route, Switch} from "react-router-dom";
import Home from "./Components/Home/Home";
import Competitive from "./Components/Challenge/Competitive";
import {useState} from "react";
import EndPage from "./Components/EndPage/EndPage";
import LeaderBoard from "./Components/LeaderBoard/LeaderBoard";
import Learn from "./Components/Learn/Learn";


function App() {

    const [status, setStatus] = useState('default')

    return (
        <div className={`App ${status !== 'default' ? status : ''}`}>
            <HashRouter>
                <Switch>
                    <Route exact path={'/'} component={Home}/>
                    <Route exact path={'/competitive'}>
                        <Competitive setStatus={setStatus}/>
                    </Route>
                    <Route exact path={'/learn'}>
                        <Learn setStatus={setStatus}/>
                    </Route>
                    <Route exact path={'/result'}>
                        <EndPage setStatus={setStatus}/>
                    </Route>
                    <Route exact path={'/leaderboard'} component={LeaderBoard}/>
                </Switch>
            </HashRouter>
        </div>
    );
}

export default App;
