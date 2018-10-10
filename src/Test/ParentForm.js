import React from "react";
import ChildContainer from "./ChildContainer";

export default class ParentForm extends React.Component {
  /**
   * ParentForm constructor.
   *
   * @public
   */
  constructor() {
    super();
    this.state = {
      name: "",
      data: [
        { name: "", description: "" }
      ]
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /**
   * Handle top level field changes.
   * 
   * @param {event}
   * @public
   */
  handleTopLevelFieldChange = () => event => {
    const topLevelFieldElement = event.target;
    this.setState({ [topLevelFieldElement.name]: topLevelFieldElement.value });
  }

  /**
   * Handle child field changes.
   *
   * @param {field}
   * @param {event}
   * @param {value}
   * @param {selectedKey}
   * @public
   */
  handleChildFieldChange = (field) => newValuesCollection => {
    // make a copy of the object first to avoid changes by reference
    let data = { ...this.state };

    // use here event or value of selectedKey depending on your component's event
    data[field] = newValuesCollection;

    this.setState(data);
  };

  /**
   * Add an ingredient group.
   *
   * @public
   */
  handleAddIngredientGroup = () => {
    this.setState({
      data: this.state.data.concat([{ name: '', description: '' }])
    });
  };

  /**
   * Remove an ingredient group.
   *
   * @param {index}
   * @public
   */
  handleDeleteIngredientGroup = index => {
    console.log("yup", index);
    
    this.setState({
      data: this.state.data.filter((ingredient, ingredientIndex) => index !== ingredientIndex)
    });
  };

  /**
   * Handle form submit.
   *
   * @param {event}
   * @public
   */
  handleSubmit = event => {
    const { name, data } = this.state;

    let message = "Name : " + name + "\n";

    message += data.map(
      item =>
        "Item Name : " + item.name + "Item Description : " + item.description + "\n"
    );

    alert(message);
    event.preventDefault();
  };

  /**
   * Render the form.
   *
   * @public
   */
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleTopLevelFieldChange()}
            />
          </label>
        </div>

        <ChildContainer
          value={this.state.data}
          onChange={this.handleChildFieldChange('data')}
          requestDeleteGroup={(index) => this.handleDeleteIngredientGroup(index)}
          requestAddGroup={this.handleAddIngredientGroup}
        />

        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    );
  }
}
