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

    getItems(){
        switch(this.state.mode){
            case 0:
                return Store.getTodoItems();
            case 1:
                return Store.getPendingItems();
            case 2:
                return Store.getFinishItems();
            default:
                return ["error"];
        }
    },

    getName(){
        switch(this.state.mode){
            case 0:
                return 'To Do';
            case 1:
                return 'Pending';
            case 2:
                return 'Finish';
            default:
                return 'error';
        }
    },

    getInitialState(){
        return {
            mode: 0
        };
    },

    changeMode(newMode){
        this.setState({mode: newMode});
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
                {' '} <button onClick={() => this.changeMode(0)}><font size="4"> To Do </font></button>
                {' '} <button onClick={() => this.changeMode(1)}><font size="4"> Pending </font></button>
                {' '} <button onClick={() => this.changeMode(2)}><font size="4"> Finish </font></button>
                <List name={this.getName()} items={this.getItems()} />
            </div>
        );
    }
});

export default App;
