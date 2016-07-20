import React from 'react';
import List from './List';
import Store from '../store/Store';
import AppDispatcher from '../dispatcher/AppDispatcher';

var App = React.createClass({
    addItem(){
        var nowText = this.refs.nowText.value;
        AppDispatcher.dispatch({
            actionName: 'new-item',
            newItem: nowText
        });
        this.refs.nowText.value = '';
    },

    componentDidMount(){
        Store.on('change', () => this.forceUpdate());
    },

    render(){
        return (
            <div>
                <br />
                <input ref="nowText" type="textbox" />
                {' '} <button onClick={this.addItem}><font size="4"> new item </font></button><br />
                <br />
                <List items={Store.getTodoItems()} />
            </div>
        );
    }
});

export default App;
