import React from 'react';
import PropTypes from 'prop-types'
import Button from '../Button/Button';

const propTypes = {
    message: PropTypes.string,
    onClick: PropTypes.func,
}

const styles = {
    width: '580px',
    height: '90vh',
    fontSize: '38px',
    margin: '16px auto',
    color: 'rgba(0,0,0,0.2)',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '40px'
}

const Error = (props) => {
    return (
        <div style={styles}>
            {props.message}
            <div style={{ margin: '20px' }}>
                <Button label='try again' onClick={props.onClick} />
            </div>
        </div>
    )
}

Error.propTypes = propTypes

export default Error