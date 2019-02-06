import React, { Component, Fragment } from 'react'
import MultiLineInput from '../components/Input/MultiLineInput';
import TextInput from '../components/Input/Text';
import { WHITE } from '../radiumConfig/constants';
import Button from '../components/Button/Button';
import ListView from '../components/List/ListView';
import ListItem from '../components/List/ListItem';
import Error from '../components/Error/Error';

const styles = {
    wrapper: {
        width: '580px',
        backgroundColor: WHITE,
        margin: '16px auto',
        borderRadius: '2px',
        padding: '20px 32px',
    },
    inputFirst: {
        width: '70%'
    }
}

class Post extends Component {
    state = {
        userId: '',
        title: '',
        post: '', 
        success: '',
        failure: '',
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    postTweet = (url = '', data = {}) => {
        return fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: data,
        })
        .then(response => response.json());
    }

    isValid = () => {
        if (this.state.post.length < 10 || this.state.post.length > 140) {
            return false
        }
        return (this.state.userId && this.state.title && this.state.post)
    }

    handleErrorClick = (event) => {
        this.handleSubmit(event)
    }

    handleSubmit = (event) => {
        event.preventDefault()

        const url = "https://jsonplaceholder.typicode.com/posts"
        const body = JSON.stringify({
            userId: this.state.userId,
            title: this.state.title,
            post: this.state.post
        })

        this.postTweet(url, body)
            .then(data => {
                this.setState({
                    success: true,
                    error: ''
                });
            })
            .catch((error) => {
                this.setState({
                    success: '',
                    error: 'There was a problem posting your tweet, try again'
                });
            })
    }

    renderForm = () => {
        if (!this.state.success && !this.state.error) {
            return (
                <div style={styles.wrapper}>
                    <h4>Create a post</h4>
                    <form onSubmit={this.handleSubmit}>
                        <div style={styles.inputFirst}>
                            <TextInput
                                label='Username'
                                name='userId'
                                type='text'
                                value={this.state.userId}
                                onChange={this.handleOnChange}
                            />
                        </div>
                        <TextInput
                            label='Title'
                            name='title'
                            type='text'
                            value={this.state.title}
                            onChange={this.handleOnChange}
                        />
                        <MultiLineInput
                            label='Post'
                            name='post'
                            value={this.state.post}
                            onChange={this.handleOnChange}
                        />
                       <Button disabled={!this.isValid()} type="submit" label="submit" />
                    </form>
                </div>
            ) 
        }
    }

    render() {
        return (
            <Fragment>
                {this.renderForm()}
                {
                    this.state.success && 
                    <div style={styles.wrapper}>
                        <ListView>
                            <h3>Post success</h3> 
                            <ListItem
                                userId={this.state.userId}
                                title={this.state.title}
                                body={this.state.post}
                            />
                        </ListView>
                    </div>
                }
                {
                    this.state.error &&
                        <Error message={this.state.error} onClick={this.handleErrorClick} />
                }
            </Fragment>
        )
    }
}

export default Post;