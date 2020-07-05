import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Education extends Component {
  render() {
    const This = this.props;
    return (
      <Grid>
        <Cell col={4}>
          <p>
            {This.startYear} - {This.endYear}
          </p>
        </Cell>
        <Cell col={8}>
          <h4 className="mt-0">{This.schoolName}</h4>
          <p>{This.schoolDescription}</p>
        </Cell>
      </Grid>
    );
  }
}

export default Education;
