import React from 'react';
import s from './Header.module.css'

class Header extends React.Component{



    render = () => {
        return (
            <header className={s.header}>
                <button>Сохранить</button>
            </header>
        )
    }

}

export default Header;