
import './App.css'
import React, { useState,useEffect } from 'react';
import Gallery from './gallery';
import ImageModal from './imageModal';



function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [shuffledImages, setShuffledImages] = useState([]);


  const images = [
    { id: 1, src: "/images/Shimla.jpg" },
    { id: 2, src: '/images/Eid Image.jpg' },
    { id: 3, src: '/images/IMG-20240922-WA0005.jpg' },
    { id: 4, src: '/images/PXL_20240923_014435036.jpg' },
    { id: 5, src: '/images/PXL_20250204_161928218.jpg' },
    { id: 6, src: '/images/PXL_20230225_072519693.jpg'},
    { id: 7, src: '/images/IMG20250205133440.jpg'}
  ];
  useEffect(() => {
    const shuffled = [...images];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setShuffledImages(shuffled);
  }, []);

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center"> My Photos</h1>
      <Gallery images={shuffledImages} onImageClick={setSelectedImage} />
      {selectedImage && (
        <ImageModal image={selectedImage} onClose={() => setSelectedImage(null)} />
      )}
    </div>
  );
};



export default App