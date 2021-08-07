import { IPageContent } from '@models/content';
import { CONTENT_API_ENDPOINT } from './constants';

export const fetchUrl = async (url: string) => {
  const res = await fetch(url);
  return await res.json();
};

export interface IContentApiResponse {
  data: IPageContent;
}

export const fetchPageContent = async (
  page = 'home'
): Promise<IContentApiResponse> => {
  const url = `${CONTENT_API_ENDPOINT}/${page}`;
  const res = await fetch(url);
  return res.json();
};
