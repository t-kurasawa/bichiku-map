// 防災備蓄品種類
export interface StockpileType {
  id: number;
  // eslint-disable-next-line camelcase
  item_ja: string;
  // eslint-disable-next-line camelcase
  unit_ja: string;
  // eslint-disable-next-line camelcase
  category_ja: string;
  image: string;
  // eslint-disable-next-line camelcase
  description_ja: string;
  // eslint-disable-next-line camelcase
  item_en: string;
  // eslint-disable-next-line camelcase
  unit_en: string;
  // eslint-disable-next-line camelcase
  category_en: string;
  // eslint-disable-next-line camelcase
  description_en: string;
  infantsMale: number | string;
  infantsFemale: number | string;
  child1Male: number | string;
  child1Female: number | string;
  child2Male: number | string;
  child2Female: number | string;
  adultMale: number | string;
  adultFemale: number | string;
  agedMale: number | string;
  agedFemale: number | string;
  pet: number | string;
  // eslint-disable-next-line camelcase
  url_yahoo: string;
  // eslint-disable-next-line camelcase
  url_rakuten: string;
  // eslint-disable-next-line camelcase
  url_amazon: string;
}

// 防災備蓄状況
export interface StockpileStatus extends StockpileType {
  currentQuantity: number;
  shortQuantity: number;
  updateDate: string;
}

// 避難所の防災備蓄状況
export interface StockpileStatusEC {
  evacuationCenter: string;
  stockpileStatus: Array<StockpileStatus>;
}

// 避難場所
export interface EvacuationArea {
  避難場所_名称: string;
  地方公共団体コード: number;
  都道府県: string;
  指定区市町村名: string;
  住所: string;
  緯度: number;
  経度: number;
}

// 避難所
export interface EvacuationCenter {
  避難所_名称: string;
  地方公共団体コード: number;
  都道府県: string;
  指定区市町村名: string;
  住所: string;
  緯度: number;
  経度: number;
}
