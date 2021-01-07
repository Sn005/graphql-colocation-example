import React, { FC } from "react"
import { filter } from "graphql-anywhere";
import { SearchPageQuery, MediaListFragment, MediaListFragmentDoc } from "@/src/generated/graphql";
import MediaList from "@/src/components/pages/SearchPage/components/MediaList"

/**
 * @description
 * このレイヤーでfragmentをまとめたクエリをhoge.graphqlファイルに定義する。
 * ここでのpropsはnextのpageディレクトリで実行したクエリをそのまま受け取る。
 * なので、HogeQueryがhoge.graphqlに定義されているならば、HogeQueryを受け取る。
 * このレイヤー以下でcollocationパターンによりfragmentで定義された値を各componentにpropsで渡してゆく
 *
 * nits
 * props.dataだと無意味なので、props.hogeQueryとしてしまってよいかも
 */

type Props = {
  searchPageQuery:SearchPageQuery
}

const SearchPage:FC<Props> = ({searchPageQuery}) => {
  const { Page } = searchPageQuery
  return (
    <>
      {/* <MediaList mediaList={searchPageQuery.Page} /> */}
      <MediaList fragment={filter<MediaListFragment>(MediaListFragmentDoc, Page)} />
    </>
  );
}
export default SearchPage
