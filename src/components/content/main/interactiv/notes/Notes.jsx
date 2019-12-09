import React from "react";
import DescBody from "../../description/descbody/DescBody";
import s from './Notes.module.css'
import DescMenu from "../../description/descmenu/DescMenu";

class Notes extends React.Component{

    updateNotesEditable =(editable) => {
        this.props.updateNotesEditable(this.props.notesPage.notesPage.notes, editable)
    };

    render() {
        debugger
        return (
            <div className={s.notes}>
                <DescBody updateDesc={this.props.updateNotes} desc={this.props.notesPage.notesPage.notes} editable={this.props.notesPage.notesPage.editable}/>
                <DescMenu updateDescEditable={this.updateNotesEditable} editable={this.props.notesPage.notesPage.editable}/>
            </div>
        )
    }

}

export default Notes;