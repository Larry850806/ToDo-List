import React from 'react';
import {Button, ButtonToolbar} from 'react-bootstrap';
import Item from './Item';

var App = React.createClass({
    textOnChange: function(e){
        this.setState({nowText: e.target.value});    
    },
    addItem: function(e){
        var newItem = this.state.nowText;
        var newItems = this.state.items;
        newItems.push(newItem);
        this.setState({items: newItems, nowText: ''});
    },
    getInitialState: function(){
        return {
            items: [],
            nowText: ''
        };
    },
    render: function(){
        return (
            <div>
                <br />
                <input type="textbox" onChange={this.textOnChange} value={this.state.nowText} /><br /><br />
                <button onClick={this.addItem}><font size="4"> new item </font></button><br />
                {
                    this.state.items.map(function(item, index){
                        return <Item key={index} content={item} />;
                    })
                }
            </div>
        );
    }
});

export default App;

/*
 * 
 * <TextBox>
 * <Button>
 *
 * <Item1>
 * <Item2>
 *   ...
 *
 */
