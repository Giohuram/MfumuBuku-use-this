import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { useLocation } from 'react-router-dom';
import LibrairieNavBar from '../components/LibrairieNavBar';

const LectureAudio = () => {
  const location = useLocation();
  const book = location.state?.book;
  const [playing, setPlaying] = useState(false);

  const handlePlayPause = () => {
    setPlaying(!playing);
  };

  return (
   <> 
      <LibrairieNavBar />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
        {book && (
          <>
            <h1 style={{ textAlign: 'center' }} className='mt-30 mb-10 text-4xl'>Vous êtes en train d'écouter <span className='text-[#DC7211] font-semibold'>{book.title}</span></h1>
            <div style={{ maxWidth: '100%', maxHeight: '70vh' }}>
              <ReactPlayer
                url={book.audioContent}
                playing={playing}
                controls={true}
                width="100%"
                height="100%"
                onPlay={handlePlayPause}
                onPause={handlePlayPause}
              />
            </div>
          </>
        )}
      </div>
  </>  
  );
};

export default LectureAudio;
