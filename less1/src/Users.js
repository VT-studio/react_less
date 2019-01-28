import React, { Component } from 'react';
import NamesList from "./App";

class Users extends Component{

    state = {
        user: this.props.user,
        check: false
    }



    clickCeck = (e) => {
        this.setState({
            check: e.target.checked
        })
    }


    render = () => {

        const { user, check } = this.state;

        return (
            <div
                className={ check ? 'usr_item arrived' : 'usr_item'}
            >
            { user.name }
            <input type="checkbox" onChange={this.clickCeck}/>
            </div>

        )

    }

}
export default Users;