# 防災備蓄マップ

```
cd frontend
npm install
npm run start
npm run build
```

## システム構成

- フロントエンドは React で開発した SPA サイトです。Firebase にホスティングしています。

- バックエンドとは REST API でデータ通信しています。
  - 本テンプレートでは Mock Service Worker を利用しています
  - 別途 API サーバーを設ける際には API IF 定義は handlers 及び schema を参照してください

## CI/CD

- Git commit, push 時に Husky でコードの整形／静的解析、テストを行います

- Github Actions でマージしたタイミングで Firebase にデプロイします
