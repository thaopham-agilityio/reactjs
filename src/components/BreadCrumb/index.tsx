import { IBook } from '@interface/book';
import { Image } from '@components/Image/index';
import arrow from '@image/arrow-right.svg';

interface BreadCrumbProps {
  selectedCategory: string;
  listBooksFilter: IBook[];
}

const BreadCrumb = ({ selectedCategory, listBooksFilter }: BreadCrumbProps) => {
  return (
    <div className="book-title">
      <span className="book-title-text">{selectedCategory || 'All Books'}</span>
      <span className="book-title-arrow">
        <Image altText="arrow" height="8" imageSrc={arrow} loading="lazy" width="22" />
      </span>
      <span className="book-title-results">Showing {listBooksFilter.length} Result(s)</span>
    </div>
  );
};

export default BreadCrumb;
