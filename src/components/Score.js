import React from "react";
import { Label } from "semantic-ui-react";

function Score(props) {
  const { value } = props;

  return (
    <Label circular color="pink" size="big">
      {value}
    </Label>
  );
}

export default Score;
