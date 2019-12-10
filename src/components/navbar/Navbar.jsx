import React from 'react';
import s from './Navbar.module.css'
import NavItem from "./NavItem";
import NavMenu from "./NavMenu";

class Navbar extends React.Component{

    constructor(props) {
        super(props);

    }

    render() {
        debugger
        this.items = this.props.navPages.map((item) => <NavItem id={item.id} value={item.name}/>);
        return (
            <nav className={s.sidebar}>
                {this.items}
            </nav>
        )
    }

}

export default Navbar;