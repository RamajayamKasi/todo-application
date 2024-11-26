import { Component } from "react";

class InputTag extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputType: props.data[0],
      placeholder: props.data[1],
      id_name: props.data[2],
      value: props.data[3],
      custom_class: props.data[4],
      taskValue: props.data[3], // Initializing taskValue in the state
    };
  }

  handleOnchange = (event) => {
    console.log("Key up event:", event.target.value); // Log the key pressed
    this.setState({ taskValue: event.target.value });
  };

  render() {
    const { inputType, placeholder, id_name, taskValue, custom_class } = this.state;
    console.log(inputType, placeholder, id_name, taskValue, custom_class);

    return (
      <input
        className={custom_class}
        type={inputType}
        id={id_name}
        name={id_name}
        value={taskValue}
        placeholder={placeholder}
        onChange={this.handleOnchange}
      />
    );
  }
}

export default InputTag;
