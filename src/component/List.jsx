import React from 'react';
import Item from './Item';

var List = React.createClass({
    render(){
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