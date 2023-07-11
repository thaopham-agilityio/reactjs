import { Input } from '@components/common/Input/index';
import { ChangeEvent, memo } from 'react';

interface SearchProps {
  valueSearch: string;
  onSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Search = memo(({ valueSearch, onSearchChange }: SearchProps) => {
  return (
    <Input
      type="search"
      className="input input-search"
      placeholder="Search books"
      value={valueSearch}
      onChange={onSearchChange}
    />
  );
});

export default Search;
