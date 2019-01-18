import React, {Component} from 'react';
import Note from "./Note";
import axios from 'axios'

class Notes extends Component {
    state = {
        userName: `me`,
        myNotes: []
    };

    constructor() {
        super();

        const note = [{noteId: 1, title: 'My First Note', text: 'My note text'}];
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

                                <div key={note.noteId}>
                                    <Note key={note.noteId}
                                          note={note}
                                    onNoteDelete={this.handleNoteDelete}/>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        const uri = `https://us-central1-pka-forms-fef14.cloudfunctions.net/getNotes?userName=${this.state.userName}`;
        axios.get(uri)
            .then(noteData => {
                console.log('Note Get Data', noteData);
                this.setState({...this.state, myNotes: noteData.data})
            })
            .catch(error => {
                console.log('**ERROR** on Note get ', error);
            })

    }

}

export default Notes;
