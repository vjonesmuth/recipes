import React from "react";

export default class ChildForm extends React.Component {
  /**
   * ChildForm constructor.
   *
   * @public
   */
  constructor(props) {
    super(props);
    console.log("ChildForm constructor this.props: ", this.props);
  }

  get valuesObject() {
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

    let newValuesObject = { ...this.valuesObject };
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
          type="text"
          name="name"
          value={this.props.value.name}
          onChange={this.handleFieldChange()}
        />

        <div>
          <label>
            Description:
            <textarea
              name="description"
              rows="5"
              cols="30"
              value={this.props.value.description}
              onChange={this.handleFieldChange()}
            />
          </label>

          {this.props.showDeleteButton ? (<button type="button" onClick={this.props.requestDeleteGroup}>Delete</button>) : null}
        </div>
      </div>
    );
  }
}
