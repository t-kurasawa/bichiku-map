export interface Stockpile {
  id: number | string;
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
  url_yahoo: number | string;
  // eslint-disable-next-line camelcase
  url_rakuten: number | string;
  // eslint-disable-next-line camelcase
  url_amazon: number | string;
}

export interface EvacuationArea {
  避難場所_名称: string;
  地方公共団体コード: number;
  都道府県: string;
  指定区市町村名: string;
  住所: string;
  緯度: number;
  経度: number;
}

export interface EvacuationCenter {
  避難所_名称: string;
  地方公共団体コード: number;
  都道府県: string;
  指定区市町村名: string;
  住所: string;
  緯度: number;
  経度: number;
}
