import React from 'react';
import RecipeConfig from "./RecipeConfig";
import IngredientCreateForm from './IngredientCreateForm';

const recipeConfig = new RecipeConfig();
const textAreaConfig = recipeConfig.getTextAreaConfig();

export default class RecipeCreateForm extends React.Component {

  /**
   * RecipeCreateForm constructor.
   * 
   * @public
   */
  constructor() {
    super();
    this.state = {
      name: '',
      description: '',
      ingredients: [{
        name: '',
        description: '',
        amount: '',
        measurementType: ''
      }],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

 /** 
  * Handle recipe change events.
  * 
  * @param {event}
  * @public
  */
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  /**
   * Handle form submit.
   * 
   * @param {event}
   * @public
   */
  handleSubmit = (event) => {
    console.log('hanldeSubmit() this.state', this.state);
    const { name, description, ingredients } = this.state;

    let message = 'Recipe Name : ' + name + '\n' + 
      'Recipe Description : ' + description + '\n';

    message += ingredients.map(ingredient => 'Ingredient Name : ' + ingredient.name );
    alert(message);
    event.preventDefault();
  }

  /**
   * Render the form.
   * 
   * @public
   */
  render() {
    return <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Recipe name
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
          </label>
        </div>
        <div>
          <label>
            Description:
            <textarea name="description" rows={textAreaConfig.rows} cols={textAreaConfig.columns} value={this.state.description} onChange={this.handleChange} />
          </label>
        </div>

        <IngredientCreateForm 
          ingredients={this.state.ingredients} 
          value={this.state.ingredients}
          onSubmit={this.handleSubmit}/>

        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>;
  }
}
