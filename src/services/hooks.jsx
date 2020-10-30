import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

export const useFetchLyrics = (artist, title) => {
  const [lyrics, setLyrics] = useState('...loading');
  
  useEffect(() => {
    fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`)
      .then(res => res.json())
      .then(json => setLyrics(json.lyrics));
  }, [title]);

  return lyrics;
};

export const useFetchSongs = (releaseId, artist) => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetch(`http://musicbrainz.org/ws/2/recording?release=${releaseId}&fmt=json`)
      .then(res => res.json())
      .then(json => json.recordings)
      .then(songs => {
        const mungedSongs = songs.map(song => ({ 
          title: song.title, 
          artist: artist, 
          id: song.id }));
        setSongs(mungedSongs);
      });
  }, [releaseId]);
  return songs;
};

export const useFetchReleases = (artistId, artist) => {
  const [releases, setReleases] = useState([]);
  const [pageNum, setPageNum] = useState(1);

  const offset = (pageNum - 1) * 20;
  const dec = () => setPageNum(prev => prev - 1);
  const inc = () => setPageNum(prev => prev + 1);

  useEffect(() => {
    fetch(`http://musicbrainz.org/ws/2/release?artist=${artistId}&fmt=json&limit=20&offset=${offset}`)
      .then(res => res.json())
      .then(json => json.releases)
      .then(releases => {
        const mungedReleases = releases.map(release => ({
          releaseTitle: release.title.replace('/', 'and'),
          releaseId: release.id,
          artist: artist,
          id: release.id
        }));
        setReleases(mungedReleases);
      });
  }, [pageNum]);
  return { releases, pageNum, dec, inc };
};

export const useFetchArtists = (artist) => {
  
  const [artists, setArtists] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [noResults, setNoResults] = useState(null);

  const offset = (pageNum - 1) * 5;
  const dec = () => setPageNum(prev => prev - 1);
  const inc = () => setPageNum(prev => prev + 1);

  useEffect(() => {
    artist && fetch(`http://musicbrainz.org/ws/2/artist?query=${artist}&fmt=json&limit=5&offset=${offset}`)
      .then(res => res.json())
      .then(json => {
        (json.count === 0) 
          ? setNoResults('No Results Found')
          : setNoResults(null);
          
        return json.artists;
      })
      .then(artistsRes => {
        const mungedArtists = artistsRes.map(artist => ({
          artist: artist.name,
          artistId: artist.id,
          id: artist.id,
          score: artist.score,
          disambiguation: artist.disambiguation
        }));
        setArtists(mungedArtists);
      });

  }, [pageNum, artist]);
  return { artists, pageNum, dec, inc, noResults };
};

export const useFormData = () => {
  const [text, setText] = useState('');

  const history = useHistory();

  const handleInputChange = ({ target }) => setText(target.value);
  const handleSubmit = (event) => {
    event.preventDefault();
    history.push(text);
  };

  return { text, handleInputChange, handleSubmit };
};
