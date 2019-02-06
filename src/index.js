import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import { StyleRoot, Style } from 'radium';

import GlobalRules from './radiumConfig/Style';
import Reset from './radiumConfig/Reset';

import NavBar from './components/Header/NavBar';
import Home from './containers/Home';
import Post from './containers/Post';



const styles = ReactDOMServer.renderToStaticMarkup(<Reset />);
document.head.insertAdjacentHTML('beforeEnd', styles);

class App extends Component {
   renderPage = () => {
        const location = window.location.pathname
        switch(location) {
            case '/':
                return <Home/>
            case '/post':
                return <Post/>
            default: 
                return <Home/>
        }
    }

    render () {

        return(
            <StyleRoot>
                <Style rules={GlobalRules} />
                <div>
                    <NavBar />
                    {this.renderPage()}
                </div>
            </StyleRoot>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);

module.hot.accept();