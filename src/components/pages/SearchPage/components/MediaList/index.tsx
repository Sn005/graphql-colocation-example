import React, { FC } from "react";

import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";

import {
  MediaListItemFragment,
} from "@/src/generated/graphql";

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
