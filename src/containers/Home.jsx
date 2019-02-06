import React, { Component, Fragment } from 'react';
import { WHITE } from '../radiumConfig/constants';
import ListItem from '../components/List/ListItem';
import ListView from '../components/List/ListView';
import Error from '../components/Error/Error';

const styles = {
    wrapper: {
        width: '580px',
        backgroundColor: WHITE,
        margin: '16px auto',
        borderRadius: '2px',
    },
    error: {
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
};

class Home extends Component {
    state = {
        list: null,
        error: ''
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = () => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(data => this.setState({ 
                    list: data,
                    error: '' 
            }))
            .catch((error) => {
                this.setState({ error: 'Oops, there seems to be a problem loading tweets.' })
            })
    }

    handleClick = () => {
        this.fetchData();
    }

    renderLoadList = () => {
        return [{}, {}, {}, {}, {}].map((_,idx) => {
           return (
               <ListItem
                    key={idx}
                    loading={true}
                />
            );
        });
    }

    renderList = () => {
        return this.state.list.map((item, index) => {
            return (
                <ListItem
                    key={`${item.userId}__${index}`}
                    userId={item.userId}
                    title={item.title}
                    body={item.body}
                />
            );
        });      
    }

    render() {
        return(
            <Fragment>
                {
                    !this.state.error && 
                        <div style={styles.wrapper}>
                            <ListView>
                                {this.state.list ? this.renderList() : this.renderLoadList()}
                            </ListView>
                        </div>
                }
                {
                    this.state.error && 
                        <Error message={this.state.error} onClick={this.handleClick}/>
                }
            </Fragment>
        );
    }
}

export default Home