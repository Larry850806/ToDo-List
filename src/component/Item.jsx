import React from 'react';

var Item = React.createClass({
    render: function(){
        return (<div><font size="6"> {this.props.content} </font></div>);
    }
});

export default Item;
