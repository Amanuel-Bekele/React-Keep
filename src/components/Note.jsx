import React, {Component} from 'react';
class Note extends Component {

    state = {};

    render() {
        return (
            <div className="card shadow note">
                <div className="card-body">
                    <span className="h3">
                        {this.props.noteTitle}
                    </span>

                </div>
            </div>

        );
    }

}

export default Note;
