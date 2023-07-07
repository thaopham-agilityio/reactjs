import { IBook } from '@interface/book';
import { ICategory } from '@interface/category';

/**
 * Get list filter books with category name
 * @param {listBooks, categoryName} IBook[], string
 * @returns {List books with categoryName} IBook[]
 */
export const filterBooksByCategoryName = (listBooks: IBook[] | undefined, categoryName: string) => {
  return listBooks?.filter((item) => item?.categoryName === categoryName);
};

/**
 * Map over two arrays of objects
 * @param {listCategories, listBooks} ICategory[], IBook[]
 * @returns {List categories with total item of category} ICategory[]
 */
export const getCategoryWithTotalItem = (
  listCategories: ICategory[] | undefined,
  listBooks: IBook[] | undefined
) =>
  listCategories?.map((category) => {
    const temp = filterBooksByCategoryName(listBooks, category.categoryName);

    return {
      ...category,
      total: temp?.length,
    };
  });
