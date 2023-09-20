import Dialog from './Dialog';
import arrow from '@/assets/icon/arrow.svg';
import { useState, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

function Modal({ headline, contents }) {
  //모달
  const opennerRef = useRef(null);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    opennerRef.current.focus();
  };
  return (
    <div>
      <motion.button
        type="button"
        ref={opennerRef}
        whileHover={{ scale: 1.04 }}
        onClick={handleOpen}
        className="text-primary flex"
      >
        <span>내용보기</span>
        <span>
          <img src={arrow} alt="화살표 이미지" className="inline-block ml-1" />
        </span>
      </motion.button>
      <AnimatePresence>
        {open && (
          <Dialog type="rotate" onClose={handleClose}>
            <Dialog.Head>
              <h3 className="DialogHeadline">{headline}</h3>
            </Dialog.Head>
            <Dialog.Body>
              <div className="border border-[#C4C4C4] rounded-10 w-[700px] h-[390px] ml-6 mr-6 mt-1 p-5">
                <span>{contents}</span>
              </div>
            </Dialog.Body>
            <Dialog.CloseButton onClose={handleClose} />
          </Dialog>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Modal;
