import React from "react";
import RecipeConfig from "./RecipeConfig";

const recipeConfig = new RecipeConfig();

export default class Ingredient extends React.Component {
  /**
   * Ingredient constructor.
   *
   * @public
   */
  constructor(props) {
    super(props);
  }

  /**
   * Get the values of this objects properties.
   */
  get ingredientValues() {
    return this.props.value;
  }

  /**
   * Handle recipe change events.
   *
   * @param {event}
   * @public
   */
  handleFieldChange = () => event => {
    const inputElement = event.target;

    let newValuesObject = { ...this.ingredientValues };
    newValuesObject[inputElement.name] = inputElement.value;

    this.props.onChange(newValuesObject);
  };

  /**
   * Render the form.
   *
   * @public
   */
  render() {
    return (
      <div>
        <input
          type='text'
          name='name'
          value={this.ingredientValues.name}
          onChange={this.handleFieldChange()}
        />

        <div>
          <label>
            Description:
            <textarea
              name='description'
              rows={recipeConfig.textAreaConfig.rows}
              cols={recipeConfig.textAreaConfig.columns}
              value={this.props.value.description}
              onChange={this.handleFieldChange()}
            />
          </label>

          {this.props.showDeleteButton ? (<button type='button' onClick={this.props.requestDeleteGroup}>Delete</button>) : null}
        </div>
      </div>
    );
  }
}
