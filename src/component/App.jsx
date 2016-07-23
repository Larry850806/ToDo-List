import React from 'react';
import List from './List';

var App = React.createClass({
    getInitialState(){
        return {
            nowText: '',
            todoItems: [123, 'a'],
            doingItems: [456, 'b'],
            finishItems: [789, 'c']
        };
    },
    updateNowText(e){
        this.setState({nowText: e.target.value});
    },
    addNewItem(){
        var text = this.state.nowText;
        this.setState({nowText: ''});
        var newTodoItems = this.state.todoItems;
        newTodoItems.push(text);
        this.setState({todoItems: newTodoItems});
    },
    todo2Doing(index){
        var newTodoItems = this.state.todoItems;
        var newDoingItems = this.state.doingItems;
        var item = this.state.todoItems[index];
        newTodoItems.splice(index, 1);
        newDoingItems.push(item);
        this.setState({todoItems: newTodoItems, doingItems: newDoingItems});
    },
    doing2Finish(index){
        var newDoingItems = this.state.doingItems;
        var newFinishItems = this.state.finishItems;
        var item = this.state.doingItems[index];
        newDoingItems.splice(index, 1);
        newFinishItems.push(item);
        this.setState({doingItems: newDoingItems, finishItems: newFinishItems});
    },
    finish2None(index){
        var newFinishItems = this.state.finishItems;
        newFinishItems.splice(index, 1);
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
