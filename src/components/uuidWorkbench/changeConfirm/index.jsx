import { useEffect, useRef } from "react";
import { FiAlertTriangle } from "react-icons/fi";
import styles from "./styles.module.css";

const ChangeConfirm = ({ onCancel, onConfirm }) => {
  const cancelButtonRef = useRef(null);
  const confirmButtonRef = useRef(null);

  useEffect(() => {
    cancelButtonRef.current?.focus();
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onCancel();
      if (event.key === "Tab") {
        const first = cancelButtonRef.current;
        const last = confirmButtonRef.current;
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onCancel]);

  return (
    <div className={styles.overlay} onMouseDown={(event) => { if (event.target === event.currentTarget) onCancel(); }}>
      <section className={styles.dialog} role="alertdialog" aria-modal="true" aria-labelledby="clear-title" aria-describedby="clear-description">
        <span className={styles.warningIcon}><FiAlertTriangle aria-hidden="true" /></span>
        <h2 id="clear-title">Clear this batch?</h2>
        <p id="clear-description">This removes all UUIDs currently shown in the results panel. This action cannot be undone.</p>
        <div className={styles.actions}>
          <button ref={cancelButtonRef} type="button" onClick={onCancel}>Keep batch</button>
          <button ref={confirmButtonRef} type="button" onClick={onConfirm}>Clear UUIDs</button>
        </div>
      </section>
    </div>
  );
};

export default ChangeConfirm;
