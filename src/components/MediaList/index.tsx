import React from "react"
import { filter } from "graphql-anywhere";
import {ResultsFragment, ResultsFragmentDoc, useHomePageQuery} from  "@/src/generated/graphql"
import {Results} from "./components/Results"
export default () => {
  const { data, loading } = useHomePageQuery();

  if (loading) return <>Loading...</>;

  return (
    <>
      <Results media={filter<ResultsFragment>(ResultsFragmentDoc, data)} />
    </>
  );
};
