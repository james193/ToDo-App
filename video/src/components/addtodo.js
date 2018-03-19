import React from 'react';
export default class Addtodo extends React.Component{
    constructor(props){
        super(props);
        this.state={
            texts : ''
        }
         this.handleSubmit = this.handleSubmit.bind(this);
         this.handleChange = this.handleChange.bind(this);
        //this.handleInput = this.handleInput.bind(this);
    }
    handleChange(event) {
        this.setState({texts: event.target.value}); 
    }
    handleSubmit(event) {
        console.log('this is text :'+this.state.texts);
        let input = this.state.texts;
         if(input!=='')
             this.props.getinput(input);
         else
             alert('Enter text');
         this.setState({texts: ''}); 
         event.preventDefault();
    }
     /*handleInput()
     {
         let input = document.getElementById("todoinput").value;
         if(input!=='')
             this.props.getinput(input);
         else
             alert('Enter text');
     }*/
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                  Enter your task:<br/>
                  <input type="text" value={this.state.texts} onChange={this.handleChange} placeholder="Enter the text"/>
                </label>
                <input type="submit" className="btn btn-success" value="Add"/>
            </form>
            /*<form>
                <label>
                  Enter your task:<br/>
                  <input type="text" id='todoinput' placeholder="Enter the text"/>
                </label>
                <button type="button" class="btn btn-success" onClick={this.handleInput}>Add!</button>
            </form>*/
        );
    }
}
