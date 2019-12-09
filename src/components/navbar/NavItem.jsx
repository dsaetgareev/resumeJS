import React from "react";

class NavItem extends React.Component{

    constructor(props) {
        super(props);
        this.value = this.props.value;
    }

    render() {
        return (
            <div>{this.value}</div>
        )


    }
}

export default NavItem;