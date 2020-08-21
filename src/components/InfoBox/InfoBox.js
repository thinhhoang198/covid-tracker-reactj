import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import ReactCountUp from "react-countup-v2";

import "./InfoBox.css";

function InfoBox({ title, cases, update, type, onClick, active }) {
  return (
    <Card
      className={`infoBox ${active && "infoBox--selected"}`}
      onClick={onClick}
    >
      <CardContent>
        <Typography className="infoBox__title" color="textSecondary">
          {title}
        </Typography>

        <Typography className={type} variant="h4" component="h2">
          <ReactCountUp endVal={cases} duration={1} />
        </Typography>

        <Typography className="infoBox__update" variant="h5" component="p">
          + <ReactCountUp endVal={update} duration={1} />
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
