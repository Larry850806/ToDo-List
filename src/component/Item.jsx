import React from 'react';

var Item = React.createClass({
    render: function(){
        return (
            <div>
                <span><font size="6"> {this.props.content} </font></span>
                <button onClick={this.props.onClick}><font size="6"> V </font></button>
            </div>
        );
    }
});

export default Item;
