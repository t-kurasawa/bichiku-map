export interface User {
  id: {
    name: string;
    value: string;
  };
  name: {
    title: string;
    first: string;
    last: string;
  };
  gender: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  email: string;
}

export interface Stockpile {
  id: number;
  name: string;
  user: User;
  stockQuantity: number;
  lat: number;
  lng: number;
  address: string;
  registrationDate: string;
  expiryDate: string;
}

export interface OpenData {
  type: string;
  name: string;
  crs: any;
  features: [
    {
      type: string;
      properties: {
        gid: string;
        genshoname: string;
        kubun: string;
      };
      geometry: {
        type: string;
        coordinates: Array<Array<Array<number>>>;
      };
    }
  ];
}

export interface MapElement {
  id: number;
  lat: number;
  lon: number; // TODO: OpenStreetMap API は lon
  tags?: any;
  type: string;
}
