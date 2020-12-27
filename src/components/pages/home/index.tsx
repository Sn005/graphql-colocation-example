import React from "react"
import { filter } from "graphql-anywhere";
import {MediaFragment, MediaFragmentDoc, useHomePageQuery} from  "../../../generated/graphql"
import {MediaList} from "./components/List"
export default () => {
  const { data, loading } = useHomePageQuery();

  if (loading) return <>Loading...</>;

  return (
    <>
      <MediaList media={filter<MediaFragment>(MediaFragmentDoc, data)} />
    </>
  );
};
