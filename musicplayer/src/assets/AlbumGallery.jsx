import React from 'react';

function AlbumGallery({ songs, onSongClick }) {
  return (
    <div>
      <h2>📀 Album Covers</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "10px"
        }}
      >
        {songs.map((song) => (
          <div
            key={song.id}
            style={{ cursor: "pointer" }}
            onClick={() => onSongClick(song)}
          >
            <img
              src={song.cover}
              alt={song.album}
              style={{ width: "100%", borderRadius: "8px" }}
            />
            <p style={{ textAlign: "center" }}>{song.album}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AlbumGallery;
