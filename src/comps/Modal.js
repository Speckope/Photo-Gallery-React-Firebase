import React from 'react';
import { motion } from 'framer-motion';

const Modal = ({ selectedImg, setSelectedImg }) => {
  const handleClick = (e) => {
    // We check if what we click on is backdrop, so when we click on picture modal doesnt closes!
    if (e.target.classList.contains('backdrop')) setSelectedImg(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className='backdrop'
      onClick={handleClick}
    >
      <motion.img
        src={selectedImg}
        // this will take it off the screen
        initial={{ y: '-100vh' }}
        animate={{ y: 0 }}
        alt='full size img'
      />
    </motion.div>
  );
};

export default Modal;
