import React from 'react';
import s from './Navbar.module.css'
import NavItem from "./NavItem";
import NavMenu from "./NavMenu";

class Navbar extends React.Component{

    constructor(props) {
        super(props);

    }

    toDesktop = (id) => {
        debugger;
        this.props.toDesktop(this.getPageState(id, this.props.state.pages))
    };

    getPageState = (id, pages) => {
        pages.forEach((item) => {
            debugger
            if (item.desktopPage.id + '' === id) {
                return item;
            }
        });
    };

    render() {
        debugger
        this.items = this.props.navPages.map((item) => <NavItem id={item.id} value={item.name} toDesktop={this.toDesktop}/>);
        return (
            <nav className={s.sidebar}>
                {this.items}
            </nav>
        )
    }

}

export default Navbar;