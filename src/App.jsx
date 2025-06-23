
import './App.css'
import React, { useState,useEffect } from 'react';
import Gallery from './gallery';
import ImageModal from './imageModal';
import shimla from '../public/images/Shimla.jpg';
import eid from '../public/images/Eid Image.jpg';
import img3 from '../public/images/IMG-20240922-WA0005.jpg';
import img4 from '../public/images/PXL_20250204_161928218.jpg';
import img5 from '../public/images/PXL_20230225_072519693.jpg';




function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [shuffledImages, setShuffledImages] = useState([]);


 

const images = [
  { id: 1, src: shimla },
  { id: 2, src: eid },
  { id: 3, src: img3 },
  { id: 4, src: img4 },
  { id: 5, src: img5 },
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