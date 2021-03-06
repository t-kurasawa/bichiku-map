import fs from 'fs'
import path from 'path'
import csvtojson from 'csvtojson'

const openDataConvert = async () => {

  /**
   *  避難所
   */
  const evacuationCenter = {
    "避難所_名称": "string",
    "地方公共団体コード": "number",
    "都道府県": "string",
    "指定区市町村名": "string",
    "住所": "string",
    "緯度":"number",
    "経度": "number",
  }

  const evacuationCenterJson = await csvtojson({
    colParser: evacuationCenter,
    checkType:true
  }).fromFile(path.join(__dirname, `../data_files/www.opendata.metro.tokyo.lg.jp/soumu/130001_evacuation_center.csv`));  

  fs.writeFileSync(
    path.join(__dirname, "../../../frontend/src/__mock__/data/evacuationCenter.json"),
    JSON.stringify(evacuationCenterJson)
  );


  /**
   *  防災備蓄品種類
   */
  const stockpileType = {
    "id": "number",
    "item_ja": "string",
    "unit_ja": "string",
    "category_ja": "string",
    "image": "string",
    "description_ja": "string",
    "item_en": "string",
    "unit_en": "string",
    "category_en": "string",
    "description_en": "string",
    "infantsMale": "number",
    "infantsFemale": "number",
    "child1Male": "number",
    "child1Female": "number",
    "child2Male": "number",
    "child2Female": "number",
    "adultMale": "number",
    "adultFemale": "number",
    "agedMale": "number",
    "agedFemale": "number",
    "pet": "number",
    "url_yahoo": "string",
    "url_rakuten": "string",
    "url_amazon": "string"
  }

  const stockpileTypeJson = await csvtojson({
    colParser: stockpileType,
    checkType:true
  }).fromFile(path.join(__dirname, `../data_files/www.bichiku.metro.tokyo.lg.jp/stockpile_list.csv`));

  fs.writeFileSync(
    path.join(__dirname, "../../../frontend/src/__mock__/data/stockpileType.json"),
    JSON.stringify(stockpileTypeJson)
  );  
}

export default openDataConvert;