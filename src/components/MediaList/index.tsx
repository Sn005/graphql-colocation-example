import React, {FC} from "react"
import { filter } from "graphql-anywhere";
import {ResultsFragment, ResultsFragmentDoc, MediaListFragment} from  "@/src/generated/graphql"
import {Results} from "./components/Results"

type Props = {
  mediaList: MediaListFragment;
};

const MediaList:FC<Props> =({mediaList}) => {
  return (
    <>
      <Results media={filter<ResultsFragment>(ResultsFragmentDoc, mediaList)} />
    </>
  );
}

export default MediaList
