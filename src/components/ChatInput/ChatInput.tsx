import { IoArrowUp } from "react-icons/io5";
import { useRef, useState } from "react";
import styles from "./ChatInput.module.scss";

export const ChatInput = () => {
  const [text, setText] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const hasText = text.trim().length > 0;

  const resizeTextarea = () => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    textarea.style.height = "auto";
    textarea.style.height = `${Math.min(textarea.scrollHeight, 180)}px`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
    resizeTextarea();
  };

  const sendMessage = () => {
    const message = text.trim();

    if (!message) return;

    console.log("Message is ", message);

    setText("");

    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className={styles.formWrapper}>
      <form
        className={styles.form}
        onSubmit={(e) => {
          e.preventDefault();
          sendMessage();
        }}
      >
        <textarea
          ref={textareaRef}
          id="text"
          value={text}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Message"
          rows={1}
          className={styles.textarea}
        />

        {hasText && (
          <button type="submit" className={styles.submitBtn}>
            <span className={styles.icon}>
              <IoArrowUp size={20} />
            </span>
          </button>
        )}
      </form>
    </div>
  );
};
