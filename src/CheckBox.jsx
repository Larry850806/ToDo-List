import React from 'react';

var CheckBox = React.createClass({
    render: function(){
        var photoSize = this.props.photoSize.toString();
        return (
            <div>
                <input type="checkbox" value={this.props.id} onChange={this.props.onClick} /> {this.props.name}
                <br />
                <img src={'http://graph.facebook.com/' + this.props.id + '/picture?type=large&width=' + photoSize + '&height=' + photoSize} />
            </div>
        )
    }
});

export default CheckBox;
