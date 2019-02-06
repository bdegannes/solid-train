import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MEDIUM_GREEN, WHITE, GRAY } from '../../radiumConfig/constants';

const buttonStyles = (props) => ({
    padding: '10px 20px',
    margin: '0 8px',
    backgroundColor: !props.disabled ? MEDIUM_GREEN : GRAY,
    border: 'none',
    borderRadius: '2px',
    fontSize: '12px',
    textTransform: 'uppercase',
    color: WHITE
})

class Button extends Component {
    static defaultProps = {
        onClick() {},
        label: 'button',
        type: 'button'
    }

    static propTypes = {
        onClick: PropTypes.func,
        label: PropTypes.string,
        type: PropTypes.string,
    }

    handleClick = (event) => {
        this.props.onClick(event);
    }

    render() {
        const buttonStyle = buttonStyles(this.props);

        return (
            <button 
                disabled={this.props.disabled}
                type={this.props.type}
                onClick={this.handleClick}
                style={buttonStyle}
            >
                {this.props.label}
            </button>
        );
    }
}

export default Button;