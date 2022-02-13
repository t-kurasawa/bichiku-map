# 避難所の防災備蓄データ更新バッチ

```
cd batch
npm install
npm run etl
```

## オープンデータの収集
- [東京都オープンデータカタログサイト](https://portal.data.metro.tokyo.lg.jp/)のクリエイティブ・コモンズデータを利用する。
- [dim(v0.1.5)](https://github.com/ryo-ma/dim) でオープンデータを管理。dim.json に記載されているデータを収集する

`npm run extract`

## データ変換・加工
- 収集した CSV ファイルを JSON ファイルに変換する

`npm run transform`

## データロード
- Mock Service Worker API にデータをロードする

`npm run load`
