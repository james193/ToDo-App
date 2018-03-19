import React from 'react';
export default class EditTodo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text1 : '',
            text2 : ''
        }
        //this.handleInput = this.handleInput.bind(this);
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    /*handleInput()
    {
        let input1 = document.getElementById("todoinput1").value;
        let input2 = document.getElementById("todoinput2").value;
        if(input1!='' && input2!='')
            this.props.getnewInput(input1,input2);
        else
            alert('Enter text and id');
    }*/
    handleChange1(event) {
        this.setState({text1: event.target.value}); 
    }
    handleChange2(event) {
        this.setState({text2: event.target.value});  
    }
    handleSubmit() {
        let input1 = this.state.text1;
        let input2 = this.state.text2;
        if(input1!='' && input2!='')
            this.props.getnewInput(input1,input2);
        else
            alert('Enter text');
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    <input type="text" value={this.state.text1} onChange={this.handleChange1} placeholder="Enter the old text"/>
                    <input type="text" value={this.state.text2} onChange={this.handleChange2} placeholder="Enter the new text"/>
                </label>
                <input type="submit" className="btn btn-warning" value="Edit"/>
            </form>
            /*<div>
                <input id="todoinput1" type="text" placeholder="Enter the new text" />
                <input id="todoinput2" type="text" placeholder="id" />
                <button onClick={this.handleInput} className="btn btn-warning">Edit!</button>
            </div>*/
        );
    }
}