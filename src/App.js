import React from "react";
import "./App.css";
import { FormControl, MenuItem, Select } from "@material-ui/core";

function App() {
  return (
    <div className="app">
      <div className="app__header">
        <h1>COVID-19 TRACKER</h1>
        <FormControl className="app__dropdown">
          <Select variant="outlined" value="abc">
            <MenuItem value="worldwide">Worldwide</MenuItem>
            <MenuItem value="worldwide">Option 1</MenuItem>
            <MenuItem value="worldwide">Option 2</MenuItem>
            <MenuItem value="worldwide">Worldwide</MenuItem>
          </Select>
        </FormControl>
      </div>

      {/* Header */}
      {/* Title + Dropdown field*/}

      {/* Infected Box*/}
      {/* Recovered Box*/}
      {/* Deaths Box*/}

      {/* Table */}
      {/* Graph */}

      {/* Map */}
    </div>
  );
}
export default App;
