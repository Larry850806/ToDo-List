import React from 'react';
import Immutable from 'immutable';
import Item from './Item';

var List = React.createClass({
    shouldComponentUpdate(newProps){
        if(this.props.name !== newProps.name) return true;
        if(this.props.onClick.toString() !== newProps.onClick.toString()) return true;
        if(!Immutable.is(this.props.items, newProps.items)) return true;
        return false;
    },
    render(){
        console.log('render list');
        return (
            <div>
                <font size="10"> {this.props.name} </font>
                {
                    this.props.items.map(function(item, i){
                        return <Item key={i} content={item} onClick={() => this.props.onClick(i)} />
                    }, this)
                }
            </div>
        );
    }
});

export default List;