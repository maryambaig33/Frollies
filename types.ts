export interface IceCreamProduct {
  id: number;
  name: string;
  tagline: string;
  image: string;
  bgColor: string;
  textColor: string;
  price: string;
}

export interface GeneratedFlavor {
  name: string;
  description: string;
  ingredients: string[];
  colorHex: string;
  funFact: string;
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}
