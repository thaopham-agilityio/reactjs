import { ICategory } from '@interface/category';
import Category from '../Category';
import { CATEGORY_MESSAGES } from '@constants/error-messages';
import { memo } from 'react';

interface ListCategoryProps {
  categoryList: ICategory[] | undefined;
  categorySelected: string;
  onSelectCategory: (name: string) => void;
}

const ListCategory = memo(
  ({ categoryList, categorySelected, onSelectCategory }: ListCategoryProps) => {
    const renderListCategory = () => {
      return categoryList?.map((category) => (
        <Category
          key={category.id}
          category={category}
          categorySelected={categorySelected}
          onSelectCategory={onSelectCategory}
        />
      ));
    };

    return (
      <div className="book-category-wrapper">
        <ul className="book-category">
          {!categoryList?.length ? (
            <li className="book-category-item not-found">{CATEGORY_MESSAGES.NO_CATEGORY}</li>
          ) : (
            renderListCategory()
          )}
        </ul>
      </div>
    );
  }
);

export default ListCategory;
