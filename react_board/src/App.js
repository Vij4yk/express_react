import React, { Component } from 'react';

import BoardForm from './App_BoardForm';
import BoardList from './App_BoardList';

class App extends Component {
    
    render() {
        return (
            <div>
                <h3>Express + React(Redux) Board I</h3>
                <BoardForm/>
                <BoardList/>
            </div>
        );
    }
}

export default App;