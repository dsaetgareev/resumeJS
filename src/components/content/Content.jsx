import React from 'react';
import s from './Content.module.css'
import Description from "./description/Description";
import Desktop from "./desktop/Desktop";

class Content extends React.Component{

    render() {
        return (
            <div className={s.content}>
                <Desktop/>
                <Description/>
            </div>
        )
    }
}

export default Content;