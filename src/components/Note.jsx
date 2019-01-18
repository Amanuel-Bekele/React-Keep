import React, {Component} from 'react';
class Note extends Component {

    constructor(props){
        super();

    }

    state = {};


    handleDeleteClick(){
        console.log("Handle Delete Click!")
    }

    handleNoteDelete = () =>{
      console.log(this.props.onNoteDelete())
    };


    render() {
        return (
            <div className="card shadow note">
                <div className="card-body">
                    <span className="h3">
                        {this.props.noteTitle}
                    </span>
                    <div className="m-5">
                        <span className="h5 m-5">
                        {this.props.noteText}
                    </span>
                    </div>

                    <button type="button" onClick={this.handleDeleteClick} className="btn btn-outline-danger">
                        Delete
                    </button>


                </div>
            </div>

        );
    }

}

export default Note;
