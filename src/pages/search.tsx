import React, { FC, ComponentProps } from "react";
import { GetStaticProps } from "next";
import { createClient } from "urql";
import SearchPage from "@/src/components/pages/SearchPage";
import {
  SearchPageQuery,
  SearchPageQueryVariables,
  SearchPageDocument,
  MediaSeason,
} from "@/src/generated/graphql";

/**
 * @description
 * このレイヤーは、compoents/pages/hogeのhoge.graphqlで定義したクエリを実行するだけの層。
 * それ以外のロジックは持ち込まない。
 * あくまでクエリ実行とルーティング定義にのみ関心を寄せるコンポーネントに留める
 *
 * nits
 * components/pagesのwrapperであるならば、propsの定義もComponentPropsで作ってしまってもよいかも？
 * sample
 * type Props = ComponentProps<typeof Hoge>
 */

const client = createClient({
  url: "https://graphql.anilist.co/",
});

type Props = ComponentProps<typeof SearchPage>;

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const { data } = await client
    .query<SearchPageQuery, SearchPageQueryVariables>(SearchPageDocument, {
      season: MediaSeason.Winter,
      seasonYear: Number(new Date().getFullYear()),
    })
    .toPromise();
  return {
    props: {
      searchPageQuery: data,
    },
  };
};

const Search: FC<Props> = ({ searchPageQuery }) => {
  return (
    <>
      <SearchPage searchPageQuery={searchPageQuery} />
    </>
  );
};
export default Search;
