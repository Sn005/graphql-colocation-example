This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Collocation + nextざっくり設計メモ

- クエリの定義は`components/pages/Hoge/Hoge.graphql`で行う
- `components/pages/**/components`以下ではfragmentの定義をセットで行う
- `components/pages/**/*.tsx`ではfragmentではなく、クエリを定義する
- `components/page/`以下で定義されたクエリはnextのpageディレクトリ`src/pages`で実行する
  - これはnextのgetStaticProps実行可能な場所が、そこに限定されるからである
