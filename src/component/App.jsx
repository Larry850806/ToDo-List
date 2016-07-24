import React from 'react';
import Immutable from 'immutable';
import List from './List';

var App = React.createClass({
    getInitialState(){
        return {
            nowText: '',
            todoItems: Immutable.List.of('123', 'a'),
            doingItems: Immutable.List.of('456', 'b'),
            finishItems: Immutable.List.of('789', 'c')
        };
    },
    updateNowText(e){
        this.setState({nowText: e.target.value});
    },
    addNewItem(){
        var text = this.state.nowText;
        var newTodoItems = this.state.todoItems.push(text);
        this.setState({todoItems: newTodoItems, nowText: ''});
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
        return (
            <div>
                <br />
                <input type="textbox" value={this.state.nowText} onChange={this.updateNowText} />
                <button style={{fontSize: '20px'}} onClick={this.addNewItem}>  new item </button><br />
                <br />
                <div style={{position: 'relative'}}>
                    <span style={{position: 'absolute', left: '20px'}}>
                        <List name="To Do" items={this.state.todoItems} onClick={this.todo2Doing} />
                    </span>
                    <span style={{position: 'absolute', left: '220px'}}>
                        <List name="Doing" items={this.state.doingItems} onClick={this.doing2Finish} />
                    </span>
                    <span style={{position: 'absolute', left: '420px'}}>
                        <List name="Finish" items={this.state.finishItems} onClick={this.finish2None} />
                    </span>
                </div>
            </div>
        );
    }
});

export default App;
