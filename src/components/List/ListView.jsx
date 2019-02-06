import React from 'react'
import PropTypes from  'prop-types'

const propTypes = {
    children: PropTypes.node,
}

const styles = {
    listStyle: 'none',
    padding: '10px 0'
}

const ListView = (props) => {
    return (
        <ul style={styles}>
            {props.children}
        </ul>
    )
}

ListView.propTypes = propTypes

export default ListView