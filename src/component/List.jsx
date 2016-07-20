import React from 'react';
import Item from './Item';

var List = React.createClass({
    render(){
        return (
            <div>
                <font size="10"> {this.props.name} </font>
                {
                    this.props.items.map(function(item, index){
                        return <Item key={index} content={item} />;
                    })
                }
            </div>
        );
    }
});

export default List;