import React from 'react';

const Gallery = ({ images, onImageClick }) => {
  return (
    <div className="columns-2 sm:columns-3 md:columns-4 gap-4 space-y-4">
      {images.map((img) => (
        <img
          key={img.id}
          src={img.src}
          alt={`img-${img.id}`}
          className="w-full mb-4 rounded-lg break-inside-avoid cursor-pointer hover:scale-105 transition-transform duration-300"
          onClick={() => onImageClick(img.src)}
        />
      ))}
    </div>
  );
};

export default Gallery;