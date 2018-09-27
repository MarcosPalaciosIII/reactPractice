import React, {Component} from 'react';

class TemperatureInput extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   temperature: ''
    // }
  }

  scaleNames = {
    c: "Celsius",
    f: 'Fahrenheit'
  };

  handleChange(e) {
    // this.setState({
      // temperature: e.target.value
      this.props.onTemperatureChange(e.target.value)
    // }, () => {
    //   console.log("Temp input in component state: ", this.state);
    // });
  }

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;

    return (
      <fieldset>
        <legend> Enter temperature in {this.scaleNames[scale]}: </legend>
        <input value={temperature} onChange={e =>this.handleChange(e)} />
      </fieldset>
    )
  }
}

export default TemperatureInput;
