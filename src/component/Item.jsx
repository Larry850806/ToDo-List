import React from 'react';

var Item = React.createClass({
    shouldComponentUpdate(newProps){
        if(this.props.content !== newProps.content) return true;
        if(this.props.onClick.toString() !== newProps.onClick.toString()) return true;
        return false;
    },
    render(){
        return (
            <div>
                <span><font size="6"> {this.props.content} </font></span>
                <button onClick={this.props.onClick}><font size="6"> v </font></button>
            </div>
        );
    }
});

export default Item;
