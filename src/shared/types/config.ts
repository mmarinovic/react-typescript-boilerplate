export interface ISiteMetaDataConfig {
  url: string;
  description: string;
  imageUrl: string;
}

export interface IApiConfig {
  host: string;
}

export interface IConfig {
  meta: ISiteMetaDataConfig;
  api: IApiConfig;
}
