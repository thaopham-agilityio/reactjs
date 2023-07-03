import axios from 'axios';
import endpoint from '@helpers/endpoints-config';
import { IBook } from '@interface/book';
import { ICategory } from '@interface/category';

/**
 * This is method get API from JSON server
 * @param {string} url
 * @returns Array
 */

export const getListBook = async () => {
  const url = `${process.env.VITE_BASE_URL}:${process.env.PORT}/${endpoint.BooksBaseUrl}`;
  const res = await axios.get<IBook[]>(url);

  try {
    return res.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export const getCategories = async () => {
  const url = `${process.env.VITE_BASE_URL}:${process.env.PORT}/${endpoint.CategoriesBaseUrl}`;
  const res = await axios.get<ICategory[]>(url);

  try {
    return res.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
