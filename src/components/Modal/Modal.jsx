import { useEffect } from 'react';
import styles from './Modal.module.css';

export const Modal = ({ currentImage: { src, alt }, closeModal }) => {
  useEffect(() => {
    const closeByEsc = ({ code }) => {
      if (code === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', closeByEsc);

    return () => {
      window.removeEventListener('keydown', closeByEsc);
    };
  }, [closeModal]);

  const closeByBackdrop = event => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className={styles.backdrop} onClick={closeByBackdrop}>
      <div className={styles.modal}>
        <button className={styles.close} onClick={closeModal}>
          Close
        </button>
        <img src={`https://image.tmdb.org/t/p/w500${src}`} alt={alt} />
      </div>
    </div>
  );
};


 