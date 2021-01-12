import React, { FC } from "react";

import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import {
  MediaListItemFragment,
} from "@/src/generated/graphql";

const SeasonSelectors: FC<{
  handleChange: (target: "season" | "seasonYear", value: string) => void;
}> = ({ handleChange }) => {
  const handleChangeSeason = (value) => {
    handleChange("season", value);
  };
  return (
    <>
      <FormControl>
        <InputLabel id="season">Season</InputLabel>
        <Select
          labelId="season"
          value={2017}
          onChange={handleChangeSeason}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};

export const MediaListItem: FC<{
  fragment: MediaListItemFragment;
}> = ({ fragment }) => {
  const title = fragment.title.native;
  const imagePath = fragment.coverImage.extraLarge;
  return (
    <>
      <GridListTileBar title={title} />
      <img src={imagePath} alt={title} width="100%" />
    </>
  );
};

const MediaList: FC<{
  mediaList: MediaListItemFragment[];
}> = ({ mediaList }) => {
  // const { media } = fragment;
  return (
    <>
      <GridList cellHeight={360}>
        {mediaList.map((v) => (
          <GridListTile key={v.title.native}>
            <MediaListItem fragment={v} />
          </GridListTile>
        ))}
      </GridList>
    </>
  );
};

export default MediaList;
