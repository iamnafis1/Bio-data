import React from 'react';

const ImageModal = ({ image, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-2xl font-bold"
      >
        &times;
      </button>
      <img src={image} alt="modal" className="max-w-full max-h-full rounded" />
    </div>
  );
};

export default ImageModal;