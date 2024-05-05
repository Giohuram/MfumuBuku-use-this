import React from 'react';
import LibrairieNavBar from '../components/LibrairieNavBar';
import Banner from '../SharedComponents/Banner';
import BookCard from '../SharedComponents/BookCard';


const MyLibrary = () => {
  return (
    <main className={Styles.main}>
      {/* Composant LibrairieNavBar à gauche */}
      <div>
        <LibrairieNavBar />

        <div className={styles.containerStyle}>
          <section className=''>
            
          </section>
        </div>

      </div>
    </main>
  );
};

export default MyLibrary;
