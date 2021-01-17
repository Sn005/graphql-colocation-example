import React, { FC, useMemo } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import {
  SeasonSelectorsFragment,
  MediaSeason,
  SearchPageQueryVariables,
} from "@/src/generated/graphql";
const yearsPeriod = 20;
const currentYear = new Date().getFullYear();
const SeasonSelectors: FC<{
  handleChange: (
    target: "season" | "seasonYear",
    value: SearchPageQueryVariables
  ) => void;
  fragment: SeasonSelectorsFragment;
}> = ({ handleChange, fragment }) => {
  const firstMedia = fragment.media[0];
  const selectedYear = firstMedia.seasonYear;
  const selectedSeason = firstMedia.season;

  const yearMenus = useMemo(() => {
    return [...Array(yearsPeriod)].map((_, i) => {
      const year = currentYear - i;
      return (
        <MenuItem key={year} value={year}>
          {year}
        </MenuItem>
      );
    });
  }, []);

  const seasonMenus = useMemo(() => {
    return Object.entries(MediaSeason).map(([key, value]) => {
      return (
        <MenuItem key={value} value={value}>
          {key}
        </MenuItem>
      );
    });
  }, []);

  const handleChangeYear = (e: React.ChangeEvent<{ value: string }>) => {
    handleChange("seasonYear", {
      season: selectedSeason,
      seasonYear: Number(e.target.value),
    });
  };

  const handleChangeSeason = (e: React.ChangeEvent<{ value: string }>) => {
    handleChange("seasonYear", {
      season: e.target.value as MediaSeason,
      seasonYear: selectedYear,
    });
  };

  return (
    <>
      <FormControl>
        <InputLabel id="year">Year</InputLabel>
        <Select labelId="year" value={selectedYear} onChange={handleChangeYear}>
          {yearMenus}
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel id="season">Season</InputLabel>
        <Select
          labelId="season"
          value={selectedSeason}
          onChange={handleChangeSeason}
        >
          {seasonMenus}
        </Select>
      </FormControl>
    </>
  );
};

export default SeasonSelectors;
