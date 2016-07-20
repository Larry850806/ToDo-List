import React from 'react';
import Item from './Item';

var List = React.createClass({
    render: function(){
        return (
            <div>
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