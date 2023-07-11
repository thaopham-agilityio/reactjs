import { BOOKS_MESSAGES } from '@constants/error-messages';
import { IBook } from '@interface/book';
import BookItem from '../Book';
import { memo } from 'react';

interface ListBookProps {
  listBook: IBook[] | undefined;
  isDisplayBooks: boolean;
  onToggleModal: (book: IBook) => void;
}

const ListBook = memo(({ listBook, isDisplayBooks, onToggleModal }: ListBookProps) => {
  const renderListBook = () => {
    return listBook?.map((book) => (
      <BookItem
        key={book.id}
        book={book}
        isDisplayBooks={isDisplayBooks}
        toggleModal={onToggleModal}
      />
    ));
  };

  return (
    <div className="book-list-wrapper">
      <ul className="book-list">
        {!listBook?.length ? (
          <li className="book-item not-found">{BOOKS_MESSAGES.NO_DATA}</li>
        ) : (
          renderListBook()
        )}
      </ul>
    </div>
  );
});

export default ListBook;
