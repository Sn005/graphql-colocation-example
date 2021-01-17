import React from "react";
import { GetStaticPropsContext , InferGetStaticPropsType, NextPage} from "next";
import { createClient } from "urql";
import HomePage from "@/src/components/pages/HomePage";
import {
  HomePageQuery,
  HomePageQueryVariables,
  HomePageDocument,
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

type Props = InferGetStaticPropsType<typeof getStaticProps>

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const { data } = await client
    .query<HomePageQuery, HomePageQueryVariables>(HomePageDocument, {
      season: MediaSeason.Winter,
      seasonYear: Number(new Date().getFullYear()),
    })
    .toPromise();
  return {
    props: {
      data
    },
  };
};

const Search: NextPage<Props> = ({ data }) => {
  return (
    <>
      <HomePage data={data} />
    </>
  );
};
export default Search;
