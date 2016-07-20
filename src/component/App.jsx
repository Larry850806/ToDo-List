import React from 'react';
import List from './List';
import Store from '../store/Store';
import AppDispatcher from '../dispatcher/AppDispatcher';

var App = React.createClass({
    addItem: function(){
        AppDispatcher.dispatch({
            actionName: 'new-item',
            newItem: this.state.nowText
        });
        this.setState({nowText: ''});
    },

    textOnChange: function(e){
        this.setState({nowText: e.target.value});    
    },

    getInitialState: function(){
        return {
            nowText: ''
        };
    },

    componentDidMount(){
        Store.on('change', () => this.forceUpdate());
    },

    render: function(){
        return (
            <div>
                <br />
                <input type="textbox" onChange={this.textOnChange} value={this.state.nowText} />
                {' '} <button onClick={this.addItem}><font size="4"> new item </font></button><br />
                <br />
                <List items={Store.getTodoItems()} />
            </div>
        );
    }
});

export default App;
