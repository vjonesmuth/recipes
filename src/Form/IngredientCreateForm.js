import React from 'react';
import RecipeConfig from './RecipeConfig';

const recipeConfig = new RecipeConfig();
const textAreaConfig = recipeConfig.getTextAreaConfig();

export default class IngredientCreateForm extends React.Component {

  /**
   * RecipeCreateForm constructor.
   * 
   * @public
   */
  constructor(props) {
    super(props);
    console.log("constructor props: ", props);

    this.handleIngredientChange = this.handleIngredientChange.bind(this);
  };

  /**
   * Handle componentWillReceiveProps.
   *
   * @param {*} props 
   */
  componentWillReceiveProps(props) {
    console.log("componentWillReceiveProps() props", props);
  }

  /**
   * Handle ingredient changes.
   * 
   * @param {index}
   * @public
   */
  handleIngredientChange = (index) => (event) => {
    const newIngredient = this.props.ingredients.map(
      (ingredient, ingredientIndex) => {
        if (index !== ingredientIndex) {
          return ingredient;
        }
        return { ...ingredient, [event.target.name]: event.target.value };
      }
    );

    this.setState({ ingredients: newIngredient });
  }

  /**
   * Add an ingredient group.
   * 
   * @public
   */
  handleAddIngredient = () => {
    this.setState({
      ingredients: this.props.ingredients.concat([{ name: "" }])
    });
  }

  /**
   * Remove an ingredient group.
   * 
   * @public
   */
  handleRemoveIngredient = (idx) => () => {
    this.setState({
      ingredients: this.propsprops.ingredients.filter(
        (s, sidx) => idx !== sidx
      )
    });
  }

  /**
   * Render the form.
   * 
   * @public
   */
  render() {
    return <div className="ingredients">
      <h4>Ingredients</h4>

      {this.props.ingredients.map((ingredient, index) => (
        <div className="ingredient">
          <input
            type="text"
            name="name"
            key={"name_" + index}
            placeholder={`Ingredient #${index + 1} name`}
            value={ingredient.name}
            onChange={this.handleIngredientChange(index)}
          />

          <input
            type="text"
            name="amount"
            key={"amount_" + index}
            placeholder={`Ingredient #${index + 1} amount`}
            value={ingredient.amount}
            onChange={this.handleIngredientChange(index)}
          />

          <select
            name={ingredient.measurementType}
            key={"measurementType_" + index}
            value={ingredient.measurementType}
            onChange={this.handleIngredientChange(index)}
          >
            {recipeConfig.getMeasurementTypes().map(measurement => (
              <option value={measurement.value}>
                {measurement.value}
              </option>
            ))}
          </select>

          <div>
            <label>
              Description:
              <textarea
                name="description"
                rows={textAreaConfig.rows}
                cols={textAreaConfig.columns}
                key={"description_" + index}
                value={ingredient.description}
                onChange={this.handleIngredientChange(index)}
              />
            </label>
          </div>

          <button
            type="button"
            onClick={this.handleRemoveIngredient(index)}
            className="small"
          >
            -
          </button>
        </div>
      ))}
      <button type="button" onClick={this.handleAddIngredient} className="small">
        Add Ingredient
      </button>
    </div>
  }
}
