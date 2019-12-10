import React from 'react';
import {connect} from "react-redux";
import Navbar from "./Navbar";
import {updateDesktopActionCreator} from "../../store/reducers/desktop/DesktopReducer";

let mapStateToProps = (state) => {
    let navs = state.pages.map((item) => {
        return item.navPage.navItem
    })
    return {
        navPages: navs,
        state: state
    }
};
let mapDispatchToProps = (dispatch) => {

    return {
        toDesktop: (state) => {
            debugger
            dispatch(updateDesktopActionCreator(state))
        }
    }



};

let NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);

export default NavbarContainer;