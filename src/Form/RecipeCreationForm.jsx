import React from 'react';

export default class RecipeCreationForm extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
          name: '',
          description: '',
          ingredients: [{name: ''}]
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({[event.target.name]: event.target.value});
    }
  
    handleSubmit(event) {
      let returnString = 'A name was submitted: ' + this.state.name + '\n' + 
                        'Description: ' + this.state.description;
      alert(returnString);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <div>
                <label>
                    Name:
                    <input 
                        type="text" 
                        name="name" 
                        value={this.state.name} 
                        onChange={this.handleChange} 
                    />
                </label>
            </div>
            <div>
                <label>
                    Description:
                    <textarea 
                        name="description" 
                        rows="10" 
                        cols="30" 
                        value={this.state.description} 
                        onChange={this.handleChange} 
                    />
                </label>
            </div>
            <div>
                <input type="submit" value="Submit" />
            </div>
        </form>
      );
    }
  }
