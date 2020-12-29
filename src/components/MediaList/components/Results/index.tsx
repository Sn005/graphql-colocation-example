import React, {FC} from "react";
import { ResultsFragment } from "@/src/generated/graphql";

type Props = {
  media: ResultsFragment;
};

export const Results:FC<Props> = ({media}) => {
  return(
    <>
    <h2>{media.title}</h2>
    </>
  )
}
