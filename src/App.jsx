import React from 'react';
import $ from 'jquery';
import CheckList from './CheckList';
import Title from './Title';

var url = 'http://52.27.9.64:54321/';

var App = React.createClass({
    listOnChange: function(newSelectedList){
        this.setState({ selectedID: newSelectedList });
    },

    sendToServer: function(msg){
        var data = {
            msg: msg,
            ids: this.state.selectedID
        };
        $.post(url, data, function(res){
            if(res.msg === 'success'){
                alert('送出成功');
            } else {
                // error
                alert(JSON.stringify(res));
            }
        }, "json");
    },

    getInitialState: function(){
        return {
            infos: [],
            selectedID: []
        }
    },

    componentWillMount: function(){
        $.get(url, function(infos){
            this.setState({infos: infos});
            $('body').show();
        }.bind(this), "json");
    },

    render: function(){
        return (
            <div>
                <Title content='發送給誰' />
                <CheckList infos={this.state.infos} onChange={this.listOnChange} />
                <Title content='訊息內容' />
                <textarea id="textarea" rows="4" cols="50" style={{fontSize: '20px'}}></textarea>
                <br />
                <input id="send" type="button" value="送出" style={{fontSize: '30px'}} onClick={function(){this.sendToServer(textarea.value)}.bind(this)} />
            </div>
        );
    }
});

export default App;
