import React from 'react';
import s from './Interactiv.module.css'
import Notes from "./notes/Notes";
import Screen from "./screen/Screen";


class Interactiv extends React.Component{

    render() {
        return (
            <div className={s.interactive}>
                <Screen/>
                <Notes/>
            </div>

        )
    }

}

export default Interactiv;