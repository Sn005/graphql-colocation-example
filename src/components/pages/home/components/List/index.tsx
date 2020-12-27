import React, {FC} from "react";
import { MediaFragment } from "../../../../../generated/graphql";

type Props = {
  media: MediaFragment;
};

export const MediaList:FC<Props> = ({media}) => {
  return(
    <>
    <h2>{media.title}</h2>
    </>
  )
}
