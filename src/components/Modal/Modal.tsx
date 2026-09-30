import { useEffect, useRef, useState, type ChangeEvent } from "react";
import { greenApi } from "../../api/greenApi";
import { formatPhone } from "../../helpers/formatPhone";
import { getChatIdFromPhone } from "../../helpers/formatPhone";
import { useChatStore } from "../../store/chatStore";
import { selectAddChat } from "../../store/selectors";
import { useNavigate } from "react-router";
import styles from "./Modal.module.scss";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Modal = ({ isOpen, onClose }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [phone, setPhone] = useState("");
  const [error, setError] = useState<string | null>(null);

  const addChat = useChatStore(selectAddChat);
  const navigate = useNavigate();

  const isDisabled = phone.length < 11 || phone.length > 15;

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

  if (!isOpen) return null;

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formattedPhone = formatPhone(phone);
    const chatId = getChatIdFromPhone(formattedPhone);

    try {
      const data = await greenApi.checkWhatsapp(chatId);

      if (data && data.existsWhatsapp) {
        addChat(chatId);
        onClose();
        navigate(`/${formattedPhone}`);
      } else {
        setError("Account not found");
      }
    } catch (err) {
      setError("An error occured. Try again later");
      console.log(err);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value.replace(/\D/g, ""));
    if (error) {
      setError(null);
    }
  };

  return (
    <div className={styles.modal}>
      <div className={styles.content} ref={modalRef}>
        <span className={styles.title}>Search by number</span>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputWrapper}>
            <input
              type="text"
              value={phone}
              onChange={handleChange}
              placeholder="7 123 456 78 90"
              className={styles.input}
            />
            {error && <p className={styles.error}>{error}</p>}
          </div>

          <button type="submit" disabled={isDisabled} className={styles.btn}>
            Find in WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
};
