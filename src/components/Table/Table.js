import React from "react";

import "./Table.css";
import numeral from "numeral";

function Table({ countries }) {
  return (
    <div className="table">
      <h2 className="table__title">Ranking by Cases</h2>
      {countries.map(({ country, cases }) => (
        <tr>
          <td className="table__country">{country}</td>
          <td className="table__cases">{numeral(cases).format("0,0")}</td>
        </tr>
      ))}
    </div>
  );
}

export default Table;
