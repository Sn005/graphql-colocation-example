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
  const imagePath = fragment.coverImage.large
  return (
    <>
      <h2>{title}</h2>
      <img src={imagePath} alt={title} />
    </>
  );
};

const MediaList: FC<{
  fragment: MediaListFragment;
}> = ({ fragment }) => {
  const { media } = fragment;
  return (
    <>
      {/* <Image src="/vercel.svg" width="200" height="auto" /> */}
      {media.map((v) => (
        <MediaListItem key={v.title.native} fragment={v} />
      ))}
    </>
  );
};

export default MediaList;
