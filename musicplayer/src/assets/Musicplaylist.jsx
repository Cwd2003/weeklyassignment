import React, { useState, useRef } from 'react';
import AlbumGallery from './AlbumGallery';
import ImageCollection from './Imagecollection';


export default function Musicplaylist() {
  const [search, setSearch] = useState('');
  const [currentSong, setCurrentSong] = useState(null); // store song object
  const nowPlayingRef = useRef(null); // 🔹 Reference to Now Playing box

  const [playlist] = useState([
    {
      id: 1,
      title: "Haan haige aa",
      singer: "Karan Aujla",
      album: "No Name",
      duration: "4.48",
      cover: "/images/cover1.jpg",
      audio: "/songs/haanhaigeaa.mp3"
    },
    {
      id: 2,
      title: "Chitta Kurta",
      singer: "Karan Aujla",
      album: "No Name",
      duration: "4.48",
      cover: "/images/cover2.jpg",
      audio: "/songs/chittakurta.mp3"
    },
    {
      id: 3,
      title: "Courtside",
      singer: "Karan Aujla",
      album: "No Name",
      duration: "4.48",
      cover: "/images/cover3.jpg",
      audio: "/songs/courtside.mp3"
    },
    {
      id: 4,
      title: "Wavy",
      singer: "Karan Aujla",
      album: "No Name",
      duration: "4.48",
      cover: "/images/cover4.jpg",
      audio: "/songs/wavy.mp3"
    }
    ,
    {
      id: 5,
      title: "52 Bars",
      singer: "Karan Aujla",
      album: "No Name",
      duration: "4.48",
      cover: "/images/52bars.jpg",
      audio: "/songs/52bars.mp3"
    }
    ,
    {
      id: 6,
      title: "Chithiyan",
      singer: "Karan Aujla",
      album: "No Name",
      duration: "4.48",
      cover: "/images/chithiyan.jpg",
      audio: "/songs/chithiyan.mp3"
    }
    ,
    {
      id: 7,
      title: "Hint",
      singer: "Karan Aujla",
      album: "No Name",
      duration: "4.48",
      cover: "/images/hint.jpg",
      audio: "/songs/hint.mp3"
    }
    ,
    {
      id: 8,
      title: "On Top",
      singer: "Karan Aujla",
      album: "No Name",
      duration: "4.48",
      cover: "/images/ontop.jpg",
      audio: "/songs/ontop.mp3"
    }
    ,
    {
      id: 9,
      title: "Take It Easy",
      singer: "Karan Aujla",
      album: "No Name",
      duration: "4.48",
      cover: "/images/takeiteasy.jpg",
      audio: "/songs/takeiteasy.mp3"
    }
    ,
    {
      id: 10,
      title: "WYTB",
      singer: "Karan Aujla",
      album: "No Name",
      duration: "4.48",
      cover: "/images/wytb.jpg",
      audio: "/songs/wytb.mp3"
    }

  ]);

  const handleSongClick = (song) => {
    setCurrentSong(song);
    setTimeout(() => {
      nowPlayingRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100); // 🔹 Small delay to ensure render
  };




  const filteredPlaylist = playlist.filter(song =>
    song.title.toLowerCase().includes(search.toLowerCase()) ||
    song.singer.toLowerCase().includes(search.toLowerCase()) ||
    song.album.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>🎵 Music Playlist</h2>

      {/* Search bar */}
      <input
        type="text"
        placeholder="Search for a song..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Song List */}
      {filteredPlaylist.map((song) => (
        <div
          key={song.id}
          style={{ marginBottom: "20px", cursor: "pointer" }}
          onClick={() => setCurrentSong(song)}
        >
          <h3>{song.title}</h3>
          <p>Singer: {song.singer}</p>
          <p>Album: {song.album}</p>
          <p>Duration: {song.duration}</p>
        </div>
      ))}

      {/* Now Playing Box */}
      {currentSong && (
        <div
          ref={nowPlayingRef}
          style={{
            marginTop: "20px",
            padding: "15px",
            background: "linear-gradient(135deg, #1e1e1e, #2c2c2c)",
            color: "#fff",
            borderRadius: "12px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
            textAlign: "center"
          }}
        >  <img src={currentSong.cover} alt={currentSong.album}
          style={{
            width: "600px",
            height: "300px",
            borderRadius: "12px",
            boxShadow: "0 0 15px rgba(255,255,255,0.3)",
            objectFit: "cover"
          }} />
          <div style={{ flex: 1 }}>
            <h3 style={{
              fontSize: "1.6rem",
              margin: "0 0 8px",

              color: "#ff4d4d",
              textShadow: "0 0 8px rgba(255,77,77,0.7)"
            }}>
              ▶ Now Playing: {currentSong.title}
            </h3></div>
          <p style={{ fontSize: "1rem", opacity: 0.8 }}>
            {currentSong.singer} - {currentSong.album}
          </p>


          <audio
            key={currentSong.audio}
            controls
            autoPlay
            style={{
              width: "100%",
              marginTop: "15px",
              outline: "none"
            }}
          >
            <source src={currentSong.audio} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>

        </div>
      )}

      {/* Gallery */}
      <AlbumGallery
        songs={filteredPlaylist}
        onSongClick={handleSongClick}
      />
      <ImageCollection />
    </div>
  );
}
