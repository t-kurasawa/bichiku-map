# 避難所の防災備蓄データ更新バッチ

```
cd batch
npm install
npm run etl
```

## オープンデータの収集
- [東京都オープンデータカタログサイト](https://portal.data.metro.tokyo.lg.jp/)のクリエイティブ・コモンズデータを利用します
- [dim(v0.1.5)](https://github.com/ryo-ma/dim) でオープンデータを管理。dim.json に記載されているデータを収集します

`npm run extract`

## データ変換・加工
- 収集したオープンデータ CSV ファイルを JSON ファイルに変換します
- upload フォルダに格納された防災備蓄状況 CSV ファイルを JSON ファイルに変換します

`npm run transform`

## データロード
- Mock Service Worker に API 通信用のデータをロードします

`npm run load`
