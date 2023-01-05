import { QueryType, TOKEN } from '../constants';
import { errorHandler } from './error-handler';

export const useFetch = async (url: string, method: QueryType) => {
  try {
    const response = await fetch(url, {
      method: method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem(TOKEN)}`,
      },
    });
    if (!response.ok) return errorHandler(response);
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
};

export const usePost = async (url: string, method: QueryType, body: string) => {
  try {
    const response = await fetch(url, {
      method: method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem(TOKEN)}`,
      },
      body: body,
    });
    if (!response.ok) return errorHandler(response);
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
};
