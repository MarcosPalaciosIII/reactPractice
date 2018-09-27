import React, {Component} from 'react';
import BoilingVerdict from './BoilingVerdict';
import TemperatureInput from './TemperatureInput';
import { tryConvert, toCelsius, toFahrenheit } from './ConversionFunctions';
import Label from './labels/Label';


class Calculator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      temperature: '',
      scale: 'c'
    };
  }

  handleCelsiusChange = (temperature) => {
  this.setState({scale: 'c', temperature});
  }

  handleFahrenheitChange = (temperature) => {
    this.setState({scale: 'f', temperature});
  }

  handleChange = (e) => {
    this.setState({
      temperature: e.target.value
    }, () => console.log("this state: ", this.state));
  }

  getColor = (theCelsius) => {
    let color;
    console.log("here ", theCelsius);

    if(theCelsius < 100) {
      color = 'green';
    } else if (theCelsius >=100 && theCelsius <= 200) {
      color = 'orange';
    } else if (theCelsius >= 200) {
      color = 'red';
    } else {
      color = 'black';
    }
    return color;
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
    const colorFromTheMethod = this.getColor(parseFloat(celsius));

    // <fieldset>
    //   <legend> Enter temperature in Celsius </legend>
    //   <input value={temperature} onChange={e =>this.handleChange(e)} />
    //   <BoilingVerdict celsius={parseFloat(temperature)} />
    // </fieldset>

    return (
      // <div>
      //   <TemperatureInput scale="c" />
      //   <TemperatureInput scale="f" />
      // </div>
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={temperature => this.handleCelsiusChange(temperature)} />

        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={temperature => this.handleFahrenheitChange(temperature)} />

        <BoilingVerdict
          celsius={parseFloat(celsius)} color={colorFromTheMethod} />
      </div>
    )
  }
}

export default Calculator;
