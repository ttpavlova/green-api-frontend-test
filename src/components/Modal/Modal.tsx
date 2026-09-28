import { useEffect, useRef } from "react";
import styles from "./Modal.module.scss";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Modal = ({ isOpen, onClose }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleOutsideClick = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modal}>
      <div className={styles.content} ref={modalRef}>
        <span className={styles.title}>Search by number</span>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            placeholder="+7 123 456 78 90"
            className={styles.input}
          />
          <button type="submit" className={styles.btn}>
            Find in WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
};
