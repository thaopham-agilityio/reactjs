import { Button } from '@components/common/Button/index';
import { memo } from 'react';

interface FilterSortProps {
  onSortBooks: () => void;
  sortOption: {
    isSortByAlphabet: boolean;
    isSortByYear: boolean;
  };
}

const FilterSort = memo(({ onSortBooks, sortOption }: FilterSortProps) => {
  const { isSortByAlphabet, isSortByYear } = sortOption || {};

  return (
    <div className="filter-sort">
      <div className="filter-title">Sort By</div>
      <div className="filter-sort-icons">
        <Button
          className={`btn btn-sort ${isSortByAlphabet ? 'selected' : ''}`}
          label="Alphabetical Order"
          onClick={onSortBooks}
        />
        <Button
          className={`btn btn-sort ${isSortByYear ? 'selected' : ''}`}
          label="Release Year"
          onClick={onSortBooks}
        />
      </div>
    </div>
  );
});

export default FilterSort;
