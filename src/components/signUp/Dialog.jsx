import { motion } from 'framer-motion';
import Backdrop from './Backdrop';
import { useLayoutEffect, useRef } from 'react';
import closeButton from '@/assets/icon/closeModal.svg';

const dropInOut = {
  from: { y: '-100vh' },
  to: { y: 0 },
  exit: { y: '100vh' },
};

const dropScaleInOut = {
  from: { y: '-100vh', scale: 0 },
  to: { y: 0, scale: 1 },
  exit: { y: '100vh', scale: 0 },
};

const dropRotateScaleInOut = {
  from: { y: '100vh', scale: 0 },
  to: { y: 0, scale: 1 },
  exit: {
    y: '-100vh',
    scale: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const animationConfig = {
  type: 'spring',
  mass: 6,
  stiffness: 700,
  damping: 100,
};

/* COMPONENT ---------------------------------------------------------------- */

function Dialog({
  type = 'drop' /* drop, scale, rotate */,
  children,
  isBackdropClickClose = true,
  onClose,
}) {
  const dialogRef = useRef(null);

  useLayoutEffect(() => {
    const dialog = dialogRef.current;
    const focusable = dialog.querySelectorAll(
      'button, h,input, textarea,p'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    const handleKeyboardTrap = (e) => {
      const { target, key, shiftKey } = e;

      switch (target) {
        case first:
          if (key === 'Tab' && shiftKey) {
            e.preventDefault();
            last.focus();
          }
          return;
        case last:
          if (key === 'Tab' && !shiftKey) {
            e.preventDefault();
            first.focus();
          }
      }
    };

    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    dialog.addEventListener('keydown', handleKeyboardTrap);
    dialog.addEventListener('keydown', handleEscape);

    return () => {
      dialog.removeEventListener('keydown', handleKeyboardTrap);
      dialog.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  const handleStopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <Backdrop onClose={isBackdropClickClose ? onClose : null}>
      <motion.div
        ref={dialogRef}
        className="box-border flex flex-col z-[100] fixed  w-[750px] h-[500px] bg-white top-[25%] left-[30.5%] rounded-10"
        // drag
        // dragConstraints={{
        //   top: 10,
        //   left: 10,
        //   right: 10,
        //   bottom: 10,
        // }}
        variants={
          type === 'scale'
            ? dropScaleInOut
            : type === 'rotate'
            ? dropRotateScaleInOut
            : dropInOut
        }
        initial="from"
        animate="to"
        exit="exit"
        transition={animationConfig}
        whileTap={{ scale: 0.95 }}
        onClick={handleStopPropagation}
      >
        {children}
      </motion.div>
    </Backdrop>
  );
}

Dialog.Head = function DialogHead({ children }) {
  return (
    <div className="flex justify-start text-2xl font-bold m-6">{children}</div>
  );
};

Dialog.Body = function DialogBody({ children }) {
  return <div className="DialogBody">{children}</div>;
};

Dialog.CloseButton = function DialogCloseButton({ onClose, label = 'close' }) {
  return (
    <button
      type="button"
      className="DialogCloseButton absolute top-5 right-5"
      aria-label={label}
      title={label}
      onClick={onClose}
    >
      <img
        src={closeButton}
        alt="닫기 버튼 이미지"
      />
    </button>
  );
};
export default Dialog;
