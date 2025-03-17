import { memo, useEffect } from 'react'

import { motion, AnimatePresence } from "framer-motion";

import { createPortal } from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import '../../styles/Modal.css'
import { ProjectType } from '../../types/data';

interface ModalProps {
  project:ProjectType | null;
  onClose: () => void;
}

const Modal = memo(({project, onClose}:ModalProps) => {

  if (!project) return null;

  useEffect(()=>{
    const handleKeyDown = (e: KeyboardEvent) => {
      if(e.key === "Escape") onClose();
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  },[onClose])

  return createPortal(
    <AnimatePresence>
      <motion.div 
        className='modal__overlay' 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
      >
        <motion.div
          className="modal__content"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => {e.stopPropagation()}}
        >
          <div className="modal__header">
            <h5 className="modal__title">{project.name}</h5>
            <div className="close-btn" onClick={onClose}><FontAwesomeIcon icon={faTimes} /></div>
          </div>
          
          <div className='modal__wrapper'>
            <div className="modal__image">
              {project.images?.map((img,index) => {
                return <img loading='lazy' key={index} src={img} alt={`Screenshot ${index}`} />
              })}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body
  )
})

export default Modal