import React from 'react';
import s from './Navbar.module.css'
import NavItem from "./NavItem";
import NavMenu from "./NavMenu";

class Navbar extends React.Component{

    constructor(props) {
        super(props);
        this.items = this.props.navItems.navItems.map((item) => <NavItem id={item.id} value={item.name}/>);
    }

    render() {
        return (
            <nav className={s.sidebar}>
                <NavMenu/>
                {this.items}
            </nav>
        )
    }

}

export default Navbar;