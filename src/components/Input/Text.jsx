import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { MEDIUM_GREEN, DARK_GREEN } from '../../radiumConfig/constants';

const styles = {
    wrapper : {
        display: 'flex',
        flexDirection: 'column',
        margin: '0 0 8px'
    },
    label: {
        fontSize: '14px',
        color: MEDIUM_GREEN,
        margin: '12px 0',
    },
    input: {
        border: `4px solid ${DARK_GREEN}`,
        borderRadius: '2px',
        height: '30px',
        padding: '4px 16px',
        fontSize: '18px',
    }
}
class TextInput extends Component {
    static defaultProps = {
        onChange() {}
    }

    static propTypes = {
        onChange: PropTypes.func,
        name: PropTypes.string,
        type: PropTypes.string,
        label: PropTypes.string,
        value: PropTypes.string,
    }

    render()  {
        const { name, type, label, onChange, value } = this.props;

        return (
            <div style={styles.wrapper}>
                <label 
                    style={styles.label}
                    htmlFor='name'
                >
                    {label}
                </label>
                <input 
                    style={styles.input}
                    name={name}
                    type={type}
                    onChange={onChange}
                    defaultValue={value}
                />
            </div>
        )
    }
}

export default TextInput;