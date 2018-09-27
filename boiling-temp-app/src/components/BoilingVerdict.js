import React from 'react';
// import { GreenLabel, GreenLabelWithIcon } from './labels/GreenLabel';
// import { RedLabel } from './labels/RedLabel';
import Label from './labels/Label';

const boilingVerdict = (props) => {
  if (props.celsius >= 200) {
    return <Label theColor={props.color}>It's over 200 Celsius, it's boooiiiilingg! </Label>
  } else if(props.celsius >= 100) {
    return <Label theColor={props.color}> The Water Would Boil! </Label>
  } else {
    return <Label theColor={props.color}> The Water Would Not Boil! </Label>
  }
}

export default boilingVerdict;
