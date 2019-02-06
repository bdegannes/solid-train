import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { MEDIUM_GREEN, DARK_GREEN } from '../../radiumConfig/constants';

const styles = {
    error: {
        color: 'red',
        fontSize: '14px',
        margin: '12px 0',
        textAlign: 'right'
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        margin: '0 0 8px'
    },
    label: {
        fontSize: '14px',
        color: MEDIUM_GREEN,
        margin: '12px 0',
    },
    textarea: {
        border: `4px solid ${DARK_GREEN}`,
        borderRadius: '2px',
        height: '60px',
        padding: '8px 16px',
        fontSize: '18px',
    }
}
class MultiLineInput extends Component {
    static defaultProps = {
        onChange() { }
    }
    
    static propTypes = {
        onChange: PropTypes.func,
        name: PropTypes.string, 
        type: PropTypes.string,
        label: PropTypes.string, 
        value: PropTypes.string,
    }

    state = {
        errorMessage: ''
    }
    
    onBlur = () => {
        const {value} = this.props
        if (value.length < 10 || value.length > 140) {
            this.setState({errorMessage: 'Post message length is invalid'})
        } else {
            this.setState({ errorMessage: '' })
        }
    }

    render() {
        const { name, type, label, onChange, value } = this.props;

        return (
            <div style={styles.wrapper}>
                <label 
                    style={styles.label}
                    htmlFor='name'
                >
                    {label}
                </label>
                <textarea
                    style={styles.textarea}
                    name={name}
                    type={type}
                    onChange={onChange}
                    onBlur={this.onBlur}
                    value={value}        
                    rows={2}    
                    cols="60"   
                    maxLength="140" 
                />
                <div style={styles.error}>{this.state.errorMessage}</div>
            </div>
        )
    }
}

export default MultiLineInput;