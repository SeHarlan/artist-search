import { useEffect, useState } from 'react';

export const useFetchLyrics = (artist, title) => {
  const [lyrics, setLyrics] = useState('');
  
  useEffect(() => {
    fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`)
      .then(res => res.json())
      .then(lyrics => setLyrics(lyrics.lyrics));
  }, [title]);

  return lyrics;
};
