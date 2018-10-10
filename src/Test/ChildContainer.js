import React from "react";
import ChildForm from "./ChildForm";

export default class ChildContainer extends React.Component {
  /**
   * ChildContainer constructor.
   *
   * @public
   */
  constructor(props) {
    super(props);
    console.log("ChildContainer constructor this.props: ", this.props);
  }

  /**
   * Get the collection of values.
   */
  get valuesCollection() {
    return this.props.value;
  }

  /**
   * Get whether we should delete the the group.
   */
  get shouldShowDeleteButton() {
    return this.valuesCollection.length > 1;
  }

  /**
   * Handle recipe change events.
   *
   * @param {event}
   * @public
   */
  handleFieldChange = index => newValuesObject => {
    const newValuesCollection = [...this.valuesCollection];
    newValuesCollection[index] = newValuesObject;
    this.props.onChange(newValuesCollection);
  };

  /**
   * Render the form.
   *
   * @public
   */
  render() {
    return (
      <div>
        <h4>Items</h4>

        {this.valuesCollection.map((subform, index) => (
          <ChildForm
            key={index}
            value={subform}
            onChange={this.handleFieldChange(index)}
            showDeleteButton={this.shouldShowDeleteButton}
            requestDeleteGroup={() => this.props.requestDeleteGroup(index)}
          />
        ))}

        <button type="button" onClick={this.props.requestAddGroup}>Add</button>
      </div>
    );
  }
}
