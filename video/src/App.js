import React, { Component } from 'react';
import Request from 'superagent';
import _ from 'lodash';
import Addtodo from './components/addtodo';
import EditTodo from './components/editTodo';
var chrono = require('chrono-node');
var moment = require('moment');

class App extends Component {
 constructor(props){
   super(props);
   this.state={
      lists : '',
      id : 0
   };
   this.getinput = this.getinput.bind(this);
   this.stateUpdate = this.stateUpdate.bind(this)
   this.deleteItem =this.deleteItem.bind(this);
   this.getnewInput =this.getnewInput.bind(this);
 }
 getinput(input){
   console.log(chrono.parseDate(input));
   var url = "http://localhost:3000/lists";
   Request.post(url)
   .send({ id: this.id , todoitem: input, tododate: chrono.parseDate(input) })
   .then(this.stateUpdate)

 }
 componentWillMount(){
   var url = "http://localhost:3000/lists";
   Request.get(url).then((res)=>{
     this.setState({
       lists:res.body
     });
   });
 }
 stateUpdate(){
   var url = "http://localhost:3000/lists";
   Request.get(url).then((res)=>{
     this.setState({
       lists:res.body
     });
   });
 }
 deleteItem(key){
    console.log(key);
    var url = `http://localhost:3000/lists/${key}`;
    Request.del(url)
      .then(this.stateUpdate)
 }
 getnewInput(text1,text2){
    var url = `http://localhost:3000/lists/?todoitem=${text1}`;
    Request.put(url)
      .send({todoitem: text2})
      .then(this.stateUpdate)
 }
 render() {
   var lists = _.map(this.state.lists, (item) =>{
     return <li className="list-group-item">{item.id}
     <button type="button" className="btn btn-danger" onClick={() => {this.deleteItem(item.id)}} 
     type="submit">Delete</button><b>{item.todoitem}</b>,<br/><small class="text-muted">
     Due by: {moment(item.tododate).format('LLLL')}</small></li>
   });
   return (
     <div className="main">
       <Addtodo getinput={this.getinput} />
       <hr/>
       <EditTodo getnewInput={this.getnewInput} />
       <hr/>
       <ul className="list-group">{lists}</ul>
     </div>
   );
 }
}

export default App;
