# みんなで備える防災備蓄マップ

避難所の防災備蓄状況を可視化する防災備蓄マップテンプレートです。

## サンプルサイト

https://bichiku-map.web.app/

## テンプレート利用方法

### 避難所の防災備蓄データの登録

- 避難所名称（住所）.csv のフォーマットで upload フォルダに格納してください。避難所や住所は[東京都防災マップ避難所](https://catalog.data.metro.tokyo.lg.jp/dataset/t000003d0000000093)に合わせてください。
- 避難所の防災備蓄状況データを更新するバッチ処理を動かします。

```
cd backend
npm install
npm run etl
```

### サイト公開

- React web application をビルドし Firebase 等にホスティングしてください
    - Production: Firebase 環境は各自でご準備ください。Github Actions でデプロイします。
    - Development: ローカルPC 環境で起動します。

```
cd frontend
npm install
npm run start
npm run build
```
