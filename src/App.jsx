import React from 'react';

var Item = React.createClass({
    render: function(){
        return (<div><font size="6"> {this.props.content} </font></div>);
    }
});

var App = React.createClass({
    render: function(){
        return (
            <div>
                <Item content="onee" />
                <Item content="two" />
            </div>
        );
    }
});

export default App;
