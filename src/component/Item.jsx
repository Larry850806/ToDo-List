import React from 'react';
import ListItem from 'material-ui/lib/lists/list-item';

var Item = React.createClass({
    shouldComponentUpdate(newProps){
        if(this.props.content !== newProps.content) return true;
        if(this.props.onClick.toString() !== newProps.onClick.toString()) return true;
        return false;
    },
    render(){
        return (
            <div onClick={this.props.onClick}>
                <ListItem primaryText={this.props.content} style={{fontSize: '20px'}}/>
            </div>
        );
    }
});

export default Item;
