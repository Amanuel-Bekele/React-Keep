import React, {Component} from 'react';
import Note from "./Note";

class Notes extends Component {
    state = {
        myNotes: []
    };

    constructor() {
        super();

        const note = [{key: 1, title: 'My First Note', text: 'My note text'}];
        this.state.myNotes = note;
    }

    render() {
        return (
            <div className="notes w-75 p-3 h-75 d-inline-block">
                <div className='note-bottom'>
                    <button className="btn btn-outline-primary btn-sm m-2">
                        Add Note
                    </button>

                    <div className="notes-container">

                        {
                            this.state.myNotes.map(note => (

                                <div key={note.key}>
                                    <Note key={note.key}
                                    noteTitle={note.title}/>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>
        );
    }

}

export default Notes;
