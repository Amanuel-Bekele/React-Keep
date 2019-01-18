import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ToolBar from './components/toolbar';
import Notes from "./components/Notes";

class App extends Component {
    render() {
        return (
            <div className="App">
                <ToolBar/>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                </header>
                <Notes/>
            </div>
        );
    }
}

export default App;
