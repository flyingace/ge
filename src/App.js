import React, {Component} from 'react';
import {render} from 'react-dom';

import './App.scss';
import HeaderContainer from "./containers/HeaderContainer";
import Left from "./components/Left/Left";
import Main from "./components/Main/Main";
import Right from "./components/Right/Right";
import ContentWindow from "./components/ContentWindow/ContentWindow";

class App extends Component {
    render() {
        return (
            <div className="App">
                <HeaderContainer />
                <ContentWindow>
                    <Main/>
                    <Left/>
                    <Right/>
                </ContentWindow>
            </div>
        );
    }
}

export default App;
