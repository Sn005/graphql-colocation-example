import React, { FC } from "react";
// import Image from "next/image";
import {
  MediaListFragment,
  MediaListItemFragment,
} from "@/src/generated/graphql";

export const MediaListItem: FC<{
  fragment: MediaListItemFragment;
}> = ({ fragment }) => {
  const title = fragment.title.native;
  const bannerImage = fragment.bannerImage;
  return (
    <>
      <h2>{title}</h2>
      <img src={bannerImage} alt={title} />
    </>
  );
};

const MediaList: FC<{
  fragment: MediaListFragment;
}> = ({ fragment }) => {
  const { media } = fragment;
  return (
    <>
      {media.map((v) => (
        <MediaListItem key={v.title.native} fragment={v} />
      ))}
    </>
  );
};

export default MediaList;
