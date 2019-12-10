import React from 'react';
import {connect} from "react-redux";
import Navbar from "./Navbar";

let mapStateToProps = (state) => {
    let navs = state.pages.map((item) => {
        return item.navPage.navItem
    })
    return {
        navPages: navs,
    }
};
let mapDispatchToProps = (dispatch) => {

};

let NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);

export default NavbarContainer;