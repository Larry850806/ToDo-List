import React from 'react';
import CheckBox from './CheckBox';

var CheckList = React.createClass({
    checkBoxOnChange: function(e){
        var id = e.target.value;
        var isChecked = e.target.checked;

        var newIds = this.state.selectedID;
        if(isChecked){
            newIds.push(id);
        } else {
            var index = this.state.selectedID.indexOf(id);
            newIds.splice(index, 1);
        }

        this.props.onChange(newIds);
        this.setState({ selectedID: newIds });
        // console.log(this.state.selectedID);
    },

    getInitialState: function(){
        return { selectedID: [] }
    },

    render: function(){
        var infos = this.props.infos;
        var photoSize = 125;
        var checkBoxWidth = photoSize + 40;
        var checkBoxHeight = photoSize + 35;
        var amountOfPhotoInLine = 5;
        var amountOfLine = Math.ceil(infos.length / amountOfPhotoInLine);
        var style = {
            position: 'relative',
            height: (amountOfLine * checkBoxHeight - 10).toString() + 'px'
        };
        return (
            <div style={style}>
                {infos.map(function(info, index){
                    var topPad = (Math.floor(index/amountOfPhotoInLine) * checkBoxHeight).toString() + 'px';
                    var leftPad = (index % amountOfPhotoInLine * checkBoxWidth).toString() + 'px';
                    return (
                        <div key={info.id} style={{position: 'absolute', top: topPad, left: leftPad}}> 
                            <CheckBox id={info.id} name={info.name} photoSize={photoSize} onClick={this.checkBoxOnChange} />
                        </div>
                    )
                }, this)}
            </div>
        );
    }
});

export default CheckList;
