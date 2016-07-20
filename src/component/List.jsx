import React from 'react';
import Item from './Item';
import AppDispatcher from '../dispatcher/AppDispatcher';

var List = React.createClass({
    removeItem(index){
        AppDispatcher.dispatch({
            actionName: 'remove-item',
            index: index
        });
    },

    render(){
        return (
            <div>
                <font size="10"> {this.props.name} </font>
                {
                    this.props.items.map(function(item, i){
                        return <Item onClick={() => this.removeItem(i)} key={i} content={item} />
                    }, this)
                }
            </div>
        );
    }
});

export default List;