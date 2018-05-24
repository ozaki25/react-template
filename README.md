# syoto-web

## 概要

- Reactアプリ開発環境のボイラープレート

## スクリプト

### yarn start

- アプリを起動する
- デフォルトでは`localhost:3000`で動く

### yarn build

- ビルドしてhtml/css/jsの一式を生成する
- 成果物は`build`配下に生成される

### yarn test

- jestのテストを実行する

### yarn test:coverage

- jestのテストを実行しカバレッジを表示する

### yatn precommit

- `git commit`時に実行されるスクリプト
- prettier/eslint/stylelintが実行される

### yarn lint

- `src`配下のjsファイルに対してeslintを実行する

### yarn lint:css

- `src`配下のjsファイル内にあるstyled-componentsに対してlintを実行する

### yarn format

- `src`配下のjsファイルに対してformatterを実行する

### yarn storybook

- storybookを起動する
- `localhost:9009`で起動する

### yarn build-storybook

- storybookの静的ファイルを生成する
- 成果物は`storybook-static/`配下に生成される

### yarn create-component

- コンポーネントの雛形を生成するscript
- templateでcustom-componentを選択すると事前に用意した一式が生成される
- 新規コンポーネントはこのコマンドで生成する
