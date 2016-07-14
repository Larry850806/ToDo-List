import React from 'react';

var Title = React.createClass({
    render: function(){
        return <h2> {this.props.content} </h2>
    }
});

export default Title;
