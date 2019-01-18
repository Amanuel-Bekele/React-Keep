import React, {Component} from 'react';
import './toolbar.css'

class ToolBar extends Component {
    state = {
        title: 'My Example',
        numbers: [1, 2, 3]
    };


    componentDidMount = () => {

    };

    render() {
        return (
            <nav className="navbar bg-primary shadow">
                <span className="mb-0 h1">React Keep</span>
                <span className="badge m-2 bg-secondary">0</span>
            </nav>
        );
    }


    changeMyTitle = (newTitle) => {
    }
}

export default ToolBar;
