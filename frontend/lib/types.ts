//file that contains the types for the app

export interface IBackendError {
  status: "error";
  message: string;
}

export type uploadFileMeta = {
  name: string;
  size: number;
  mimeType: string;
  b64Buffer: string;
}

export interface IFileMeta {
  name: string;
  size: number;
  mimeType: string;
  b64Buffer: string;
}

interface Image {
  url: string;
  order: number;
  height: number;
  width: number;
}

interface Brand {
  id: string;
  slug: string;
  name: string;
}

export interface IProductInfo {
  id: string;
  slug: string;
  name: string;
  isBulk: boolean;
  baseQuantity: number;
  baseUnit: string;
  quantity: number;
  quantityFactor: number;
  unit: string;
  price: number;
  unitPrice: number;
  priceMin: number;
  priceMax: number;
  priceAvg: number;
  popularity: number;
  state: string;
  tags: string;
  brand: Brand;
  quantityString: string;
  image: Image;
}

export interface IStore {
  id: string;
  slug: string;
  name: string;
  imageUrl: string;
  priority: number;
  state: number;
  updatedAt: string;
  createdAt: string;
  stores: any[]; // Replace 'any' with the actual type if known
}

export interface IProductData {
  productInfo: IProductInfo;
  storePrices: IStore[];
}
