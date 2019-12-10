import React from 'react';
import {connect} from "react-redux";
import Navbar from "./Navbar";

let mapStateToProps = (state) => {
    return {
        navPage: state.navPage,
    }
};
let mapDispatchToProps = (dispatch) => {

};

let NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);

export default NavbarContainer;