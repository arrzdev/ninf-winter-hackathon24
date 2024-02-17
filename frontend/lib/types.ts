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