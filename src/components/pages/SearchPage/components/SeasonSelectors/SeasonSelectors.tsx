import React, { FC, useMemo } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import { SeasonSelectorsFragment } from "@/src/generated/graphql";
const yearsPeriod = 20;
const SeasonSelectors: FC<{
  handleChange: (target: "season" | "seasonYear", value: string) => void;
  fragment: SeasonSelectorsFragment[];
}> = ({ handleChange, fragment }) => {
  const handleChangeSeason = (value) => {
    handleChange("season", value);
  };
  const menus = useMemo(() => {
    const [first] = fragment;
    const { seasonYear } = first;
    return [...Array(yearsPeriod)].map((_, i) => {
      const year = seasonYear - i;
      return <MenuItem value={year}>{year}</MenuItem>;
    });
  }, [fragment]);
  return (
    <>
      <FormControl>
        <InputLabel id="season">Season</InputLabel>
        <Select labelId="season" value={2017} onChange={handleChangeSeason}>
          {menus}
          {/* <MenuItem value={2017}>2017</MenuItem>
          <MenuItem value={2018}>2018</MenuItem> */}
        </Select>
      </FormControl>
    </>
  );
};

export default SeasonSelectors;
