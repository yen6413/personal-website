import React, { useRef, useEffect } from 'react';
import './ImageCarousel.css';

function ImageCarousel() {
  const carouselRef = useRef(null);

  // Assuming images are in public/images. Adjust paths as needed.
  // Add a 'sizeClass' to each image for varied sizing
  const images = [
    { src: '/images/yen-lai-square-1.png', alt: 'Yen Lai square shot 1', sizeClass: 'square-large' },
    { src: '/images/yen-lai-horizontal-1.png', alt: 'Yen Lai horizontal shot 1', sizeClass: 'horizontal' },
    { src: '/images/yen-lai-vertical-1.png', alt: 'Yen Lai vertical shot 1', sizeClass: 'vertical' },
    { src: '/images/yen-lai-square-2.png', alt: 'Yen Lai square shot 2', sizeClass: 'square-large' },
    { src: '/images/yen-lai-horizontal-2.png', alt: 'Yen Lai horizontal shot 2', sizeClass: 'horizontal' },
    { src: '/images/yen-lai-square-3.png', alt: 'Yen Lai square shot 3', sizeClass: 'square-medium' },
    { src: '/images/yen-lai-vertical-2.png', alt: 'Yen Lai vertical shot 2', sizeClass: 'vertical' },
    { src: '/images/yen-lai-horizontal-3.png', alt: 'Yen Lai horizontal shot 3', sizeClass: 'horizontal' },
  ];

  // We'll duplicate the images to create a seamless loop
  const duplicatedImages = [...images, ...images];

  // Optional: Set the animation duration dynamically based on number of items
  // This helps ensure the speed is consistent regardless of how many images there are
  useEffect(() => {
    if (carouselRef.current) {
      const numItems = images.length;
      // Adjust this multiplier to control the speed. Higher = slower.
      const animationDuration = numItems * 2; // e.g., 2 seconds per image
      carouselRef.current.style.animationDuration = `${animationDuration}s`;
    }
  }, [images.length]);


  return (
    <div className="image-carousel-container">
      <div className="image-carousel" ref={carouselRef}>
        {duplicatedImages.map((image, index) => (
          // Use index + src as key to prevent React warnings for duplicate keys,
          // as we intentionally duplicate items. For production, you might use a more robust unique ID system.
          <div key={`${image.src}-${index}`} className={`carousel-item ${image.sizeClass}`}>
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageCarousel;