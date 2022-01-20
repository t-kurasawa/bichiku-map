export interface Stockpile {
  id: number;
  name: string;
  stockQuantity: number;
  lat: number;
  lng: number;
  address: string;
  registrationDate: string;
  expiryDate: string;
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
