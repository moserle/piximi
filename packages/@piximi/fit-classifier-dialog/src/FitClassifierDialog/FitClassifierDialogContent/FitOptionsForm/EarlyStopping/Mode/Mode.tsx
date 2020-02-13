import * as React from "react";
import {FormControl} from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

type ModeProps = {};

export const Mode = ({}: ModeProps) => {
  return (
    <FormControl fullWidth>
      <InputLabel id="mode-label">Mode</InputLabel>
      <Select
        id="mode"
        labelId="mode-label"
        onChange={() => {}}
        value="automatic"
        disabled={true}
      >
        <MenuItem value="automatic">Automatic</MenuItem>
        <MenuItem value="maximum">Maximum</MenuItem>
        <MenuItem value="minimum">Minimum</MenuItem>
      </Select>
    </FormControl>
  );
};
