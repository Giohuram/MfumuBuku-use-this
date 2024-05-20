import React from 'react';
import PropTypes from 'prop-types';
import { ReactReader } from 'react-reader';
import { useLocation } from 'react-router-dom';
import LibrairieNavBar from '../components/LibrairieNavBar';
import LibrairieButton from '../SharedComponents/LibrairieButton';

const Lecture = () => {
  const location = useLocation();
  const book = location.state?.book;

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
        <LibrairieNavBar />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <ReactReader
            url={book.content}
            location={0}
            locationChanged={(epubcfi) => console.log(epubcfi)}
          />
          <div style={{ marginTop: '20px' }}>
            <LibrairieButton />
          </div>
        </div>
      </div>
    </>
  );
};

Lecture.propTypes = {
  book: PropTypes.shape({
    bookContentURL: PropTypes.string.isRequired,
  }).isRequired,
};

export default Lecture;
