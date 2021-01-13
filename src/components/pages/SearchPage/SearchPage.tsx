import React, { FC, useCallback } from "react";
import { filter } from "graphql-anywhere";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import {
  SearchPageQuery,
  SeasonSelectorsFragment,
  SeasonSelectorsFragmentDoc,
  MediaListFragment,
  MediaListFragmentDoc,
  useSearchPageLazyQuery,
  SearchPageQueryVariables,
} from "@/src/generated/graphql";
import MediaList from "@/src/components/pages/SearchPage/components/MediaList";
import SeasonSelectors from "@/src/components/pages/SearchPage/components/SeasonSelectors";

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
  data: SearchPageQuery;
};

const SearchPage: FC<Props> = ({ data }) => {
  const [
    fetchSearchPageQuery,
    { data: lazyData, loading: lazyLoading },
  ] = useSearchPageLazyQuery();
  const handleChangeSeason = useCallback(
    (target: "season" | "seasonYear", value: SearchPageQueryVariables) => {
      console.log(target, value);
      fetchSearchPageQuery({ variables: value });
    },
    [fetchSearchPageQuery]
  );

  const { Page } = lazyData || data;
  return (
    <Container>
      <Box color="primary.main">
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js example
        </Typography>
        <SeasonSelectors
          handleChange={handleChangeSeason}
          fragment={filter<SeasonSelectorsFragment>(
            SeasonSelectorsFragmentDoc,
            Page
          )}
        />
        {lazyLoading ? (
          <p>Loading...</p>
        ) : (
          <MediaList
            fragment={filter<MediaListFragment>(MediaListFragmentDoc, Page)}
          />
        )}
      </Box>
    </Container>
  );
};
export default SearchPage;