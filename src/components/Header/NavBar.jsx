import React, {Component} from 'react';
import { DARK_GREEN, WHITE } from '../../radiumConfig/constants';
import Button from '../Button/Button';

const nav = {
    width: '100%',
    backgroundColor: DARK_GREEN,
    padding: '12px 24px',
    display: "flex",
    top: 0,
    zIndex: 999,
    justifyContent: "space-between",
    boxSizing: "border-box"
}

const title = {
    color: WHITE,
    display: 'flex',
    alignItems: 'center',
    fontSize: '24px',
    cursor: 'pointer'
}


export default class NavBar extends Component {
    handleHomeClick = () => {
        window.location.href = "/";
    }

    handlePostClick = () => {
        window.location.href = "/post";
    }

    render() {
        return (
            <div style={nav}>
                <div style={title} onClick={this.handleHomeClick}>
                    Twitter Clone
                </div>
                <div>
                    <Button label='home' onClick={this.handleHomeClick}></Button>
                    <Button label='post' onClick={this.handlePostClick}></Button>
                </div>
            </div>
        )
    }
}