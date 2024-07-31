import React, { useState } from 'react';
import ImageItem from './ImageItem';
import Modal from './Modal';
import './ImageGallery.css';

const images = [
  // Add your image URLs here
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/150',
];

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const navigateImages = (direction) => {
    const currentIndex = images.indexOf(selectedImage);
    if (direction === 'next') {
      const nextIndex = (currentIndex + 1) % images.length;
      setSelectedImage(images[nextIndex]);
    } else if (direction === 'prev') {
      const prevIndex = (currentIndex - 1 + images.length) % images.length;
      setSelectedImage(images[prevIndex]);
    }
  };

  return (
    <div className="image-gallery">
      {images.map((image, index) => (
        <ImageItem key={index} src={image} onClick={() => openModal(image)} />
      ))}
      {selectedImage && (
        <Modal
          image={selectedImage}
          onClose={closeModal}
          onNavigate={navigateImages}
        />
      )}
    </div>
  );
};

export default ImageGallery;