import React from 'react';
import Immutable from 'immutable';
import Badge from 'material-ui/lib/badge';
import Item from './Item';

var List = React.createClass({
    shouldComponentUpdate(newProps){
        if(this.props.name !== newProps.name) return true;
        if(this.props.onClick.toString() !== newProps.onClick.toString()) return true;
        if(!Immutable.is(this.props.items, newProps.items)) return true;
        return false;
    },
    render(){
        var badgeVisibility = this.props.items.size == 0 ? 'hidden' : 'visible';
        return (
            <div>
                <div style={{position: 'relative', left: '25px'}}>
                    <font size="10"> {this.props.name} </font>
                    <span style={{position: 'relative', left: '-30px', top: '-15px', visibility: badgeVisibility}}>
                        <Badge badgeContent={this.props.items.size} secondary={true}></Badge>
                    </span>
                </div>
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