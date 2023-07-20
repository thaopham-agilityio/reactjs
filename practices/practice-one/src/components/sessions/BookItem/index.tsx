import { Card } from '@components/common/Card';
import { IBook } from '@interface/book';
import { memo } from 'react';

interface BookProps {
  book: IBook;
  isDisplayBooks: boolean;
  toggleModal: (book: IBook) => void;
}

const BookItem = memo(({ book, isDisplayBooks, toggleModal }: BookProps): JSX.Element => {
  const onToggleModal = (): void => {
    toggleModal(book);
  };

  return (
    <li className={`book-item ${isDisplayBooks ? 'list' : ''}`}>
      <Card loading="lazy" width="100" height="100" book={book} onClick={onToggleModal} />
    </li>
  );
});

export default BookItem;
