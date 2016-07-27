import React from 'react';
import Immutable from 'immutable';
import List from './List';
import AppBar from 'material-ui/lib/app-bar';
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';

var App = React.createClass({
    getInitialState(){
        return {
            nowText: '',
            placeHolder: 'New Item',
            todoItems: Immutable.List.of(),
            doingItems: Immutable.List.of(),
            finishItems: Immutable.List.of()
        };
    },
    updateNowText(e){
        this.setState({nowText: e.target.value});
    },
    addNewItem(){
        var text = this.state.nowText;
        if(!text){
            this.setState({placeHolder: '你是白痴喔沒打字'});
            return;
        }
        var newTodoItems = this.state.todoItems.push(text);
        this.setState({todoItems: newTodoItems, nowText: '', placeHolder: 'New Item'});
    },
    todo2Doing(index){
        var item = this.state.todoItems.get(index);
        var newTodoItems = this.state.todoItems.delete(index);
        var newDoingItems = this.state.doingItems.push(item);
        this.setState({todoItems: newTodoItems, doingItems: newDoingItems});
    },
    doing2Finish(index){
        var item = this.state.doingItems.get(index);
        var newDoingItems = this.state.doingItems.delete(index);
        var newFinishItems = this.state.finishItems.push(item);
        this.setState({doingItems: newDoingItems, finishItems: newFinishItems});
    },
    finish2None(index){
        var newFinishItems = this.state.finishItems.delete(index);
        this.setState({finishItems: newFinishItems});
    },
    render(){
        var listStyle = {
            verticalAlign: 'top',
            display: 'inline-block',
            marginTop: '5px',
            marginLeft: '60px',
            marginRight: '60px'
        };

        return (
            <div style={{textAlign: 'center'}}>
                <AppBar title="To Do List Demo" />
                <div style={{marginTop: '20px'}}>
                    <TextField value={this.state.nowText} onChange={this.updateNowText} hintText={this.state.placeHolder} />
                    <RaisedButton label="Add Item" secondary={true} onMouseDown={this.addNewItem} style={{margin: '12px'}}/>
                </div>
                <div>
                    <div style={listStyle}>
                        <List name="To Do" items={this.state.todoItems} onClick={this.todo2Doing} />
                    </div>
                    <div style={listStyle}>
                        <List name="Doing" items={this.state.doingItems} onClick={this.doing2Finish} />
                    </div>
                    <div style={listStyle}>
                        <List name="Finish" items={this.state.finishItems} onClick={this.finish2None} />
                    </div>
                </div>
            </div>
        );
    }
});

export default App;
