/**
 * Created by h on 2016/12/30.
 */
import React from 'react';
var arr=[{name:'小明111',content:'nihao a ',id:1},{name:'小明',content:'nihao11 a ',id:2}];
var Message=React.createClass({
    getInitialState:function () {
      return {message:arr}
    },
    add:function (ev) {
        var inf=this.refs.msg.value;
        var passager={name:'',content:inf,id:Math.random()*100}
        this.state.message.push(passager);
        this.refs.msg.value='';
        this.setState({
            message:this.state.message
        });
    },
    delete:function (i) {
        this.state.message=this.state.message.filter(function (item) {
            return i!=item.id;
        });
        this.setState({mesage:this.state.message})
    },
   render:function () {
        var arr=this.state.message;
        var _this=this;
       return (<div className="panel panel-default">
                <div className="panel-heading">{this.props.head}</div>
                <div className="panel-body">
                    <ul className="list-group">
                        {arr.map(function (item,index) {
                            return <li className="list-group-item" key={index}>{item.name}说{item.content}<span onClick={_this.delete.bind(_this,item.id)} className="btn btn-danger pull-right btn-xs">删除</span></li>
                        })}
                    </ul>
                </div>
                <div className="panel-footer">
                    <div className="row">
                        <div className="col-md-10">
                            <div>
                                <input ref="msg" className="form-control" type="text"/>
                            </div>
                        </div>
                        <div className="col-md-2"><button className="btn btn-success" onClick={this.add}>留言</button></div>
                    </div>
                </div>
       </div>)
   }
});
export {Message};
