import React from 'react'
import PropTypes from 'prop-types'
import { GRAY } from '../../radiumConfig/constants';

const propTypes = {
    children: PropTypes.node,
    title: PropTypes.string,
    body: PropTypes.string,
    userId: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
}

const styles = {
    li:{
        borderBottom: '1px solid rgba(0,0,0,0.1)'
    },
    wrapper:{
        padding: '10px 30px 60px'
    },
    title: {
        margin: '8px 0'
    },
    body: {
        color: 'rgba(0,0,0,0.5)'
    }, 
    loadingShort: {
        width: '50%',
        height: '25px',
        backgroundColor: GRAY,
        margin: '20px 0'

    },
    loadingFull: {
        width: '100%',
        height: '25px',
        backgroundColor: GRAY,
        margin: '8px 0'
    },
    loadingWide: {
        width: '100%',
        height: '70px',
        backgroundColor: GRAY
    }
}

const ListItem = (props) => {

    return (
        props.loading ? 
            <li style={styles.li}>
                <div style={styles.wrapper}>
                    <div style={styles.loadingShort} />
                    <div style={styles.loadingFull} />
                    <div style={styles.loadingWide} />
                </div>
            </li> :
            <li style={styles.li}>
                <div style={styles.wrapper}>
                    <h5>User: {props.userId}</h5>
                    <div style={styles.title}>{props.title}</div>
                    <div style={styles.body}>{props.body}</div>
                    {props.children}
                </div>
            </li>  
    )
}

ListItem.propTypes = propTypes

export default ListItem